import React from 'react';
import burgerLogo from '../../assets/images/burger.png';
import styles from './Logo.module.css';

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="burgerLogo" />
    </div>
);

export default logo;