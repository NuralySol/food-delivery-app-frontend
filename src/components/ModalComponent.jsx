import './ModalComponent.css'; 

const Modal = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Notice</h2>
                <p className="modal-message">{message}</p>
                <button className="modal-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;