import * as TiIcon from 'react-icons/ti';
import * as AiIcon from 'react-icons/ai';
import * as BsIcon from 'react-icons/bs';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import PasswordModal from './Modals/PasswordModal';
import IntrestModal from './Modals/IntrestModal';
import { useSelector } from 'react-redux'
import { useState } from 'react';

const About = () => {
    const user = useSelector(state => state.auth.user)
    let aboutValue  = user.user.about?. user.user.about 
    
    const [content , setContent] = useState({about:  aboutValue ,password: "", intrest: [], linkedin: "", github: "", twitter: "", facebook: "", instagram: "", website: "", highestEducation: "", whatDoYouDo: "",});

    const [about , setAbout] = useState(true)

    const handleabout=(e)=>{
        if(!about){
            console.log(content)
        }
        setAbout(!about)
    }

    const handleupdate=(e)=>{
        setContent({...content,[e.target.name]: e.target.value})
    }
    return (
        <main className='bg-[#F2F5FA] px-[2%] font-["Open Sans"]'>

            <div className='flex flex-row justify-between items-center py-[2%] '>
                <span className='font-[700] text-[14px] font-[#2c3d4f]'>
                    ABOUT ME
                </span>
                <button className=' px-6 py-1 rounded-lg text-white text-[13px] bg-[#f3912e]' onClick={handleabout}>{about ? "Edit": "Save"}</button>
            </div>

            <div className=' bg-white flex  items-center rounded-lg'>
                <textarea rows="4" placeholder='Add Something about you' disabled={about} name="about" onChange={handleupdate} value ={content.about} className='bg-white rounded-lg p-[1%] text-[rgba(8,15,15,.75)] w-full' />
                <BsIcon.BsFillPencilFill  hidden={about} className=' text-[16px]' />
            </div>

            <hr height="4px" className='w-[100%] my-[1%]' />

            <div className='flex flex-row justify-between items-center'>
                <span className='font-[700] text-[14px] font-[#2c3d4f]'>
                    CIPHER MAP
                </span>
            </div>

            <CalendarHeatmap className='w-[90%] h-[250px] '
                startDate={new Date('2023-01-01')}
                endDate={new Date('2023-12-30')}
                showWeekdayLabels={true}
                values={[]}
            />

            <hr height="4px" className='w-[100%] my-[2%]' />

            <div className='flex flex-row justify-between items-center'>
                <span className='font-[700] text-[14px] font-[#2c3d4f]'>
                    ON THE WEB
                </span>
                <button className=' px-6 py-1 rounded-lg text-white text-[13px] bg-[#f3912e]'>Edit</button>
            </div>
            <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 '>
                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Linkedin</span>
                    </div>
                    <div className='flex flex-row items-center bg-white rounded-lg mt-[3px] px-4'>
                        <TiIcon.TiSocialLinkedinCircular className='text-[30px] text-[#808191]' />
                        <input type="text" className='w-full p-[8px] ' placeholder='LinkedIn' />
                        <BsIcon.BsFillPencilFill  hidden={false} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Github</span>
                    </div>
                    <div className='flex flex-row items-center bg-white rounded-lg mt-[3px] px-4'>
                        <AiIcon.AiFillGithub className='text-[30px] text-[#808191]' />
                        <input type="text" className='w-full p-[8px] '  placeholder='GitHub' />
                        <BsIcon.BsFillPencilFill  hidden={false} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Facebook</span>
                    </div>
                    <div className='flex flex-row items-center bg-white  rounded-lg  px-4 mt-[3px]'>
                        <BsIcon.BsFacebook className='text-[25px] text-[#808191] ' />
                        <input type="text" className='w-full p-[8px]' placeholder='Facebook' />
                        <BsIcon.BsFillPencilFill  hidden={false} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Twitter</span>
                    </div>
                    <div className='flex flex-row items-center bg-white rounded-lg mt-[3px] px-4'>
                        <AiIcon.AiFillTwitterCircle className='text-[30px] text-[#808191] ' />
                        <input type="text" className='w-full  p-[8px]' placeholder='Twitter' />
                        <BsIcon.BsFillPencilFill  hidden={false} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full '>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Instagram</span>
                    </div>
                    <div className='flex flex-row items-center bg-white rounded-lg mt-[3px] px-4'>
                        <AiIcon.AiFillInstagram className='text-[30px] text-[#808191]' />
                        <input type="text" className='w-full p-[8px] '  placeholder='Instagram' />
                        <BsIcon.BsFillPencilFill  hidden={false} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Website</span>
                    </div>
                    <div className='flex flex-row items-center bg-white  rounded-lg mt-[3px] px-4'>
                        <BsIcon.BsGlobe className='text-[25px] text-[#808191]' />
                        <input type="text" className='w-full p-[8px]' placeholder='Website' />
                        <BsIcon.BsFillPencilFill  hidden={false} className=' text-[16px]' />
                    </div>
                </div>
            </div>

            <hr height="4px" className='w-[100%] my-[2%]' />

            <div className='flex flex-row justify-between items-center'>
                <span className='font-[700] text-[14px] font-[#2c3d4f]'>
                    PROFESSIONAL INFORMATION
                </span>
                <button className=' px-6 py-1 rounded-lg  text-white text-[13px] bg-[#f3912e]'>Edit</button>
            </div>
            <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 '>
                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Highest education</span>
                    </div>
                    <div className='flex flex-row bg-white p-[8px] rounded-lg mt-[3px]'>
                        <select className='w-full'>
                            <option value="Primary">Primary</option>
                            <option value="Secondary">Secondary</option>
                            <option value="Higher Secondary">Higher Secondary</option>
                            <option value="Graduation">Graduation</option>
                            <option value="Post Graduation">Post Graduation</option>
                        </select>
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>What do you do currently?</span>
                    </div>
                    <div className='flex flex-row bg-white p-[8px] rounded-lg mt-[3px]'>
                    <select className='w-full'>
                            <option value="Schooling">Schooling</option>
                            <option value="College">Colege</option>
                            <option value="Teaching">Teaching</option>
                            <option value="Job">Job</option>
                            <option value="Freelancing">Freelancing</option>
                        </select>
                    </div>
                </div>
            </div>


            <hr height="4px" className='w-[100%] my-[2%]' />

            <div className='flex flex-row justify-between items-center'>
                <span className='font-[700] text-[14px] font-[#2c3d4f]'>
                    PASSWORD & SECURITY
                </span>
                <PasswordModal/>
            </div>
            <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Password</span>
                    </div>
                    <div className='flex flex-row bg-white  rounded-lg mt-[3px]'>
                        <input className='w-full p-[8px]'  type="password" placeholder='password' />
                    </div>
                </div>

            <hr height="4px" className='w-[100%] my-[2%]' />

            <div className='flex flex-row justify-between items-center pb-16'>
                <span className='font-[700] text-[14px] font-[#2c3d4f]'>
                    INTERESTS
                </span>
                <IntrestModal/>
            </div>
        </main>
    )
}

export default About