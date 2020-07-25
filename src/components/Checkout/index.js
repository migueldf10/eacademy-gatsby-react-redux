import React from 'react'
import { CheckoutWrapper, CheckoutContainer } from './styled'
import { getUiState } from "../../state/ui/selectors"
import { useSelector, useDispatch } from "react-redux"
import { finishCheckout, stopCheckout } from '../../state/commerce/actions'
import { getActiveCheckout } from '../../state/commerce/selectors'
export default function Checkout() {
	const dispatch = useDispatch()
	const activeCheckout = useSelector(getActiveCheckout)
	const finishOrder = () => {
		dispatch(finishCheckout(activeCheckout.id))
	}
	return (
		<CheckoutWrapper>
			<CheckoutContainer>
				<form>
					<input placeholder={"Field 1"} />
					<input placeholder={"Field 2"} />
				</form>
				<button onClick={finishOrder}>Finish checkout</button>
			</CheckoutContainer>
		</CheckoutWrapper>
	)
}
