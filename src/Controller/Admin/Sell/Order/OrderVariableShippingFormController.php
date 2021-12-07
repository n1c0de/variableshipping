<?php
declare(strict_types = 1);

namespace PrestaShop\Module\VariableShipping\Controller\Admin\Sell\Order;

use \Context;
use \Carrier;
use PrestaShopBundle\Security\Annotation\AdminSecurity;
use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController as AbstractAdminController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class OrderVariableShippingFormController extends AbstractAdminController
{
	/**
	 * Retrieves variable shipping carrier.
	 *
	 * @AdminSecurity(
	 *     "is_granted('ROLE_MOD_TAB_ADMINACCESS_UPDATE', request.get('_legacy_controller'))",
	 *     redirectRoute="admin_orders_index",
	 *     message="You do not have permission to edit this."
	 * )
	 *
	 * @param int $orderId
	 *
	 * @return JsonResponse
	 */
	public function getVariableShippingCarrierAction(Request $request)
	{
		try {
			$configuration = $this->get('prestashop.adapter.legacy.configuration');
			$response = [
				'status' => true,
				'message' => $this->trans(
					'The variable shipping carrier ID has been successfully retrieved.',
					'Admin.Notifications.Success',
					[]
				),
				'idVariableShippingCarrier' => (int) $configuration->get(
					'VARIABLE_SHIPPING_CARRIER_ID'
				)
			];
		} catch (exception $e) {
			$response = [
				'status' => false,
				'message' => $this->trans(
					'Unable to retrieve the variable shipping carrier ID: %error%',
					'Admin.Notifications.Error',
					['%error%' => $e]
				)
			];
		}
		return $this->json($response);
	}

	/**
	 * Updates variable shipping cost.
	 *
	 * @AdminSecurity(
	 *     "is_granted('ROLE_MOD_TAB_ADMINACCESS_UPDATE', request.get('_legacy_controller'))",
	 *     redirectRoute="admin_orders_index",
	 *     message="You do not have permission to edit this."
	 * )
	 *
	 * @param int $orderId
	 *
	 * @return JsonResponse
	 */
	public function updateAction(Request $request)
	{
		try {
			$configuration = $this->get('prestashop.adapter.legacy.configuration');
			$id_variable_shipping_carrier = (int) $configuration->get(
				'VARIABLE_SHIPPING_CARRIER_ID'
			);
			$variable_shipping_carrier = new Carrier(
				$id_variable_shipping_carrier,
				Context::getContext()->language->id
			);
			$taxes_rate = $variable_shipping_carrier->getTaxesRate();
			$tmp_file = _PS_MODULE_DIR_ . 'variableshipping/tmp/order-'
				. $request->request->get('id_customer')
				. '-'
				. $request->request->get('id_cart');
			$cost = floatval($request->request->get('shipping_cost'));
			$cost = $cost / (1 + $taxes_rate / 100);
			file_put_contents(
				$tmp_file,
				round($cost, 2)
			);
			$response = [
				'status' => true,
				'message' => $this->trans(
					'The variable shipping cost has been successfully updated.',
					'Admin.Notifications.Success',
					[]
				)
			];
		} catch (exception $e) {
			$response = [
				'status' => false,
				'message' => $this->trans(
					'Unable to update the variable shipping cost: %error%',
					'Admin.Notifications.Error',
					['%error%' => $e]
				)
			];
		}
		return $this->json($response);
	}
}
