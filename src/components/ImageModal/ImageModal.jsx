import Modal from 'react-modal';
import css from "./ImageModal.module.css";

Modal.setAppElement('#root'); 

export default function ImageModal({isOpen, closeModal, imageUrl}) {
    return (
        <Modal isOpen={isOpen} 
            onRequestClose={closeModal} 
            className={css.content} 
            overlayClassName={css.overlay}>
           {imageUrl && <img className={css.image} src={imageUrl} alt={imageUrl.altDescription} />}
        </Modal>
    )
    
}