import React from 'react'

const Home = (props) => {
    return (
        <div className='container w-full min-h-screen flex justify-center items-center text-5xl text-white bg-zinc-900'>
            <p>Hello, {props.username}👋</p>
        </div>
    )
}

export default Home
