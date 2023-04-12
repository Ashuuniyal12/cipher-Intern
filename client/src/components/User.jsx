import React from 'react'
import UserInfo from './Modals/UserInfo'
import { useSelector } from 'react-redux'


const User = () => {
    const user = useSelector(state => state.auth.user)
    
    return (
        <div className='w-[100%]  sticky top-[65px] left-0 h-[90px] bg-cover' style={{ backgroundImage: `url(${"https://www.cipherschools.com/static/media/ProfileCover.e525f2d51356332792cb.png"})` }}>
            <div className='w-[100%] h-[90px] ' style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' }}>
                <div className='w-[100%] h-[90px] font-["Open Sans"]  items-center flex flex-row justify-between ' style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' }}>
                    <div className=' flex flex-row '>

                        <div className='w-[70px] ml-8 flex flex-col items-center justify-center'>
                            <img className='w-[60px]' src="https://upload.wikimedia.org/wikipedia/commons/7/72/Cipherschools.png" alt="logo" />
                            <div className='w-[20px] h-[20px] rounded-2xl items-center justify-center flex flex-row bg-[#292B43] mt-[-10px]'>
                                <UserInfo />
                            </div>
                        </div>

                        <div className='flex flex-col w-full ml-[5%]'>
                            <span className='text-[17px] font-[400] md:text-[20px]'>Hello,</span>
                            <span className=' text-[16px] font-[700] md:text-[24px]'>{JSON.stringify(user) !== '{}'  ? user.user.firstname+" "+user.user.lastname : "First Last Name"}</span>
                            <span className='text-[14px] font-[400] md:text-[16px]'>{JSON.stringify(user) !== '{}'  ? user.user.email: "mail@gmail.com"}</span>
                        </div>

                    </div>

                    <div className='mr-8 font-[550]' >
                        <span>{ JSON.stringify(user) !== '{}' ? user.user.followers.length : 0} </span>
                        <span>Followers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User