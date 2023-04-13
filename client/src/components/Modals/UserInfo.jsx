import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import * as BsIcon from 'react-icons/bs'
import * as RxIcon from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { userUpdate } from '../../../features/auth/authAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
        width: '50%',
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
const UserInfo = () => {


    let user = useSelector(state => state.auth.user.user)
    let mobileno = user.mobileno ?? ''

    const dispatch = useDispatch()
    const [img, setImg] = useState("");
    const fileInputRef = useRef(null);
    const [userUpdated, setUserUpdate] = useState({ firstname: user.firstname, lastname: user.lastname, email: user.email, mobileno: mobileno })
    const [modalIsOpen, setIsOpen] = useState(false);

    console.log(userUpdated)

    const onImageChange = (e) => {
        let res = "";
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = () => {
                res = reader.result //base64encoded string
                setImg(res);
                console.log("res", res);
            };
        }
    }

    const handelChange = (e) => {
        setUserUpdate({ ...userUpdated, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newuser = { ...user, "firstname": userUpdated.firstname, "lastname": userUpdated.lastname, "email": userUpdated.email, "mobileno": userUpdated.mobileno, "profilePicture": img }
        dispatch(userUpdate(newuser))
        toast.success('Profile updated successfully')
        closeModal()
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

    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return (
        <div className='font-["Open Sans"] '>
            <BsIcon.BsFillPencilFill onClick={openModal} className='text-white text-[12px]' />
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='flex flex-row px-3 justify-between items-center '>
                    <h2 className='font-[700] text-[20px]'>Profile Update</h2>
                    <RxIcon.RxCross2 className='text-[20px]' onClick={closeModal} />
                </div>
                <form className=' flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <div>
                            <div className='w-[200px] ml-8 flex flex-col items-center justify-center'>
                                <img className='w-[100px]  h-[100px] rounded-[100px] ' src={ user.profilePicture ?? "https://upload.wikimedia.org/wikipedia/commons/7/72/Cipherschools.png"} alt="logo" />
                                <input
                                    type="file"
                                    hidden
                                    onChange={onImageChange}
                                    id="file-selector"
                                    ref={fileInputRef}
                                />
                                <div className='w-[30px] h-[30px] rounded-2xl items-center justify-center flex flex-row bg-white mt-[-10px]'>
                                    <BsIcon.BsFillPencilFill onClick={openFileDialog} className='text-[20px] text-[#292B43]' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-2'>
                                <span>First Name</span>
                            </div>
                            <div className=' bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="text" className='w-full bg-[#F2F5FA] p-[8px] ' name="firstname" value={userUpdated.firstname} onChange={handelChange} placeholder='First Name' />
                            </div>

                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-2'>
                                <span>Last Name</span>
                            </div>
                            <div className=' bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="text" className='w-full bg-[#F2F5FA] p-[8px] ' name="lastname" value={userUpdated.lastname} onChange={handelChange} placeholder='Last Name' />
                            </div>

                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-2'>
                                <span>Email</span>
                            </div>
                            <div className=' bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="email" className='w-full bg-[#F2F5FA] p-[8px] ' name="email" value={userUpdated.email} onChange={handelChange} placeholder='Email' />
                            </div>

                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-2'>
                                <span>Mobile Number</span>
                            </div>
                            <div className=' bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="text" className='w-full bg-[#F2F5FA] p-[8px] ' name="mobileno" value={userUpdated.mobileno} onChange={handelChange} placeholder='Mobile Number' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end w-full mt-5 gap-4 pr-2 pb-3'>
                        <button className='bg-[rgba(8,15,15,.85)] px-8 py-2 rounded-md text-white' onClick={closeModal}>Cancle</button>
                        <button className='bg-[#f3912e] px-8 py-2 rounded-md text-white' onClick={handleSubmit}>Save</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default UserInfo