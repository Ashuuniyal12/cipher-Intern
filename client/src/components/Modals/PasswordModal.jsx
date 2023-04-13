import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux'
import { changePassword } from '../../../features/auth/authAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearError } from '../../../features/auth/authSlice';

const customStyles = {
    content: {
        width: '30%',
        borderRadius: '10px',
        padding: '5px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const PasswordModal = () => {
    const dispatch = useDispatch()
    let user = useSelector(state => state.auth.user.user)
    let error = useSelector(state => state.auth.error)
    const [password, setPassword] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" })
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.currentPassword === '' || password.newPassword === '' || password.confirmPassword === '') toast.error('Please fill all the fields');
        else if (password.newPassword !== password.confirmPassword) toast.error('Password does not match');
        else {
            dispatch(changePassword({ "oldPassword": password.currentPassword, "newPassword": password.newPassword, "email": user.email }))
            if (error){ 
                // console.log(error.error)
                toast.error(error.error)
                dispatch(clearError());
            }
            toast.success('Password changed successfully')   
        }
    }

    return (
        <div className='font-["Open Sans"] '>
            <button className=' px-6 py-1 rounded-lg text-white text-[13px] bg-[#f3912e]' onClick={openModal}>Change</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className=' flex flex-col p-3'>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col w-full'>
                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-2'>
                                <span>Current Password</span>
                            </div>
                            <div className=' bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="password" required={true} value={password.currentPassword} name='currentPassword' onChange={handleChange} className='w-full bg-[#F2F5FA] p-[8px] ' placeholder='Current Password' />
                            </div>

                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-3'>
                                <span>New Password</span>
                            </div>
                            <div className='bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="password" required={true} value={password.newPassword} name="newPassword" onChange={handleChange} className='w-full bg-[#F2F5FA] p-[8px] ' placeholder='New Password' />
                            </div>

                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-3'>
                                <span>Confirm Password</span>
                            </div>
                            <div className='bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="password" required={true} value={password.confirmPassword} name="confirmPassword" onChange={handleChange} className='w-full bg-[#F2F5FA] p-[8px] ' placeholder='Confirm Password' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end w-full mt-5 gap-4 pr-2 pb-3'>
                        <button className='bg-[rgba(8,15,15,.85)] px-8 py-2 rounded-md text-white' onClick={closeModal}>Cancle</button>
                        <button className='bg-[#f3912e] px-8 py-2 rounded-md text-white' onClick={handleSubmit}>Save</button>
                    </div>
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss />
            </Modal>
        </div>
    )
}

export default PasswordModal