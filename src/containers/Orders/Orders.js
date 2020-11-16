import React, { Component } from 'react';
import orderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Order from '../../components/Order/Order';

class Orders extends Component {
    render (){
        return(
            <div>
                <Order />
                <Order />
            </div>
        );
    }
}

export default Orders;