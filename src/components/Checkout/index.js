import React from 'react'
import { CheckoutWrapper, CheckoutContainer } from './styled'
import { getUiState } from "../../state/ui/selectors"
import { useSelector, useDispatch } from "react-redux"
import { finishCheckout, stopCheckout } from '../../state/commerce/actions'
export default function Checkout() {
	const dispatch = useDispatch()
	const finishOrder = () => {
		dispatch(finishCheckout())
	}
	return (
		<CheckoutWrapper>
			<CheckoutContainer>
				<form>
					<input placeholder={"Field 1"} />
					<input placeholder={"Field 2"} />
					<button onClick={finishOrder}>Finish checkout</button>
				</form>
			</CheckoutContainer>
		</CheckoutWrapper>
	)
}
