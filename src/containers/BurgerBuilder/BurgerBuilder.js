import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index'
import axios from '../../store/actions/axios-orders';
import styles from "./BurgerBuilder.module.css"

const BurgerBuilder = ({
    ings,
    price,
    error,
    onInitIngredients,
    onIngredientAdded,
    onIngredientRemoved,
}) => {
    const [purchasing, setPurchasing] = useState(false);

    useEffect(() => {
        onInitIngredients();
    }, [])

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    const disabledInfo = {
        ...ings
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    console.log(ings);

    return (
        <>
            {
                !error ? (
                    <>
                        <Modal
                            show={purchasing}
                            modalClosed={() => setPurchasing(false)}
                        >
                            {ings && (
                                <OrderSummary
                                    ingredients={ings}
                                    price={price}
                                    purchaseCancelled={() => setPurchasing(false)}
                                />
                            )}
                        </Modal>
                        <div className={styles.container}>
                            {ings ? (
                                <>
                                    <Burger ingredients={ings} />
                                    <BuildControls
                                        ingredientAdded={onIngredientAdded}
                                        ingredientRemoved={onIngredientRemoved}
                                        disabled={disabledInfo}
                                        purchasable={updatePurchaseState(ings)}
                                        ordered={() => setPurchasing(true)}
                                        price={price}
                                    />
                                </>
                            ) : <p>Ingredients can't be loaded</p>}
                        </div>
                    </>
                ) : <Spinner />
            }

        </>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));