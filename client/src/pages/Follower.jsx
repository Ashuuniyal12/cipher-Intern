import React from 'react'
import { useSelector } from 'react-redux'

const Follower = () => {
    const user = useSelector(state => state.auth.user.user)
    return (
        <div className='font-["Open Sans"]'>
            <h1 className='p-2 text-[20px] font-[550]'>User Following You</h1>
            {
                user.followers.map((follower, index) => (
                    <div className='flex flex-row items-center w-[300px] h-[300px] justify-between p-2'>
                        <div className='flex flex-col items-center'>
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="dummy pic" />
                            <span> Ashu Uniyal</span>
                            <span>College Student</span>
                            <span>10 Followers</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Follower