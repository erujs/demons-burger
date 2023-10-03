import React, {Component} from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <>
                {this.props.show && (<div className={styles.Backdrop} onClick={this.props.modalClosed} />)}
                <div 
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;