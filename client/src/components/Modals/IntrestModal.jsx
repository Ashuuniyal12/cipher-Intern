import React, { useState } from 'react';
import Modal from 'react-modal';
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
const IntrestModal = () => {
    const dispatch = useDispatch()
    let user = useSelector(state => state.auth.user.user)

    let intrestsValue = user.intrests ?? []

    const [intrest, setIntrest] = useState(intrestsValue)
    const [modalIsOpen, setIsOpen] = useState(false);

    const handelIntreset = (e) => {
        console.log(e)
        if (intrest.includes(e)) {
            setIntrest(intrest.filter(item => item !== e))
        } else {
            setIntrest([...intrest, e])
            console.log(intrest)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newuser = { ...user, intrests: intrest }
        dispatch(userUpdate(newuser))
        toast.success('Intrests updated successfully')
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

    return (
        <div className='font-["Open Sans"] '>
            <button className=' px-6 py-1 rounded-lg text-white text-[13px] bg-[#f3912e]' onClick={openModal}>Edit</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className=' flex flex-col'>

                    <div className='grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 '>

                        <div className={`bg-red rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5] ${intrest.includes("App Devlopment") ? "bg-[#f3912e]" : "bg-[#F2F5FA]"}`} onClick={() => { handelIntreset("App Devlopment") }} >
                            <span>App Devlopment</span>
                        </div>
                        <div className={`bg-red rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5] ${intrest.includes("Web Devlopment") ? "bg-[#f3912e]" : "bg-[#F2F5FA]"}`} onClick={() => { handelIntreset("Web Devlopment") }} >
                            <span>Web Devlopment</span>
                        </div>
                        <div className={`bg-red rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5] ${intrest.includes("Game Devlopment") ? "bg-[#f3912e]" : "bg-[#F2F5FA]"}`} onClick={() => { handelIntreset("Game Devlopment") }} >
                            <span>Game Devlopment</span>
                        </div>
                        <div className={`bg-red rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5] ${intrest.includes("Data Structure") ? "bg-[#f3912e]" : "bg-[#F2F5FA]"}`} onClick={() => { handelIntreset("Data Structure") }} >
                            <span>Data Structure</span>
                        </div>
                        <div className={`bg-red rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5] ${intrest.includes("Programming") ? "bg-[#f3912e]" : "bg-[#F2F5FA]"}`} onClick={() => { handelIntreset("Programming") }} >
                            <span>Programming</span>
                        </div>
                        <div className={`bg-red rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5] ${intrest.includes("Machine Learning") ? "bg-[#f3912e]" : "bg-[#F2F5FA]"}`} onClick={() => { handelIntreset("Machine Learning") }} >
                            <span>Machine Learning</span>
                        </div>
                        <div className={`bg-red rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5] ${intrest.includes("Data Science") ? "bg-[#f3912e]" : "bg-[#F2F5FA]"}`} onClick={() => { handelIntreset("Data Science") }} >
                            <span>Data Science </span>
                        </div>
                        <div className={`bg-red rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5] ${intrest.includes("Other") ? "bg-[#f3912e]" : "bg-[#F2F5FA]"}`} onClick={() => { handelIntreset("Other") }} >
                            <span>Other</span>
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

export default IntrestModal