import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            // exact={props.exact}
            activeclassname={classes.active}
            className={({ isActive }) => isActive ? classes.active : null}
        >
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;