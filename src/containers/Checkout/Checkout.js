import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import styles from './Checkout.module.css';

const Checkout = ({
    ings,
    price,
}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.checkoutSummary}>
            <h1>We hope it tastes well!</h1>
            <Burger ingredients={ings} />
            <div className={styles.btnContainer}>
                <Button
                    btnType="Danger"
                    clicked={() => navigate(-1)}>
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked={() => navigate('/contact-data')}>
                    CONTINUE
                </Button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
};

export default connect(mapStateToProps)(Checkout);