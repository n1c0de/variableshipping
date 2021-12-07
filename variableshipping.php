<?php
declare(strict_types = 1);

if (!defined('_PS_VERSION_')) {
	exit;
}

class VariableShipping extends CarrierModule
{
	/**
	 * Sets module's configuration.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->name = 'variableshipping';
		$this->tab = 'shipping_logistics';
		$this->version = '1.0.0';
		$this->author = 'n1c0de';
		$this->need_instance = 0;
		$this->ps_versions_compliancy = [
			'min' => '1.7.7.0',
			'max' => _PS_VERSION_
		];
		$this->bootstrap = true;

		parent::__construct ();

		$this->displayName = $this->trans(
			'Variable Shipping',
			[],
			'Modules.Variableshipping.Admin'
		);
		$this->description = $this->trans(
			'Allows a variable shipping price to be set for manual orders in the back office.',
			[],
			'Modules.Variableshipping.Admin'
		);
		$this->confirmUninstall = $this->trans(
			'Are you sure to uninstall %moduleName%?',
			['%moduleName%' => $this->displayName],
			'Modules.Variableshipping.Admin'
		);

		// Checks if variable shipping carrier exists in carrier list
		if (self::isInstalled($this->name)) {
			$carriers = Carrier::getCarriers(
				$this->context->language->id,
				true,
				false,
				false,
				NULL,
				PS_CARRIERS_AND_CARRIER_MODULES_NEED_RANGE
			);

			$id_carrier_list = [];
			foreach($carriers as $carrier) {
				$id_carrier_list[] = $carrier['id_carrier'];
			}

			if (!in_array(
				(int) Configuration::get('VARIABLE_SHIPPING_CARRIER_ID'),
				$id_carrier_list
			)) {
				$this->warning = $this->trans(
					'The variable shipping carrier does not exist in carrier list.',
					[],
					'Modules.Variableshipping.Admin'
				);
			}
		}
	}

	/**
	 * Installs module.
	 *
	 * @return bool
	 */
	public function install()
	{
		if (Shop::isFeatureActive()) {
			Shop::setContext(Shop::CONTEXT_ALL);
		}

		// Configures variable shipping carrier
		$carrierConfig = [
			'name' => 'Variable Shipping',
			'id_tax_rules_group' => 0,
			'active' => true,
			'deleted' => false,
			'shipping_handling' => false,
			'range_behavior' => false,
			'delay' => [],
			'id_zone' => 1,
			'is_module' => true,
			'shipping_external' => true,
			'external_module_name' => 'variableshipping',
			'need_range' => true
		];
		$languages = Language::getLanguages(true);
		foreach ($languages as $language) {
			$carrierConfig['delay'][$language['iso_code']] = 'Customizable delay';
		}

		if (!parent::install()
			|| !self::installExternalCarrier($carrierConfig)
			|| !$this->registerHook([
				'actionCarrierUpdate',
				'actionAdminControllerSetMedia'
			])
		) {
			return false;
		}
		return true;
	}

	/**
	 * Uninstalls module.
	 *
	 * @return bool
	 */
	public function uninstall()
	{
		$variable_shipping_carrier = new Carrier(
			(int) Configuration::get('VARIABLE_SHIPPING_CARRIER_ID')
		);
		$variable_shipping_carrier->deleted = true;

		// Sets other default carrier if the current is variable shipping carrier
		if (Configuration::get('PS_CARRIER_DEFAULT') === (int) $variable_shipping_carrier->id) {
			$carriers = Carrier::getCarriers(
				$this->context->language->id,
				true,
				false,
				false,
				NULL,
				PS_CARRIERS_AND_CARRIER_MODULES_NEED_RANGE
			);

			foreach($carriers as $carrier) {
				if ($carrier['active']
					&& !$carrier['deleted']
					&& $carrier['name'] !== $this->_config['name']
				) {
					Configuration::updateValue(
						'PS_CARRIER_DEFAULT',
						$carrier['id_carrier']
					);
				}
			}
		}

		Configuration::deleteByName('VARIABLE_SHIPPING_CARRIER_ID');

		// Deletes all order files in temporary directory
		$tmp_files = glob(_PS_MODULE_DIR_ . 'variableshipping/tmp/*');
		$order_files = array_filter($tmp_files, function($a) {
			return preg_match('/order-\d+-\d+/', $a);
		});
		foreach($order_files as $file) {
			unlink($file);
		}

		if (!parent::uninstall()
			|| !$variable_shipping_carrier->update()
		) {
			return false;
		}
		return true;
	}

	/**
	 * Makes module compatible with new translation system.
	 *
	 * @return bool
	 */
	public function isUsingNewTranslationSystem()
	{
		return true;
	}

	/**
	 * Installs external carrier.
	 *
	 * @param array $config
	 *
	 * @return bool|int
	 */
	public static function installExternalCarrier($config)
	{
		$carrier = new Carrier();
		$carrier->name = $config['name'];
		$carrier->id_tax_rules_group = $config['id_tax_rules_group'];
		$carrier->id_zone = $config['id_zone'];
		$carrier->active = $config['active'];
		$carrier->deleted = $config['deleted'];
		$carrier->delay = $config['delay'];
		$carrier->shipping_handling = $config['shipping_handling'];
		$carrier->range_behavior = $config['range_behavior'];
		$carrier->is_module = $config['is_module'];
		$carrier->shipping_external = $config['shipping_external'];
		$carrier->external_module_name = $config['external_module_name'];
		$carrier->need_range = $config['need_range'];

		$languages = Language::getLanguages(true);
		foreach ($languages as $language) {
			$carrier->delay[(int) $language['id_lang']] = $config['delay'][$language['iso_code']];
		}

		if ($carrier->add()) {
			$groups = Group::getGroups(true);
			foreach ($groups as $group) {
				Db::getInstance()->insert(
					'carrier_group',
					[
						'id_carrier' => (int) $carrier->id,
						'id_group' => (int) $group['id_group']
					]
				);
			}

			$rangePrice = new RangePrice();
			$rangePrice->id_carrier = $carrier->id;
			$rangePrice->delimiter1 = '0';
			$rangePrice->delimiter2 = '10000';
			$rangePrice->add();

			$rangeWeight = new RangeWeight();
			$rangeWeight->id_carrier = $carrier->id;
			$rangeWeight->delimiter1 = '0';
			$rangeWeight->delimiter2 = '10000';
			$rangeWeight->add();

			$zones = Zone::getZones(true);
			foreach ($zones as $zone) {
				Db::getInstance()->insert(
					'carrier_zone',
					[
						'id_carrier' => (int) $carrier->id,
						'id_zone' => (int) $zone['id_zone']
					]
				);
				Db::getInstance()->insert(
					'delivery',
					[
						'id_carrier' => (int) $carrier->id,
						'id_range_price' => (int) $rangePrice->id,
						'id_range_weight' => NULL,
						'id_zone' => (int) $zone['id_zone'],
						'price' => (float) 0.00
					]
				);
				Db::getInstance()->insert(
					'delivery',
					[
						'id_carrier' => (int) $carrier->id,
						'id_range_price' => NULL,
						'id_range_weight' => (int) $rangeWeight->id,
						'id_zone' => (int) $zone['id_zone'],
						'price' => (float) 0.00
					]
				);
			}

			Configuration::updateValue(
				'VARIABLE_SHIPPING_CARRIER_ID',
				(int) $carrier->id
			);

			if (!copy(
				_PS_MODULE_DIR_ . 'variableshipping/views/img/carrier.jpg',
				_PS_SHIP_IMG_DIR_ . '/' . (int) $carrier->id . '.jpg'
			)) {
				return false;
			}
			return true;
		}
		return false;
	}

	/**
	 * Updates variable shipping carrier ID.
	 *
	 * @param array $params
	 *
	 * @return void
	 */
	public function hookActionCarrierUpdate($params)
	{
		$id_variable_shipping_carrier = (int) Configuration::get(
			'VARIABLE_SHIPPING_CARRIER_ID'
		);
		if ($params['id_carrier'] === $id_variable_shipping_carrier) {
			Configuration::updateValue(
				'VARIABLE_SHIPPING_CARRIER_ID',
				(int) $params['carrier']->id
			);
		}
	}

	/**
	 * Sets media to admin pages.
	 *
	 * @param array $params
	 *
	 * @return void
	 */
	public function hookActionAdminControllerSetMedia($params)
	{
		if (Tools::getValue('controller') === 'AdminOrders') {
			$this->context->controller->addJS(
				$this->_path . 'views/js/shipping-form.bundle.js'
			);
		}
	}

	/**
	 * Returns order shipping cost.
	 * @see CarrierModuleCore->getOrderShippingCost($params, $shipping_cost)
	 * @see CartCore->getOrderShippingCost(...)
	 *
	 * @param object $params
	 * @param float $shipping_cost
	 *
	 * @return float|bool Shipping total, false if not possible to ship
	 *                    with the given carrier.
	 */
	public function getOrderShippingCost($params, $shipping_cost)
	{
		return $this->getOrderShippingCostExternal($params);
	}

	/**
	 * Returns order shipping cost from external carrier.
	 * @see CarrierModuleCore->getOrderShippingCostExternal($params)
	 *
	 * @param object $params
	 *
	 * @return float|bool Shipping total, false if not possible to ship
	 *                    with the given employee.
	 */
	public function getOrderShippingCostExternal($params)
	{
		$context = Context::getContext();
		$tmp_file = _PS_MODULE_DIR_ . 'variableshipping/tmp/'
			. 'order-' . $params->id_customer . '-' . $params->id;
		$value = file_exists($tmp_file) ? file_get_contents($tmp_file) : NULL;

		if (!$context->employee || !$context->employee->id) {
			return false;
		}
		return $value ? round(floatval($value), 2) : 0.00;
	}
}
