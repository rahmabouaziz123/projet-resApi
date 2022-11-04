

import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editeUser, getUsers } from '../redux/action';
import Form from 'react-bootstrap/Form';

export const EditeUser = ({user}) => {

const [fullName, setFullName] = useState(user.fullName)
const [email, setEmail] = useState(user.email)
const [phone, setPhone] = useState(user.phone)
const dispatch=useDispatch()

const handelSubmit=(e)=>{e.preventDefault()
  const newOne={_id:user._id,fullName,email,phone}
  dispatch(editeUser(newOne))
  dispatch(getUsers())

  closeModal();
}



  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
       <div>
      {/* <button onClick={openModal}>Edit</button> */}

      <Button  className='btnEdit' onClick={openModal} variant="primary">Edit</Button>

      <Modal
        isOpen={modalIsOpen}
   
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

{/* <form onSubmit={handelSubmit}>
       <input type="text" placeholder="fulName" value={fullName} onChange={e=>setFullName(e.target.value)}/>
       <input type="text" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
       <input type="text" placeholder="phone" value={phone} onChange={e=>setPhone(e.target.value)}/>
       <button type='submit'> Confirm</button>
       <button> cansel</button>
        </form>  */}







<Form  onSubmit={handelSubmit} className="form1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>fullName </Form.Label>
        <Form.Control type="text" placeholder="Enter fullName"  value={fullName} onChange={e=>setFullName(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>phone</Form.Label>
        <Form.Control type="text" placeholder="phone" value={phone} onChange={e=>setPhone(e.target.value)} />
      </Form.Group>
     
   <div className='btnForm'>
   <Button variant="primary" type="submit" className='btnSubmit1'>
        Confirm
      </Button>

      <Button variant="primary" type="" className='btnCansel1'>
       cansel
      </Button>
   </div>
    </Form>



      </Modal>
    </div>
    </div>
  )
}
