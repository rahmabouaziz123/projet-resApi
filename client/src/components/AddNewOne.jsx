import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addNewUsers } from '../redux/action';

import Form from 'react-bootstrap/Form';

export const AddNewOne = () => {
const [fullName, setFullName]= useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const dispatch=useDispatch()

const handelSubmit=(e)=>{e.preventDefault()
  const newOne={fullName,email,phone}
  dispatch(addNewUsers(newOne))
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
      {/* <button className='addbtn1' onClick={openModal}>Add</button> */}
      <Button onClick={openModal} variant="primary" className='addbtn1' >   Add</Button>

      <Modal
        isOpen={modalIsOpen}
   
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
{/* 
<form onSubmit={handelSubmit}>
       <input type="text" placeholder="fullName" value={fullName} onChange={e=>setFullName(e.target.value)}/>
       <input type="text" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
       <input type="text" placeholder="phone" value={phone} onChange={e=>setPhone(e.target.value)}/>
       <button type='submit'> Add</button>
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
        Submit
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
