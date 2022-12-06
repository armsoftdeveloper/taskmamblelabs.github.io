/* React Hooks */
import { useState } from "react";
/* React Icons */
import { AiOutlineClose } from 'react-icons/ai';
/* TodoItem Style */
import './_style.scss';
/* TodoItem Modal */
import Modal from 'react-bootstrap/Modal';
export default function TodoItem({todo, onChange, onDelete}) {
    const [isOpen, setIsOpen] = useState(false);
    const [active,setActive] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function toggleModal() {
      setIsOpen(!isOpen);
    }
    const set = (e) =>{
        setActive(!active)
        onChange({
            ...todo,
            isCompleted:e.target.checked,
        })
    }
    return (
        <div className="todoItem">
            <label className={active ? `container container-active` : `container disabled`}>
                <input type="checkbox" checked={todo.isCompleted} onChange={set}/>
                <h3 className="todoText to-media">
                    {todo.text}
                </h3>
                <span className="checkmark"></span>
                <button className="remove"
                onClick={() => {
                    toggleModal();
                }}><AiOutlineClose  onClick={handleShow}/>
            </button>
            </label>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Are you sure you want to delete?</Modal.Body>
                <Modal.Footer>
                    <button onClick={() =>{
                        onDelete(todo)
                    }}>Yes</button>
                    <button variant="secondary" onClick={handleClose}>
                      No
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
