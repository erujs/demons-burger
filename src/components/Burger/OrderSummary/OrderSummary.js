import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/Button';

const OrderSummary = ({
    ingredients,
    price,
    purchaseCancelled,
}) => {
    const navigate = useNavigate();

    const ingredientSummary = Object.keys(ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {ingredients[igKey]}
            </li>
        );
    });

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={() => navigate('/checkout')}>CONTINUE</Button>
        </>
    );
}

export default OrderSummary;