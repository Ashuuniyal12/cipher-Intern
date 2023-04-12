import React, { useState } from 'react';
import Modal from 'react-modal';
import * as BsIcon from 'react-icons/bs'
import * as RxIcon from 'react-icons/rx'

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
                                <img className='w-[120px] rounded-full ' src="https://upload.wikimedia.org/wikipedia/commons/7/72/Cipherschools.png" alt="logo" />
                                <div className='w-[30px] h-[30px] rounded-2xl items-center justify-center flex flex-row bg-white mt-[-10px]'>
                                    <BsIcon.BsFillPencilFill className='text-[20px] text-[#292B43]' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-2'>
                                <span>First Name</span>
                            </div>
                            <div className=' bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="text" className='w-full bg-[#F2F5FA] p-[8px] ' placeholder='First Name' />
                            </div>

                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-2'>
                                <span>Last Name</span>
                            </div>
                            <div className=' bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="text" className='w-full bg-[#F2F5FA] p-[8px] ' placeholder='Last Name' />
                            </div>

                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-2'>
                                <span>Email</span>
                            </div>
                            <div className=' bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="email" className='w-full bg-[#F2F5FA] p-[8px] ' placeholder='Email' />
                            </div>

                            <div className='font-[550] text-[rgba(8,15,15,.75)] mt-2'>
                                <span>Mobile Number</span>
                            </div>
                            <div className=' bg-[#F2F5FA] rounded-lg mt-[3px] px-4'>
                                <input type="text" className='w-full bg-[#F2F5FA] p-[8px] ' placeholder='Mobile Number' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end w-full mt-5 gap-4 pr-2 pb-3'>
                        <button className='bg-[rgba(8,15,15,.85)] px-8 py-2 rounded-md text-white'>Cancle</button>
                        <button className='bg-[#f3912e] px-8 py-2 rounded-md text-white'>Save</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default UserInfo