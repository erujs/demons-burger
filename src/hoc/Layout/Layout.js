import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
    <div className={styles.container}>
        <Toolbar />
        {children}
    </div>
)

Layout.defaultProps = {
    children: <></>,
}

Layout.propTypes = {
    children: PropTypes.element,
}

export default Layout;