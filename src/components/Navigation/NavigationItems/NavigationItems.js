import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavigationItems.module.css';

const NavigationItems = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <NavLink
                    to="/"
                    activeclassname={styles.active}
                    className={({ isActive }) => isActive ? styles.active : null}
                >
                    Burger Builder
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink
                    to="/orders"
                    activeclassname={styles.active}
                    className={({ isActive }) => isActive ? styles.active : null}
                >
                    Orders
                </NavLink>
            </div>
        </div>
    )
}

export default NavigationItems;