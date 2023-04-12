import React, { useState } from 'react';
import Modal from 'react-modal';

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

                        <div className='bg-[#F2F5FA] bg-red rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5]'>
                            <span>App Devlopment</span>
                        </div>
                        <div className='bg-[#F2F5FA] rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5]'>
                            <span>Web Devlopment</span>
                        </div>
                        <div className=' bg-[#F2F5FA] rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5]'>
                            <span>Game Devlopment</span>
                        </div>
                        <div className='bg-[#F2F5FA] rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5]'>
                            <span>Data Structure</span>
                        </div>
                        <div className=' bg-[#F2F5FA] rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5]'>
                            <span>Programming</span>
                        </div>
                        <div className='bg-[#F2F5FA] rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5]'>
                            <span>Machine Learning</span>
                        </div>
                        <div className=' bg-[#F2F5FA] rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5]'>
                            <span>Data Science </span>
                        </div>
                        <div className='bg-[#F2F5FA] rounded-lg  mt-[3px] p-3 hover:bg-[#F5F5F5]'>
                            <span>Other</span>
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

export default IntrestModal