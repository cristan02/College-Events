import React, { useEffect, useState , PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , PieChart, Pie, Sector, Cell } from 'recharts';
import { Link } from 'react-router-dom'

function Credit() 
{

  const [credits , setCredits] = useState();

  useEffect(() => {
    setCredits(credit);
  })

  return (
    <div
      className="w-full  text-md text-gray-800 flex flex-col max-w-full
       py-10 px-10 min-h-screen ml-[253px]"
    >

      <div className='flex justify-between w-full'>
        <div className='text-xl p-2'><b>Credits</b></div>
        <Link to="/Credit/AddSingle">
        <button className='bg-emerald-500 hover:bg-emerald-600  py-1 px-4  h-[30px] mr-10 rounded-full font-semibold flex items-center justify-center'>
        <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
          <span>Add</span>
        </button>
        </Link>
      </div>

      <div className='flex'>
          <div className='w-[100px] p-2 font-semibold text-lg'>Roll No.</div>
          <p className='px-1'></p>
          <div className='w-[440px]  p-2 font-semibold text-lg'>Full Name</div>
          <p className='px-1'></p>
          <div className='w-[130px]  p-2 font-semibold text-lg'>Year Joined</div>
          <p className='px-1'></p>
          <div className='w-[130px]  p-2 font-semibold text-lg'>Credit Hours</div>
          <p className='px-1'></p>
      </div>

      <div className='flex flex-col'>
      {
        credit.map((stud) => (
          <div className='flex'>
            <div className='w-[100px] px-2 py-1 flex justify-center'>{stud.id}</div>
            <p className='px-1'></p>
            <div className='w-[440px] px-2 py-1'>{stud.fname} {stud.lname}</div>
            <p className='px-1'></p>
            <div className='w-[130px]  px-2 py-1 flex justify-center'>{stud.year_joined}</div>
          <p className='px-1'></p>
            <div className='w-[130px] px-2 py-1 flex justify-center'>{stud.hours}</div>
            <p className='px-6'></p>
            <div className='w-[70px] px-2 py-1 flex justify-end'>
              <button  className='flex items-center justify-center bg-blue-700 hover:bg-blue-900 text-white  py-1 px-2 rounded-full h-[24px] '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 fill-white'><path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"/></svg>
              </button>

            
            </div>
            <div className='w-[70px] px-2 py-1 flex justify-start'>
              <button  className='flex items-center justify-center bg-red-700 hover:bg-red-600 text-black  py-1 px-2 rounded-full h-[24px]'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-4 h-4 fill-white'><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
              </button>

            </div>
            <p className='px-1'></p>
          </div>
        ))
      }
      </div>
        
    </div>
  )
}

export default Credit;



const credit = [
  {id :1 , fname : "ashbourn" , lname:"dcunha" , year_joined : 2020, hours:1},
  {id :2 , fname : "moses" , lname:"Crastro" , year_joined : 2020, hours:2},
  {id :3, fname : "reeve" , lname:"barretto" ,year_joined : 2020,  hours:3},
  {id :4 , fname : "elton" , lname:"john" , year_joined : 2020, hours:4},
  {id :5 , fname : "cassius" , lname:"dias" , year_joined : 2020, hours:5},
]