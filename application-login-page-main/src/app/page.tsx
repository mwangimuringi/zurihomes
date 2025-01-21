import Image from 'next/image';
import image from '/public/image.jpeg';


export default function Home() {
  return (
  
  
  <div className='bg-gray-50 min-h-screen 
  flex justify-center items-center '>
{/* Login section*/}

<div className='bg-gray-200 rounded-xl flex shadow-lg
max-w-3xl p-3 items-center '>




{/* form section */}

<div className='md:w-1/2 px-16 '>
<h2 className='text-2xl font-semibold text-[#002D74]'>Login</h2>
<p className='text-sm mt-4 text-[#002D74] '>If you already amember, easily login</p>

<form action= "" className='flex flex-col gap-5'>
<input className='border rounded-xl p-2 mt-8' 
type='text' placeholder='Email'/>
<div className='relative'>
<input className='border rounded-xl p-2 w-full' 
type='password' placeholder='Password'/>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" 
 className="bi bi-eye absolute top-1/2 right-3 cursor-pointer -translate-y-1/2" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>

</div>
<button className='bg-[#002D74] p-1 rounded-xl text-white py-2 
hover:scale-105 duration-300 '>Login</button>
</form>

<div className='mt-10 grid grid-cols-3
items-center text-gray-400  '>
  <hr className='border-gray-400' />
  <p className='text-center text-sm'>OR</p>
  <hr className='border-gray-400' />
</div>
<button className='bg-white border text-sm rounded-lg mt-5 
w-full py-2 hover:scale-105 duration-300 '>
  Login with Google</button>
  <p className=' cursor-pointer mt-5 border-b border-gray-400 
  text-xs py-3 hover:underline '>
    Forgot your password ?</p>
    <div className='mt-3 text-xs flex justify-between items-center'>
<p> Don t have an account?</p>
<button className='py-2 px-3 border text-center
 bg-white rounded-xl hover:scale-110 duration-300 '> Register</button>


</div>
</div>


{/* image section */}

<div className='md:block hidden w-1/2'>

<Image className='rounded-xl '
src={image} 
// width={350}
// height={600}
alt='loginimage'

/>
</div>
</div>
  </div>
      )
}
