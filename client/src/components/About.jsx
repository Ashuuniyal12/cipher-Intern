import * as TiIcon from 'react-icons/ti';
import * as AiIcon from 'react-icons/ai';
import * as BsIcon from 'react-icons/bs';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import PasswordModal from './Modals/PasswordModal';
import IntrestModal from './Modals/IntrestModal';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { userUpdate } from '../../features/auth/authAction.js';

const About = () => {
    const dispatch = useDispatch()
    let user = useSelector(state => state.auth.user.user)

    let aboutValue = user.about ?? ""
    let linkedinValue = user.linkedin ?? ""
    let githubValue = user.github ?? ""
    let twitterValue = user.twitter ?? ""
    let facebookValue = user.facebook ?? ""
    let instagramValue = user.instagram ?? ""
    let websiteValue = user.website ?? ""
    let highestEducationValue = user.highestEducation ?? ""
    let whatDoYouDoValue = user.whatDoYouDo ?? ""
    let intrestsValue = user.intrests ?? []

    const [content, setContent] = useState({ about: aboutValue, password: "", intrest: intrestsValue, linkedin: linkedinValue, github: githubValue, twitter: twitterValue, facebook: facebookValue, instagram: instagramValue, website: websiteValue, highestEducation: highestEducationValue, whatDoYouDo: whatDoYouDoValue, });

    const [about, setAbout] = useState(true)

    const [web, setWeb] = useState(true)

    const [professionInfo, setProfessionInfo] = useState(true)
        
    const [password, setPassword] = useState(true)
    const [intrest, setIntrest] = useState(true)
  

    const handleSave = (e) => {

        if (!about) {
            user = { ...user, "about": content.about }
            const updatedUser = user;
            // console.log(updatedUser)
            dispatch(userUpdate(updatedUser))
        }
        setAbout(!about)
    }

    const handleWeb = (e) => {
        if (!web){
            user = { ...user, "linkedin": content.linkedin, "github": content.github, "twitter": content.twitter, "facebook": content.facebook, "instagram": content.instagram, "website": content.website }
            const updatedUser = user;
            dispatch(userUpdate(updatedUser))
        }
        setWeb(!web)

    }

    const handleProfessionInfo = (e) => {
        if(!professionInfo){
            user = { ...user, "highestEducation": content.highestEducation, "whatDoYouDo": content.whatDoYouDo }
            const updatedUser = user;
            dispatch(userUpdate(updatedUser))
        }
        setProfessionInfo(!professionInfo)
    }

    const handlePassword = (e) => {

    }
    
    const handleupdate = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value })
    }

    return (
        <main className='bg-[#F2F5FA] px-[2%] font-["Open Sans"]'>

            <div className='flex flex-row justify-between items-center py-[2%] '>
                <span className='font-[700] text-[14px] font-[#2c3d4f]'>
                    ABOUT ME
                </span>
                <button className=' px-6 py-1 rounded-lg text-white text-[13px] bg-[#f3912e]' onClick={handleSave}>{about ? "Edit" : "Save"}</button>
            </div>

            <div className=' bg-white flex  items-center rounded-lg'>
                <textarea rows="4" placeholder='Add Something about you' disabled={about} name="about" onChange={handleupdate} value={content.about} className='bg-white rounded-lg p-[1%] text-[rgba(8,15,15,.75)] w-full' />
                <BsIcon.BsFillPencilFill hidden={about} className=' text-[16px]' />
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
                <button className=' px-6 py-1 rounded-lg text-white text-[13px] bg-[#f3912e]' onClick={handleWeb}>{web ? "Edit" : "Save"}</button>
            </div>
            <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 '>
                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Linkedin</span>
                    </div>
                    <div className='flex flex-row items-center bg-white rounded-lg mt-[3px] px-4'>
                        <TiIcon.TiSocialLinkedinCircular className='text-[30px] text-[#808191]' />
                        <input type="text" className='w-full disabled:bg-white p-[8px] ' disabled={web} value={content.linkedin} onChange={handleupdate} name="linkedin" placeholder='LinkedIn' />
                        <BsIcon.BsFillPencilFill hidden={web} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Github</span>
                    </div>
                    <div className='flex flex-row items-center bg-white rounded-lg mt-[3px] px-4'>
                        <AiIcon.AiFillGithub className='text-[30px] text-[#808191]' />
                        <input type="text" className='w-full disabled:bg-white p-[8px]' disabled={web} value={content.github} name='github' onChange={handleupdate} placeholder='GitHub' />
                        <BsIcon.BsFillPencilFill hidden={web} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Facebook</span>
                    </div>
                    <div className='flex flex-row items-center bg-white  rounded-lg  px-4 mt-[3px]'>
                        <BsIcon.BsFacebook className='text-[25px] text-[#808191] ' />
                        <input type="text" className='w-full disabled:bg-white p-[8px]' disabled={web} value={content.facebook} name="facebook" onChange={handleupdate} placeholder='Facebook' />
                        <BsIcon.BsFillPencilFill hidden={web} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Twitter</span>
                    </div>
                    <div className='flex flex-row items-center bg-white rounded-lg mt-[3px] px-4'>
                        <AiIcon.AiFillTwitterCircle className='text-[30px] text-[#808191] ' />
                        <input type="text" className='w-full disabled:bg-white p-[8px]' disabled={web} value={content.twitter} name='twitter' onChange={handleupdate} placeholder='Twitter' />
                        <BsIcon.BsFillPencilFill hidden={web} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full '>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Instagram</span>
                    </div>
                    <div className='flex flex-row items-center bg-white rounded-lg mt-[3px] px-4'>
                        <AiIcon.AiFillInstagram className='text-[30px] text-[#808191]' />
                        <input type="text" className='w-full disabled:bg-white p-[8px] ' disabled={web} value={content.instagram} name='instagram' onChange={handleupdate} placeholder='Instagram' />
                        <BsIcon.BsFillPencilFill hidden={web} className=' text-[16px]' />
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Website</span>
                    </div>
                    <div className='flex flex-row items-center bg-white  rounded-lg mt-[3px] px-4'>
                        <BsIcon.BsGlobe className='text-[25px] text-[#808191]' />
                        <input type="text" className='w-full disabled:bg-white p-[8px]' disabled={web} value={content.website} name='website' onChange={handleupdate} placeholder='Website' />
                        <BsIcon.BsFillPencilFill hidden={web} className=' text-[16px]' />
                    </div>
                </div>
            </div>

            <hr height="4px" className='w-[100%] my-[2%]' />

            <div className='flex flex-row justify-between items-center'>
                <span className='font-[700] text-[14px] font-[#2c3d4f]'>
                    PROFESSIONAL INFORMATION
                </span>
                <button className=' px-6 py-1 rounded-lg  text-white text-[13px] bg-[#f3912e]' onClick={handleProfessionInfo}>{professionInfo ? "Edit" : "Save"}</button>
            </div>
            <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 '>
                <div className='flex flex-col w-full'>
                    <div className='font-[550] text-[#2c3d4f]'>
                        <span>Highest education</span>
                    </div>
                    <div className='flex flex-row bg-white p-[8px] rounded-lg mt-[3px]'>
                        <select className='w-full' name="highestEducation" disabled={professionInfo} value={content.highestEducation} onChange={handleupdate} >
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
                        <select className='w-full' disabled={professionInfo}  value={content.whatDoYouDo} name='whatDoYouDo' onChange={handleupdate}>
                            <option value="Schooling">Schooling</option>
                            <option value="College">College</option>
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
                <PasswordModal />
            </div>
            <div className='flex flex-col w-full'>
                <div className='font-[550] text-[#2c3d4f]'>
                    <span>Password</span>
                </div>
                <div className='flex flex-row bg-white  rounded-lg mt-[3px]'>
                    <input className='w-full p-[8px] disabled:bg-white' value='kdsnlnsdfsgdhddfsagdhjdgdffafdnk' disabled={true} type="password"  />
                </div>
            </div>

            <hr height="4px" className='w-[100%] my-[2%]' />

            <div className='flex flex-row justify-between items-center pb-4'>
                <span className='font-[700] text-[14px] font-[#2c3d4f]'>
                    INTERESTS
                </span>
                <IntrestModal />
                
            </div>
            <div className='flex flex-row gap-4 pb-16'>

            { intrestsValue.map((intrest) => (
                    intrest!==null &&
                    <div className='flex flex-col px-[15px] py-[8px] bg-[rgba(243,145,46,.1)] rounded-lg items-center justify-center'>
                        <span className='text-[#f3912e] opacity-100 text-[12px]'>{intrest}</span>
                    </div>
                ))
            }
            </div>
        </main>
    )
}

export default About