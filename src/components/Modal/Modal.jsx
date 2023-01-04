import { useState, useEffect, useRef } from "react";
import "./modal.scss";

export default function Modal(props) {

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active])

    return (
        <div id={props.id} className={`modal ${active ? "active" : ""}`}>
            {props.child}
        </div>
    )
}

export default function ModalContent(props) {

    const contentRef = useRef(null);

    function closeModal() {
        contentRef.current.parentNode.classList.remove("active");
        if (props.onClose) props.onClose();
    }

    return (
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

