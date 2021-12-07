/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

/**
 * Encapsulates selectors for "Create order" page
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  productCustomizationFieldTypeFile: 0,
  productCustomizationFieldTypeText: 1,

  orderCreationContainer: '#order-creation-container',
  requiredFieldMark: '.js-required-field-mark',
  cartInfoWrapper: '#js-cart-info-wrapper',

  // selectors related to customer block
  customerSearchInput: '#customer-search-input',
  customerSearchResultsBlock: '.js-customer-search-results',
  customerSearchResultTemplate: '#customer-search-result-template',
  customerSearchEmptyResultWarning: '#customer-search-empty-result-warn',
  customerSearchLoadingNotice: '#customer-search-loading-notice',
  customerAddBtn: '#customer-add-btn',
  changeCustomerBtn: '.js-change-customer-btn',
  customerSearchRow: '.js-search-customer-row',
  chooseCustomerBtn: '.js-choose-customer-btn',
  notSelectedCustomerSearchResults: '.js-customer-search-result:not(.border-success)',
  customerSearchResultName: '.js-customer-name',
  customerSearchResultEmail: '.js-customer-email',
  customerSearchResultId: '.js-customer-id',
  customerSearchResultBirthday: '.js-customer-birthday',
  customerDetailsBtn: '.js-details-customer-btn',
  customerSearchResultColumn: '.js-customer-search-result-col',
  customerSearchBlock: '#customer-search-block',
  customerCartsTab: '.js-customer-carts-tab',
  customerOrdersTab: '.js-customer-orders-tab',
  customerCartsTable: '#customer-carts-table',
  customerCartsTableRowTemplate: '#customer-carts-table-row-template',
  customerCheckoutHistory: '#customer-checkout-history',
  customerOrdersTable: '#customer-orders-table',
  customerOrdersTableRowTemplate: '#customer-orders-table-row-template',
  cartRulesTable: '#cart-rules-table',
  cartRulesTableRowTemplate: '#cart-rules-table-row-template',
  useCartBtn: '.js-use-cart-btn',
  cartDetailsBtn: '.js-cart-details-btn',
  cartIdField: '.js-cart-id',
  cartDateField: '.js-cart-date',
  cartTotalField: '.js-cart-total',
  useOrderBtn: '.js-use-order-btn',
  orderDetailsBtn: '.js-order-details-btn',
  orderIdField: '.js-order-id',
  orderDateField: '.js-order-date',
  orderProductsField: '.js-order-products',
  orderTotalField: '.js-order-total-paid',
  orderPaymentMethod: '.js-order-payment-method',
  orderStatusField: '.js-order-status',
  emptyListRowTemplate: '#js-empty-list-row',
  loadingListRowTemplate: '#js-loading-list-row',
  emptyListRow: '.js-empty-row',

  // selectors related to cartRules block
  cartRulesBlock: '#cart-rules-block',
  cartRuleSearchInput: '#search-cart-rules-input',
  cartRulesSearchResultBox: '#search-cart-rules-result-box',
  cartRulesNotFoundTemplate: '#cart-rules-not-found-template',
  foundCartRuleTemplate: '#found-cart-rule-template',
  foundCartRuleListItem: '.js-found-cart-rule',
  cartRuleNameField: '.js-cart-rule-name',
  cartRuleDescriptionField: '.js-cart-rule-description',
  cartRuleValueField: '.js-cart-rule-value',
  cartRuleDeleteBtn: '.js-cart-rule-delete-btn',
  cartRuleErrorBlock: '#js-cart-rule-error-block',
  cartRuleErrorText: '#js-cart-rule-error-text',

  // selectors related to addresses block
  addressesBlock: '#addresses-block',
  deliveryAddressDetails: '#delivery-address-details',
  invoiceAddressDetails: '#invoice-address-details',
  deliveryAddressSelect: '#delivery-address-select',
  invoiceAddressSelect: '#invoice-address-select',
  addressSelect: '.js-address-select',
  addressesContent: '#addresses-content',
  addressesWarning: '#addresses-warning',
  deliveryAddressEditBtn: '#js-delivery-address-edit-btn',
  invoiceAddressEditBtn: '#js-invoice-address-edit-btn',
  addressAddBtn: '#js-add-address-btn',

  // selectors related to summary block
  summaryBlock: '#summary-block',
  summaryTotalProducts: '.js-total-products',
  summaryTotalDiscount: '.js-total-discounts',
  summaryTotalShipping: '.js-total-shipping',
  summaryTotalTaxes: '.js-total-taxes',
  summaryTotalWithoutTax: '.js-total-without-tax',
  summaryTotalWithTax: '.js-total-with-tax',
  placeOrderCartIdField: '.js-place-order-cart-id',
  processOrderLinkTag: '#js-process-order-link',
  orderMessageField: '#js-order-message-wrap textarea',
  sendProcessOrderEmailBtn: '#js-send-process-order-email-btn',
  summarySuccessAlertBlock: '#js-summary-success-block',
  summaryErrorAlertBlock: '#js-summary-error-block',
  summarySuccessAlertText: '#js-summary-success-block .alert-text',
  summaryErrorAlertText: '#js-summary-error-block .alert-text',

  // selectors related to shipping block
  shippingBlock: '#shipping-block',
  shippingForm: '.js-shipping-form',
  noCarrierBlock: '.js-no-carrier-block',
  deliveryOptionSelect: '#delivery-option-select',
  totalShippingField: '.js-total-shipping-tax-inc',
  freeShippingSwitch: '.js-free-shipping-switch',
  recycledPackagingSwitch: '.js-recycled-packaging-switch',
  recycledPackagingSwitchValue: '.js-recycled-packaging-switch:checked',
  isAGiftSwitch: '.js-is-gift-switch',
  isAGiftSwitchValue: '.js-is-gift-switch:checked',
  giftMessageField: '#cart_gift_message',

  // selectors related to cart block
  cartBlock: '#cart-block',
  cartCurrencySelect: '#js-cart-currency-select',
  cartLanguageSelect: '#js-cart-language-select',
  productSearch: '#product-search',
  combinationsSelect: '#combination-select',
  productResultBlock: '#product-search-results',
  productSelect: '#product-select',
  quantityInput: '#quantity-input',
  inStockCounter: '.js-in-stock-counter',
  combinationsTemplate: '#combinations-template',
  combinationsRow: '.js-combinations-row',
  productSelectRow: '.js-product-select-row',
  productCustomFieldsContainer: '#js-custom-fields-container',
  productCustomizationContainer: '#js-customization-container',
  productCustomFileTemplate: '#js-product-custom-file-template',
  productCustomTextTemplate: '#js-product-custom-text-template',
  productCustomInputLabel: '.js-product-custom-input-label',
  productCustomInput: '.js-product-custom-input',
  quantityRow: '.js-quantity-row',
  addToCartButton: '#add-product-to-cart-btn',
  productsTable: '#products-table',
  productsTableRowTemplate: '#products-table-row-template',
  productsTableGiftRowTemplate: '#products-table-gift-row-template',
  listedProductImageField: '.js-product-image',
  listedProductNameField: '.js-product-name',
  listedProductAttrField: '.js-product-attr',
  listedProductReferenceField: '.js-product-ref',
  listedProductUnitPriceInput: '.js-product-unit-input',
  listedProductQtyInput: '.js-product-qty-input',
  listedProductQtyStock: '.js-product-qty-stock',
  listedProductGiftQty: '.js-product-gift-qty',
  productTotalPriceField: '.js-product-total-price',
  listedProductCustomizedTextTemplate: '#js-table-product-customized-text-template',
  listedProductCustomizedFileTemplate: '#js-table-product-customized-file-template',
  listedProductCustomizationName: '.js-customization-name',
  listedProductCustomizationValue: '.js-customization-value',
  listedProductDefinition: '.js-product-definition-td',
  productRemoveBtn: '.js-product-remove-btn',
  productTaxWarning: '.js-tax-warning',
  noProductsFoundWarning: '.js-no-products-found',
  searchingProductsNotice: '.js-searching-products',
  productAddForm: '#js-add-product-form',
  cartErrorAlertBlock: '#js-cart-error-block',
  cartErrorAlertText: '#js-cart-error-block .alert-text',
  createOrderButton: '#create-order-button',
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_order_create_cart_editor__ = __webpack_require__(5);



$(document).ready(() => {
	const token = $('body').data('token');
	let idCustomer = null;
	let idCart = null;
	let idVariableShippingCarrier = null;
	let shippingCost = null;

	/*
	 * Displays variable shipping cost field.
	 */
	const displayVariableShippingCostField = (e) => {
		if (Number($(`${__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].deliveryOptionSelect} > option:selected`).val()) === idVariableShippingCarrier) {
			$(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].totalShippingField).parent('p').hide();
			$('#variable_shipping_cost').parent('.input-group-append').show();
			$(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].freeShippingSwitch).parent('.form-group').hide();
		} else {
			$(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].totalShippingField).parent('p').show();
			$('#variable_shipping_cost').parent('.input-group-append').hide();
			$(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].freeShippingSwitch).parent('.form-group').show();
		}
	};

	if ($(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].deliveryOptionSelect).get(0)) {
		const observer = new MutationObserver(displayVariableShippingCostField);

		$(`${__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].shippingForm} p:last`).after(
			'<div class="input-group-append" style="display: none;">'
				+ '<input id="variable_shipping_cost" class="form-control" type="text" name="variable_shipping_cost">'
				+ '<button id="variable_shipping_cost_button" class="btn btn-primary" type="button">Update</button>'
			+ '</div>'
		);

		// Retrieves variable shipping carrier ID
		$.ajax({
			type: 'GET',
			url: `${window.location.origin}${window.baseAdminDir}index.php/sell/orders/variable-shipping-cost`,
			dataType: 'json',
			data: {
				'ajax': true,
				'_token': token
			},
			success: (response) => {
				idVariableShippingCarrier = response.idVariableShippingCarrier;

				observer.observe($(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].deliveryOptionSelect).get(0), {
					subtree: true,
					childList: true
				});

				$(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].deliveryOptionSelect).on(
					'change',
					displayVariableShippingCostField
				);

				// Updates variable shipping cost
				$('#variable_shipping_cost_button').on('click', e => {
					e.preventDefault();
					idCustomer = Number($(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].customerSearchResultId).text());
					idCart = Number($(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].placeOrderCartIdField).val());
					shippingCost = Number($('#variable_shipping_cost').val());
					$.ajax({
						type: 'POST',
						url: `${window.location.origin}${window.baseAdminDir}index.php/sell/orders/variable-shipping-cost/update?_token=${token}`,
						dataType: 'json',
						data: {
							'ajax': true,
							'_token': token,
							'id_customer': idCustomer,
							'id_cart': idCart,
							'shipping_cost': shippingCost
						},
						success: (response) => {
							$(__WEBPACK_IMPORTED_MODULE_0__pages_order_create_create_order_map__["a" /* default */].deliveryOptionSelect).trigger('change');
							showSuccessMessage(response.message);
						},
						error: (response) => {
							showErrorMessage(response.message);
						}
					});
					return false;
				});
			},
			error: (response) => {
				showErrorMessage(response.message);
			}
		});
	}
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */



/**
 * We instanciate one EventEmitter (restricted via a const) so that every components
 * register/dispatch on the same one and can communicate with each other.
 */
const EventEmitter = new __WEBPACK_IMPORTED_MODULE_0_events___default.a();
/* harmony export (immutable) */ __webpack_exports__["a"] = EventEmitter;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fos_routing__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fos_routing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fos_routing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_fos_js_routes_json__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_fos_js_routes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_fos_js_routes_json__);
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */




const $ = window.$;

/**
 * Wraps FOSJsRoutingbundle with exposed routes.
 * To expose route add option `expose: true` in .yml routing config
 *
 * e.g.
 *
 * `my_route
 *    path: /my-path
 *    options:
 *      expose: true
 * `
 * And run `bin/console fos:js-routing:dump --format=json --target=admin-dev/themes/new-theme/js/fos_js_routes.json`
 */
class Router {
  constructor() {
    __WEBPACK_IMPORTED_MODULE_0_fos_routing___default.a.setData(__WEBPACK_IMPORTED_MODULE_1__js_fos_js_routes_json___default.a);
    __WEBPACK_IMPORTED_MODULE_0_fos_routing___default.a.setBaseUrl($(document).find('body').data('base-url'));

    return this;
  }

  /**
   * Decorated "generate" method, with predefined security token in params
   *
   * @param route
   * @param params
   *
   * @returns {String}
   */
  generate(route, params = {}) {
    const tokenizedParams = Object.assign(params, {_token: $(document).find('body').data('token')});

    return __WEBPACK_IMPORTED_MODULE_0_fos_routing___default.a.generate(route, tokenizedParams);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Router;



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"base_url":"","routes":{"admin_product_form":{"tokens":[["variable","/","\\d+","id"],["text","/sell/catalog/products"]],"defaults":[],"requirements":{"id":"\\d+"},"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"admin_cart_rules_search":{"tokens":[["text","/sell/catalog/cart-rules/search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_customers_view":{"tokens":[["text","/view"],["variable","/","\\d+","customerId"],["text","/sell/customers"]],"defaults":[],"requirements":{"customerId":"\\d+"},"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"admin_customers_search":{"tokens":[["text","/sell/customers/search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_customers_carts":{"tokens":[["text","/carts"],["variable","/","\\d+","customerId"],["text","/sell/customers"]],"defaults":[],"requirements":{"customerId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_customers_orders":{"tokens":[["text","/orders"],["variable","/","\\d+","customerId"],["text","/sell/customers"]],"defaults":[],"requirements":{"customerId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_addresses_create":{"tokens":[["text","/sell/addresses/new"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"admin_addresses_edit":{"tokens":[["text","/edit"],["variable","/","\\d+","addressId"],["text","/sell/addresses"]],"defaults":[],"requirements":{"addressId":"\\d+"},"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"admin_order_addresses_edit":{"tokens":[["text","/edit"],["variable","/","delivery|invoice","addressType"],["variable","/","\\d+","orderId"],["text","/sell/addresses/order"]],"defaults":[],"requirements":{"orderId":"\\d+","addressType":"delivery|invoice"},"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"admin_cart_addresses_edit":{"tokens":[["text","/edit"],["variable","/","delivery|invoice","addressType"],["variable","/","\\d+","cartId"],["text","/sell/addresses/cart"]],"defaults":[],"requirements":{"cartId":"\\d+","addressType":"delivery|invoice"},"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"admin_carts_view":{"tokens":[["text","/view"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_carts_info":{"tokens":[["text","/info"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_carts_create":{"tokens":[["text","/sell/orders/carts/new"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_edit_addresses":{"tokens":[["text","/addresses"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_edit_carrier":{"tokens":[["text","/carrier"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_edit_currency":{"tokens":[["text","/currency"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_edit_language":{"tokens":[["text","/language"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_set_delivery_settings":{"tokens":[["text","/rules/delivery-settings"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_add_cart_rule":{"tokens":[["text","/cart-rules"],["variable","/","[^/]++","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_delete_cart_rule":{"tokens":[["text","/delete"],["variable","/","[^/]++","cartRuleId"],["text","/cart-rules"],["variable","/","[^/]++","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_add_product":{"tokens":[["text","/products"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_edit_product_price":{"tokens":[["text","/price"],["variable","/","\\d+","productId"],["text","/products"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+","productId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_edit_product_quantity":{"tokens":[["text","/quantity"],["variable","/","\\d+","productId"],["text","/products"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+","productId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_carts_delete_product":{"tokens":[["text","/delete-product"],["variable","/","\\d+","cartId"],["text","/sell/orders/carts"]],"defaults":[],"requirements":{"cartId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_place":{"tokens":[["text","/sell/orders/place"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_view":{"tokens":[["text","/view"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"admin_orders_duplicate_cart":{"tokens":[["text","/duplicate-cart"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_update_product":{"tokens":[["variable","/","\\d+","orderDetailId"],["text","/products"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+","orderDetailId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_partial_refund":{"tokens":[["text","/partial-refund"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_standard_refund":{"tokens":[["text","/standard-refund"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_return_product":{"tokens":[["text","/return-product"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_send_process_order_email":{"tokens":[["text","/sell/orders/process-order-email"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_add_product":{"tokens":[["text","/products"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_delete_product":{"tokens":[["text","/delete"],["variable","/","\\d+","orderDetailId"],["text","/products"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+","orderDetailId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_get_discounts":{"tokens":[["text","/discounts"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_orders_get_prices":{"tokens":[["text","/prices"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_orders_get_payments":{"tokens":[["text","/payments"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_orders_get_products":{"tokens":[["text","/products"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_orders_get_invoices":{"tokens":[["text","/invoices"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_orders_get_documents":{"tokens":[["text","/documents"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_orders_get_shipping":{"tokens":[["text","/shipping"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_orders_cancellation":{"tokens":[["text","/cancellation"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_configure_product_pagination":{"tokens":[["text","/sell/orders/configure-product-pagination"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"admin_orders_product_prices":{"tokens":[["text","/products/prices"],["variable","/","\\d+","orderId"],["text","/sell/orders"]],"defaults":[],"requirements":{"orderId":"\\d+"},"hosttokens":[],"methods":["GET"],"schemes":[]},"admin_orders_products_search":{"tokens":[["text","/sell/orders/products/search"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":[]}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_order_map__ = __webpack_require__(0);
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */






const $ = window.$;

/**
 * Provides ajax calls for cart editing actions
 * Each method emits an event with updated cart information after success.
 */
class CartEditor {
  constructor() {
    this.router = new __WEBPACK_IMPORTED_MODULE_0__components_router__["a" /* default */]();
  }

  /**
   * Changes cart addresses
   *
   * @param {Number} cartId
   * @param {Object} addresses
   */
  changeCartAddresses(cartId, addresses) {
    $.post(this.router.generate('admin_carts_edit_addresses', {cartId}), addresses)
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].cartAddressesChanged, cartInfo))
      .catch((response) => showErrorMessage(response.responseJSON.message));
  }

  /**
   * Modifies cart delivery option
   *
   * @param {Number} cartId
   * @param {Number} value
   */
  changeDeliveryOption(cartId, value) {
    $.post(this.router.generate('admin_carts_edit_carrier', {cartId}), {
      carrierId: value,
    })
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].cartDeliveryOptionChanged, cartInfo))
      .catch((response) => showErrorMessage(response.responseJSON.message));
  }

  /**
   * Changes cart free shipping value
   *
   * @param {Number} cartId
   */
  updateDeliveryOptions(cartId) {
    const freeShippingEnabled = $(__WEBPACK_IMPORTED_MODULE_3__create_order_map__["a" /* default */].freeShippingSwitch)[1].checked;
    const isAGiftEnabled = $(__WEBPACK_IMPORTED_MODULE_3__create_order_map__["a" /* default */].isAGiftSwitchValue).val() === '1';
    const useRecycledPackagingEnabled = $(__WEBPACK_IMPORTED_MODULE_3__create_order_map__["a" /* default */].recycledPackagingSwitchValue).val() === '1';
    const giftMessage = $(__WEBPACK_IMPORTED_MODULE_3__create_order_map__["a" /* default */].giftMessageField).val();

    $.post(this.router.generate('admin_carts_set_delivery_settings', {cartId}), {
      freeShipping: freeShippingEnabled,
      isAGift: isAGiftEnabled,
      useRecycledPackaging: useRecycledPackagingEnabled,
      giftMessage,
    })
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].cartDeliverySettingChanged, cartInfo))
      .catch((response) => showErrorMessage(response.responseJSON.message));
  }

  /**
   * Adds cart rule to cart
   *
   * @param {Number} cartRuleId
   * @param {Number} cartId
   */
  addCartRuleToCart(cartRuleId, cartId) {
    $.post(this.router.generate('admin_carts_add_cart_rule', {cartId}), {
      cartRuleId,
    })
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].cartRuleAdded, cartInfo))
      .catch((response) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].cartRuleFailedToAdd, response.responseJSON.message));
  }

  /**
   * Removes cart rule from cart
   *
   * @param {Number} cartRuleId
   * @param {Number} cartId
   */
  removeCartRuleFromCart(cartRuleId, cartId) {
    $.post(
      this.router.generate('admin_carts_delete_cart_rule', {
        cartId,
        cartRuleId,
      })
    )
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].cartRuleRemoved, cartInfo))
      .catch((response) => showErrorMessage(response.responseJSON.message));
  }

  /**
   * Adds product to cart
   *
   * @param {Number} cartId
   * @param {Object} data
   */
  addProduct(cartId, data) {
    let fileSizeHeader = '';
    if (!$.isEmptyObject(data.fileSizes)) {
      fileSizeHeader = JSON.stringify(data.fileSizes);
    }

    $.ajax(this.router.generate('admin_carts_add_product', {cartId}), {
      headers: {
        // Adds custom headers with submitted file sizes, to track if all files reached server side.
        'file-sizes': fileSizeHeader,
      },
      method: 'POST',
      data: data.product,
      processData: false,
      contentType: false,
    })
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].productAddedToCart, cartInfo))
      .catch((response) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].productAddToCartFailed, response.responseJSON.message));
  }

  /**
   * Removes product from cart
   *
   * @param {Number} cartId
   * @param {Object} product
   */
  removeProductFromCart(cartId, product) {
    $.post(this.router.generate('admin_carts_delete_product', {cartId}), {
      productId: product.productId,
      attributeId: product.attributeId,
      customizationId: product.customizationId,
    })
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].productRemovedFromCart, cartInfo))
      .catch((response) => showErrorMessage(response.responseJSON.message));
  }

  /**
   * Changes product price in cart
   *
   * @param {Number} cartId
   * @param {Number} customerId
   * @param {Object} product the updated product
   */
  changeProductPrice(cartId, customerId, product) {
    $.post(
      this.router.generate('admin_carts_edit_product_price', {
        cartId,
        productId: product.productId,
        productAttributeId: product.attributeId,
      }),
      {
        newPrice: product.price,
        customerId,
      }
    )
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].productPriceChanged, cartInfo))
      .catch((response) => showErrorMessage(response.responseJSON.message));
  }

  /**
   * Updates product quantity in cart
   *
   * @param cartId
   * @param product
   */
  changeProductQty(cartId, product) {
    $.post(
      this.router.generate('admin_carts_edit_product_quantity', {
        cartId,
        productId: product.productId,
      }),
      {
        newQty: product.newQty,
        attributeId: product.attributeId,
        customizationId: product.customizationId,
      }
    )
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].productQtyChanged, cartInfo))
      .catch((response) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].productQtyChangeFailed, response));
  }

  /**
   * Changes cart currency
   *
   * @param {Number} cartId
   * @param {Number} currencyId
   */
  changeCartCurrency(cartId, currencyId) {
    $(__WEBPACK_IMPORTED_MODULE_3__create_order_map__["a" /* default */].cartCurrencySelect).data('selectedCurrencyId', currencyId);

    $.post(this.router.generate('admin_carts_edit_currency', {cartId}), {
      currencyId,
    })
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].cartCurrencyChanged, cartInfo))
      .catch((response) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].cartCurrencyChangeFailed, response));
  }

  /**
   * Changes cart language
   *
   * @param {Number} cartId
   * @param {Number} languageId
   */
  changeCartLanguage(cartId, languageId) {
    $.post(this.router.generate('admin_carts_edit_language', {cartId}), {
      languageId,
    })
      .then((cartInfo) => __WEBPACK_IMPORTED_MODULE_1__components_event_emitter__["a" /* EventEmitter */].emit(__WEBPACK_IMPORTED_MODULE_2__pages_order_create_event_map__["a" /* default */].cartLanguageChanged, cartInfo))
      .catch((response) => showErrorMessage(response.responseJSON.message));
  }
}
/* unused harmony export default */



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

/**
 * Encapsulates js events used in create order page
 */
/* harmony default export */ __webpack_exports__["a"] = ({
  // when customer search action is done
  customerSearched: 'OrderCreateCustomerSearched',
  // when new customer is selected
  customerSelected: 'OrderCreateCustomerSelected',
  // when no customers found by search
  customersNotFound: 'OrderCreateSearchCustomerNotFound',
  // when new cart is loaded,
  //  no matter if its empty, selected from carts list or duplicated by order.
  cartLoaded: 'OrderCreateCartLoaded',
  // when cart currency has been changed
  cartCurrencyChanged: 'OrderCreateCartCurrencyChanged',
  // when cart currency changing fails
  cartCurrencyChangeFailed: 'OrderCreateCartCurrencyChangeFailed',
  // when cart language has been changed
  cartLanguageChanged: 'OrderCreateCartLanguageChanged',
  // when cart addresses information has been changed
  cartAddressesChanged: 'OrderCreateCartAddressesChanged',
  // when cart delivery option has been changed
  cartDeliveryOptionChanged: 'OrderCreateCartDeliveryOptionChanged',
  // when cart delivery setting has been changed
  cartDeliverySettingChanged: 'OrderCreateCartDeliverySettingChangedSet',
  // when cart rules search action is done
  cartRuleSearched: 'OrderCreateCartRuleSearched',
  // when cart rule is removed from cart
  cartRuleRemoved: 'OrderCreateCartRuleRemoved',
  // when cart rule is added to cart
  cartRuleAdded: 'OrderCreateCartRuleAdded',
  // when cart rule cannot be added to cart
  cartRuleFailedToAdd: 'OrderCreateCartRuleFailedToAdd',
  // when product search action is done
  productSearched: 'OrderCreateProductSearched',
  // when product is added to cart
  productAddedToCart: 'OrderCreateProductAddedToCart',
  // when adding product to cart fails
  productAddToCartFailed: 'OrderCreateProductAddToCartFailed',
  // when product is removed from cart
  productRemovedFromCart: 'OrderCreateProductRemovedFromCart',
  // when product in cart price has been changed
  productPriceChanged: 'OrderCreateProductPriceChanged',
  // when product quantity in cart has been changed
  productQtyChanged: 'OrderCreateProductQtyChanged',
  // when changing product quantity in cart failed
  productQtyChangeFailed: 'OrderCreateProductQtyChangeFailed',
  // when order process email has been sent to customer
  processOrderEmailSent: 'OrderCreateProcessOrderEmailSent',
  // when order process email sending failed
  processOrderEmailFailed: 'OrderCreateProcessOrderEmailFailed',
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var Routing=function a(){var b=this;_classCallCheck(this,a),this.setRoutes=function(a){b.routesRouting=a||[]},this.getRoutes=function(){return b.routesRouting},this.setBaseUrl=function(a){b.contextRouting.base_url=a},this.getBaseUrl=function(){return b.contextRouting.base_url},this.setPrefix=function(a){b.contextRouting.prefix=a},this.setScheme=function(a){b.contextRouting.scheme=a},this.getScheme=function(){return b.contextRouting.scheme},this.setHost=function(a){b.contextRouting.host=a},this.getHost=function(){return b.contextRouting.host},this.buildQueryParams=function(a,c,d){var e=new RegExp(/\[]$/);c instanceof Array?c.forEach(function(c,f){e.test(a)?d(a,c):b.buildQueryParams(a+'['+('object'===('undefined'==typeof c?'undefined':_typeof(c))?f:'')+']',c,d)}):'object'===('undefined'==typeof c?'undefined':_typeof(c))?Object.keys(c).forEach(function(e){return b.buildQueryParams(a+'['+e+']',c[e],d)}):d(a,c)},this.getRoute=function(a){var c=b.contextRouting.prefix+a;if(!!b.routesRouting[c])return b.routesRouting[c];else if(!b.routesRouting[a])throw new Error('The route "'+a+'" does not exist.');return b.routesRouting[a]},this.generate=function(a,c,d){var e=b.getRoute(a),f=c||{},g=_extends({},f),h='_scheme',i='',j=!0,k='';if((e.tokens||[]).forEach(function(b){if('text'===b[0])return i=b[1]+i,void(j=!1);if('variable'===b[0]){var c=(e.defaults||{})[b[3]];if(!1==j||!c||(f||{})[b[3]]&&f[b[3]]!==e.defaults[b[3]]){var d;if((f||{})[b[3]])d=f[b[3]],delete g[b[3]];else if(c)d=e.defaults[b[3]];else{if(j)return;throw new Error('The route "'+a+'" requires the parameter "'+b[3]+'".')}var h=!0===d||!1===d||''===d;if(!h||!j){var k=encodeURIComponent(d).replace(/%2F/g,'/');'null'===k&&null===d&&(k=''),i=b[1]+k+i}j=!1}else c&&delete g[b[3]];return}throw new Error('The token type "'+b[0]+'" is not supported.')}),''==i&&(i='/'),(e.hosttokens||[]).forEach(function(a){var b;return'text'===a[0]?void(k=a[1]+k):void('variable'===a[0]&&((f||{})[a[3]]?(b=f[a[3]],delete g[a[3]]):e.defaults[a[3]]&&(b=e.defaults[a[3]]),k=a[1]+b+k))}),i=b.contextRouting.base_url+i,e.requirements[h]&&b.getScheme()!==e.requirements[h]?i=e.requirements[h]+'://'+(k||b.getHost())+i:k&&b.getHost()!==k?i=b.getScheme()+'://'+k+i:!0===d&&(i=b.getScheme()+'://'+b.getHost()+i),0<Object.keys(g).length){var l=[],m=function(a,b){var c=b;c='function'==typeof c?c():c,c=null===c?'':c,l.push(encodeURIComponent(a)+'='+encodeURIComponent(c))};Object.keys(g).forEach(function(a){return b.buildQueryParams(a,g[a],m)}),i=i+'?'+l.join('&').replace(/%20/g,'+')}return i},this.setData=function(a){b.setBaseUrl(a.base_url),b.setRoutes(a.routes),'prefix'in a&&b.setPrefix(a.prefix),b.setHost(a.host),b.setScheme(a.scheme)},this.contextRouting={base_url:'',prefix:'',host:'',scheme:''}};module.exports=new Routing;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);