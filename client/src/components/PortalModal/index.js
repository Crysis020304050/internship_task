import {Component} from 'react';
import {createPortal} from 'react-dom';
import './PortalModal.css';
import PropTypes from 'prop-types';

class PortalModal extends Component {
    constructor(props) {
        super(props);
        this.modalRoot = document.getElementById('modal');
        this.element = document.createElement('div');
        this.element.classList.add('myModal');
        this.element.addEventListener('click', e => {
            if (e.target === this.element) {
                this.props.onClose();
            }
        });
    }

    componentDidMount() {
        this.modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.element);
    }

    render() {
        return createPortal(this.props.children, this.element);
    }
}

PortalModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default PortalModal;