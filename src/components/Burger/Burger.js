import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Burger.module.css';

const Burger = ({
    ingredients,
}) => {
    const burgerIngredients = (type) => {
        switch (type) {
            case ('egg'):
                return <div className={classNames(styles.text, styles.egg)}>egg</div>
            case ('bacon'):
                return <div className={classNames(styles.text, styles.bacon)}>bacon</div>;
            case ('cheese'):
                return <div className={classNames(styles.text, styles.cheese)}>cheese</div>;
            case ('patty'):
                return <div className={classNames(styles.text, styles.patty)}>patty</div>;
            case ('salad'):
                return <div className={classNames(styles.text, styles.salad)}>salad</div>;
            default:
                return null;
        }
    }

    const renderIngredients = () => {
        let transformedIngredients;
        if (ingredients) {
            transformedIngredients = Object.keys(ingredients)
                .map(type => {
                    return [...Array(ingredients[type])].map((_, i) => {
                        return burgerIngredients(type);
                    });
                })
                .reduce((arr, el) => {
                    return arr.concat(el)
                }, []);
            if (transformedIngredients.length === 0) {
                transformedIngredients = <div className={styles.text}>Please start adding ingredients!</div>
            }
        }

        return transformedIngredients;
    }

    return (
        <div className={styles.burger}>
            <div className={classNames(styles.bun, styles.bunTop)}>bun</div>
            {renderIngredients()}
            <div className={classNames(styles.bun, styles.bunBottom)}>bun</div>
        </div>
    );
};

Burger.defaultProps = {
    ingredients: null,
}

Burger.propTypes = {
    ingredients: PropTypes.object,
}


export default Burger;