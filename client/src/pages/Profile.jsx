import { useSelector } from "react-redux"

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col '>
        <img src={currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
      </form>
    </div>
  )
}
