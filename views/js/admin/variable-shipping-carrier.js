import createOrderMap from '@pages/order/create/create-order-map';
import cartEditor from '@pages/order/create/cart-editor';

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
		if (Number($(`${createOrderMap.deliveryOptionSelect} > option:selected`).val()) === idVariableShippingCarrier) {
			$(createOrderMap.totalShippingField).parent('p').hide();
			$('#variable_shipping_cost').parent('.input-group-append').show();
			$(createOrderMap.freeShippingSwitch).parent('.form-group').hide();
		} else {
			$(createOrderMap.totalShippingField).parent('p').show();
			$('#variable_shipping_cost').parent('.input-group-append').hide();
			$(createOrderMap.freeShippingSwitch).parent('.form-group').show();
		}
	};

	if ($(createOrderMap.deliveryOptionSelect).get(0)) {
		const observer = new MutationObserver(displayVariableShippingCostField);

		$(`${createOrderMap.shippingForm} p:last`).after(
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

				observer.observe($(createOrderMap.deliveryOptionSelect).get(0), {
					subtree: true,
					childList: true
				});

				$(createOrderMap.deliveryOptionSelect).on(
					'change',
					displayVariableShippingCostField
				);

				// Updates variable shipping cost
				$('#variable_shipping_cost_button').on('click', e => {
					e.preventDefault();
					idCustomer = Number($(createOrderMap.customerSearchResultId).text());
					idCart = Number($(createOrderMap.placeOrderCartIdField).val());
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
							$(createOrderMap.deliveryOptionSelect).trigger('change');
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
