import React from 'react'
import Overlay from './Overlay'
// use card instead of div

const Modal = ({ show , children , onClose }) => {

    const close = () => {
        if (onClose) onClose()
    }

    return (
        <div className={"modal-container " + (show ? "" : "hide")}>
            <div className="card">
                {children}
            </div>
            <Overlay show={show} event=
                {{
                    onClick: () => close()
                }}
            />
        </div>
    )
}

export default Modal;
