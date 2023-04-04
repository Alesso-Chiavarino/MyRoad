// Modal.js
import React from 'react';
import { IoClose } from 'react-icons/io5';
import Modal from 'react-modal';

Modal.setAppElement('#__next');
const ConfirmModal = ({ isOpen, onClose, title, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={
                {
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000
                    },
                    content: {
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        width: '30rem',
                        height: 'fit-content',
                        margin: '50px auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }
                }
            }
        >
            <div className='flex justify-between items-center'>
                <h2 className='font-bold'>{title}</h2>
                <button onClick={onClose}><IoClose className="self-end text-xl text-[#D6DEE7] cursor-pointer m-2 hover:text-white" /></button>
            </div>
            <hr />
            {children}
        </Modal>
    )
}

export default ConfirmModal;