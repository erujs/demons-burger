import React, { useState } from 'react';
import classNames from 'classnames';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import styles from './Toolbar.module.css';

const Toolbar = () => {
    const [showDrawer, setShowDrawer] = useState(false)

    return (
        <>
            <div className={styles.toolbar}>
                {window.innerWidth < 768 && (
                    <div
                        className={styles.drawerToggle}
                        onClick={() => setShowDrawer(!showDrawer)}
                    >
                        <div />
                        <div className={showDrawer ? styles.middle : null} />
                        <div className={showDrawer ? styles.bottom : null} />
                    </div>
                )}
                <Logo height={styles.logo} />
                {window.innerWidth >= 768 && <NavigationItems />}
            </div>
            <div className={classNames(styles.drawer, { [styles.open]: showDrawer })}>
                <NavigationItems />
            </div>
            {showDrawer && (<div className={styles.backdrop} onClick={() => setShowDrawer(false)} />)}
        </>
    )
};

export default Toolbar;