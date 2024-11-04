import React from 'react'

export default function SignUp() {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' className='border rounded-lg p-3' id="username" />
        <input type="email" placeholder='Email' className='border rounded-lg p-3' id="email" />
        <input type="password" placeholder='Username' className='border rounded-lg p-3' id="password" />
      </form>
    </div>
  )
}
