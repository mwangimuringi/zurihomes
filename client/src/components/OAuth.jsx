import React from 'react'

export default function OAuth() {
    const handleGoogleClick = () => {
        try {
            window.location.href = '/api/auth/google'
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
      Continue with Google
    </button>
  )
}
