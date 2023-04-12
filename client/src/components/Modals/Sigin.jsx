import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLogin,userSignup } from '../../../features/auth/authAction.js';

const customStyles = {
  content: {
    width: '40%',
    height: '75%',
    borderRadius: '25px',
    padding: '5px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Sigin = () => {
  const [user, setUser] = useState({ firstname: "", lastname: "", email: "", password: "", mobileno: "" })
  const [modalIsOpen, setIsOpen] = useState(true);
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)
  }
  const hadleSigin = (e) => {
    e.preventDefault();
    if(user.email === '' || user.password === '') toast.error('Please fill all the fields');
    else {
        dispatch(userLogin(user))
    }
  }

  const handleCreatAccount = (e) => {
    e.preventDefault();
    if(user.email === '' || user.password === '' || user.firstname === '' || user.lastname === '') toast.error('Please fill all the fields');
    else {
        dispatch(userSignup(user))
    }
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
        contentLabel="Example Modal"
      >
        {login && <>
          <div className='flex flex-row px-3 justify-between items-center font-["Open Sans"] '>
            <h2 className='font-[550] text-[24px]'>Signin</h2>
          </div>
          <div className='justify-center items-center flex flex-col'>
            <div className='flex flex-row'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Cipherschools.png" className='md:w-[38px] w-[28px]' alt="logo" />
              <span className='font-[700] text-[#222831] text-[14px] md:text-[24px] ml-2' >CipherSchools</span>
            </div>
            <span className='text-[20px] font-[] text-[rgba(8,15,15,.85)]'>Hey, Welcome!</span>
            <span className='text-[rgba(8,15,15,.75)]'>Please provide your email and password to signin</span>
            <form className=' flex flex-col  px-8 w-full py-2 '>

              <input type="email" name="email" onChange={handleChange} className='w-full bg-[#f2f5fa] mt-8 rounded-2xl px-4 py-[16px]' placeholder='Emial ID' />
              <input type="password" name="password" onChange={handleChange} className='w-full bg-[#f2f5fa] rounded-2xl my-8 px-4 py-[16px]' placeholder='Password' />

              <button className='bg-[#f3912e] rounded-xl py-2 text-white' onClick={hadleSigin} >Signin</button>
            </form>
            <div>
              <span>Don't have an account ?</span><span onClick={() => { setLogin(!login) }} className='text-[#f3912e] pb-10'> Get Started</span>
            </div>
            <span className='text-[#f32e2e] ' >Dummy ID: ashu@gmail.com</span>
            <span className='text-[#f32e2e] '>Dummy Pass: 12345 </span>
          </div>
        </>
        }
        {!login && <>
          <div className='flex flex-row px-3 justify-between items-center font-["Open Sans"] '>
            <h2 className='font-[550] text-[24px]'>Signup</h2>
          </div>
          <div className='justify-center items-center flex flex-col'>
            <div className='flex flex-row'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Cipherschools.png" className='md:w-[38px] w-[28px]' alt="logo" />
              <span className='font-[700] text-[#222831] text-[14px] md:text-[24px] ml-2' >CipherSchools</span>
            </div>
            <span className='text-[20px] font-[] text-[rgba(8,15,15,.85)]'>Create New Account</span>
            <span className='text-[rgba(8,15,15,.75)]'>Please provide your valid informations to signup</span>
            <form className=' flex flex-col  px-8 w-full py-2 '>
              <input type="text" name='firstname' onChange={handleChange} required={true} className='w-full bg-[#f2f5fa] rounded-2xl my-2 px-4 py-[10px]' placeholder='First Name' />
              <input type="text" name='lastname' onChange={handleChange} required={true} className='w-full bg-[#f2f5fa] rounded-2xl my-2 px-4 py-[10px]' placeholder='Last Name' />
              <input type="email" name="email" onChange={handleChange} required={true} className='w-full bg-[#f2f5fa] my-2 rounded-2xl px-4 py-[10px]' placeholder='Emial ID' />
              <input type="text" name="mobileno" onChange={handleChange} className='w-full bg-[#f2f5fa] rounded-2xl my-2 px-4 py-[10px]' placeholder='Mobile Number (optional)' />
              <input type="password" name="password" onChange={handleChange} required={true} className='w-full bg-[#f2f5fa] rounded-2xl my-2 px-4 py-[10px]' placeholder='Password' />

              <button className='bg-[#f3912e] rounded-xl py-2 my-2 text-white ' onClick={handleCreatAccount}>Create Account</button>
            </form>
            <div>
              <span>Already have an account ?</span><span onClick={() => { setLogin(!login) }} className='text-[#f3912e] pb-6'> Signin Now</span>
            </div>
          </div>
        </>}

      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Sigin