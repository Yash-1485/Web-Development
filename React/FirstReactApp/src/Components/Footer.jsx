import React, { useState } from 'react'

const Footer = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const formSubmission=(e)=>{
        e.preventDefault();
        console.log(name,email);
        setName("");
        setEmail("");
    }

    return (
        <>
            <footer className='flex justify-between absolute text-white w-full px-8 py-4 bg-emerald-600'>
                <div className='companyName text-4xl'>Logo</div>

                <div className="links-container w-full flex justify-evenly">
                    <ul className="links1">
                        <li><a href="#" className="link underline">Link11</a></li>
                        <li><a href="#" className="link underline">Link12</a></li>
                        <li><a href="#" className="link underline">Link13</a></li>
                        <li><a href="#" className="link underline">Link14</a></li>
                    </ul>

                    <ul className="links2">
                        <li><a href="#" className="link underline">Link21</a></li>
                        <li><a href="#" className="link underline">Link22</a></li>
                        <li><a href="#" className="link underline">Link23</a></li>
                        <li><a href="#" className="link underline">Link24</a></li>
                    </ul>

                    <ul className="links3">
                        <li><a href="#" className="link underline">Link31</a></li>
                        <li><a href="#" className="link underline">Link32</a></li>
                        <li><a href="#" className="link underline">Link33</a></li>
                        <li><a href="#" className="link underline">Link34</a></li>
                    </ul>
                </div>

                <div className="contactUs">
                    <h1 className="text-xl">Contact US</h1>
                    <form action="#" onSubmit={(e)=>{formSubmission(e)}} className='flex flex-col'>
                        <input className='px-4 py-2 outline-none border-2 border-zinc-300 rounded my-2' type="text" name="name" id="name" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input className='px-4 py-2 outline-none border-2 border-zinc-300 rounded my-2' type="email" name="email" id="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input className='bg-blue-500 px-4 py-2 rounded-md' type="submit" value="Submit" />
                    </form>
                </div>
            </footer>
        </>
    )
}

export default Footer
