import React from 'react'
import './style.css'

const Home = () => {
    return (
        <div className='flex flex-col w-full px-40 py-10 min-h-1'>
            <div id='above-fold' className='flex flex-col font-bold'>
                <h1 id='title' className='w-full text-center'>Show the world</h1>
                <div id='sub-title' className='flex flex-row w-full justify-center items-center'>
                    <span id='sub-title-text' className='font-thin text-gray-light'>A dope showroom for your NFTs</span>
                </div>
                <div id='action' className='flex flex-row mt-16 justify-center items-center'>
                    {/* <a href='/' id='action-button' className='flex flex-row bg-no-repeat rounded-full justify-center items-center bg-center bg-contain text-secondary'>
                        <span id='action-text' className='font-semibold'>Claim username</span>
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Home;


