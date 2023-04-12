import React from 'react'
import * as AiIcon from 'react-icons/ai'
import * as BiIcon from 'react-icons/bi'
import * as TbIcon from 'react-icons/tb'
import * as FaIcon from 'react-icons/fa'
import cip from '../assets/cipher.png'
const Header = () => {
    return (

        <nav className='flex flex-row bg-white height-[60px] w-full px-3 font-["Open Sans"] py-4 items-center sticky top-0 left-0 justify-between' >

            <div className='flex flex-row items-center '>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Cipherschools.png" className='md:w-[30px] w-[24px]' alt="logo" />
                <span className='font-[700] text-[#222831] text-[14px] md:text-[18px] ml-2' >CipherSchools</span>
                <AiIcon.AiOutlineCompass className='mx-4text-[20px] ' />
                <div className='md:w-[50px] w-[25px]'>
                    <select >
                        <option value="">Browse</option>
                        <option value="Schooling">App Devlopment</option>
                        <option value="College">Web Devlopment</option>
                        <option value="Teaching">Game DEvlopment</option>
                        <option value="Job">Data Structure</option>
                        <option value="Freelancing">Programming</option>
                    </select>
                </div>
            </div>

            <div className='flex flex-row ml-4 items-center'>

                <div className='bg-[#f2f5fa]bg-[#f2f5fa] hidden md:flex bg-[#f2f5fa] rounded-2xl items-center w-[350px] h-[35px]  px-3 mr-4'>
                    <AiIcon.AiOutlineSearch className='text-[20px]' />
                    <input type="text" className='bg-[#f2f5fa] w-[300px] h-[35px] font-[350]' placeholder='Search and Learn' />
                    <TbIcon.TbAdjustmentsHorizontal className='text-[20px]' />
                </div>

                <div>
                    <AiIcon.AiOutlineBell className='text-[20px]' />
                </div>
                <FaIcon.FaUserCircle className='ml-4 text-[#F3912E] text-[20px] ' />
                <img src={cip} width={20} className='mx-3' />
                <span className='text-[#F3912E] font-[600]'>616</span>
            </div>
        </nav>
    )
}

export default Header