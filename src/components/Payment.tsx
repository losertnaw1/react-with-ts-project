// @flow
import { useState } from 'react';
import './Payment.css';
type Props = {
    totalPayment: number,
    paymentInput: number,
    cashReceived: 0,
    cashRemain: 0,
    cashReceivedLast: 0,
    cashReturn: 0
};

export function Payment(props: Props) {

    return (
        <div className='payment'>
            <h3>Checkout</h3>
            <p>Cart Total: $ {props.totalPayment}</p>
            <p>Enter Cash Received: $</p>
            <form className="paymentInput">
                <input type="number" name='userPay' />
                <input type="submit" value="Pay" onSubmit={() => { }} />
            </form>

            <strong>Receipt</strong>
            <p>Cash Received: $ {props.cashReceived}</p>
            <p>Remaining Balance: {props.cashRemain}</p>
            <p>Please pay additional amount</p>
            <br></br>
            <p>Cash Received: $ {props.cashReceivedLast}</p>
            <p>Cash Returned: $ {props.cashReturn}</p>
            <p>Thank you</p>
        </div>
    );
};