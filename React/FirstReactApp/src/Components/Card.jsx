import React from 'react'

const Card = (props) => {
    return (
        <div className='card border-2 rounded-md w-60 px-4 py-2 flex flex-col gap-4 text-center items-center min-w-60'>
            <img className='w-40 h-40 rounded-full border-2' src={props.photu} alt={props.photu} />
            <p className='text-3xl'>{props.username}</p>
            <p className=''>{props.profession}</p>
            <p className=''>{props.email}, {props.age}</p>
        </div>
    )
}

export default Card
