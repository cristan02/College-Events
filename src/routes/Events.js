import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Events() {
  return (
    <div className="flex flex-col w-full  px-10 overflow-x-hidden justify-center items-center min-h-screen ml-[253px]">
      
      <div className='flex flex-col  border border-gray-500 p-8  rounded-lg text-lg font-semibold'>
        <Link to="/Event/CreateMainEvent">
        <button className="tracking-wide bg-gray-800 px-6 py-3 rounded transition ease-in-out hover:scale-105 hover:bg-sky-400 flex text-gray-100 items-center w-[260px]">
          <svg
            className="w-5 h-5 fill-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <p className="p-2"></p>
          <div className="">Create Main Event</div>
        </button>
        </Link>

        <p className="p-2"></p>

        <Link to="/Event/CreateSubEvent">
        <button className="tracking-wide transition ease-in-out hover:scale-105 bg-gray-800 px-6 py-3 rounded hover:bg-orange-400 flex text-gray-100 items-center w-[260px]">
          <svg
            className="w-5 h-5 fill-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <p className="p-2"></p>
          <div className="">Create Sub Event</div>
        </button>
        </Link>

        <p className="p-2"></p>

        <Link to="/Event/CreateWorkshop">
        <button className="tracking-wide bg-gray-800 px-6 py-3 transition ease-in-out hover:scale-105 rounded hover:bg-pink-500 flex text-gray-100 items-center w-[260px]">
          <svg
            className="w-5 h-5 fill-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <p className="p-2"></p>
          <div className="">Create Workshop</div>
        </button>
        </Link>

        <p className="p-2"></p>

        <Link to="/Event/CreateActivity">
        <button className="tracking-wide bg-gray-800 px-6 transition ease-in-out hover:scale-105 py-3 rounded hover:bg-yellow-300 flex text-gray-100 items-center w-[260px]">
        <svg
            className="w-5 h-5 fill-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <p className="p-2"></p>
          <div className="">Create Activity</div>
        </button>
        </Link>

        <p className="p-2"></p>

        <Link to="/Event/Filter">
        <button className="tracking-wide bg-gray-800 px-6 py-3 transition ease-in-out hover:scale-105 rounded hover:bg-green-500 flex text-gray-100  items-center w-[260px]">
          <svg
            className="w-5 h-5 fill-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <p className="p-2"></p>
          <div className="">Filter Events</div>
        </button>
        </Link>
      </div>
      

    </div>
  )
}

export default Events
