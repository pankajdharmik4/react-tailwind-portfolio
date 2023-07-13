import React from 'react'
import netflix from '../assets/projects/netflix.png'
import dall_e from '../assets/projects/dall-e.png'
import project_cry from '../assets/projects/project-cry.png'
import memories from '../assets/projects/memories.png'
import calculator from '../assets/projects/calculator.png'
import yt from '../assets/projects/yt.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div style={{backgroundImage: `url(${dall_e})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            AI Image Generation App
                        </span>
                        <div>
                            <a href="https://project-dall-e.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/pankajdharmik4/project-dall-e" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${netflix})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 m-3 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Netflix Clone (MERN STACK)
                        </span>
                        <div>
                            <a href="https://netflix-clone1999.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/pankajdharmik4/netflix-clone" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${project_cry})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            CryptoCurrency Tracker
                        </span>
                        <div>
                            <a href="https://pankajdharmik4.github.io/crypto-tracker/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/pankajdharmik4/crypto-tracker" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${memories})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Share Your Memories App
                        </span>
                        <div>
                            <a href="https://memoriesapp10.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/pankajdharmik4/memories-project" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${calculator})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Calculator Using React
                        </span>
                        <div>
                            <a href="https://pankajdharmik4.github.io/react-calculator/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/pankajdharmik4/react-calculator" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${yt})`}} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Youtube Landing Page(Responsive)
                        </span>
                        <div>
                            <a href="https://pankajdharmik4.github.io/youtuble-html-css/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/pankajdharmik4/youtuble-html-css">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work