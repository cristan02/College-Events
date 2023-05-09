import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useReactToPrint } from 'react-to-print';

import axios from 'axios'

function Letter(props) 
{
  const currdate = new Date();
  const [selectdept , setSelectDept] = useState(0);
  const [selectdeptname , setSelectDeptName] = useState("College");
  const [selectmonth , setSelectMonth] = useState(currdate.getMonth());
  const [selectyear , setSelectYear] = useState(currdate.getFullYear() );

  const [dept, setDept] = useState(["Loading..."])
  const [month , setMonth] = useState([]);
  const [year , setYear] = useState([]);

  const [activity , setActivity] = useState([]);
  const [workshop , setWorkshop] = useState([])
  const [event , setEvent] = useState([]);

  useEffect(() => {
    setMonth(months)
    refresh()
  },[])

  useEffect(() => {
    refresh()
  }, [selectdept,selectmonth,selectyear])

  const refresh = () => {
    axios.get(props.path + 'event/filter/departments').then((res) => {
      const temp = [{ d_id: 0, name: 'College' }]
      res.data.forEach((dept) => {
        temp.push({
          d_id: dept.d_id,
          name: dept.name,
        })
      });
      setDept(temp)
    })

    axios.get(props.path + 'years').then((res) => {
      const temp = []
      res.data.forEach((yr)=>{
        temp.push(yr.year)
      })
      setYear(temp)
    })

    if(selectdept == 0)
    {
      if(selectmonth == 0)
      {
        axios.get(props.path + 'letter/event/' +  selectyear)
        .then((res) => {setEvent(res.data)})
    
        axios.get(props.path + 'letter/workshop/'+  selectyear )
        .then((res) => {setWorkshop(res.data)})

        axios.get(props.path + 'letter/activity/' +  selectyear )
        .then((res) => {setActivity(res.data)})

    
      }
      else
      {
        axios.get(props.path + 'letter/eventcollege/' +  selectyear + '/' + selectmonth  )
        .then((res) => {setEvent(res.data)})
    
        axios.get(props.path + 'letter/workshopcollege/' +  selectyear + '/' + selectmonth )
        .then((res) => {setWorkshop(res.data)})

        axios.get(props.path + 'letter/activitycollege/' +   selectyear + '/' + selectmonth )
        .then((res) => {setActivity(res.data)})

       
      }}
    else{
        if(selectmonth == 0)
        {
          axios.get(props.path + 'letter/event/' + selectdept + '/' + selectyear   )
        .then((res) => {setEvent(res.data)})
    
        axios.get(props.path + 'letter/workshop/' + selectdept + '/' + selectyear )
        .then((res) => {setWorkshop(res.data)})

        axios.get(props.path + 'letter/activity/' + selectdept + '/' + selectyear )
        .then((res) => {setActivity(res.data)})

        
        }
        else{
          axios.get(props.path + 'letter/event/' + selectdept + '/' + selectyear + '/' + selectmonth  )
        .then((res) => {setEvent(res.data)})
    
        axios.get(props.path + 'letter/workshop/' + selectdept + '/' + selectyear + '/' + selectmonth )
        .then((res) => {setWorkshop(res.data)})

        axios.get(props.path + 'letter/activity/' + selectdept + '/' + selectyear + '/' + selectmonth )
        .then((res) => {setActivity(res.data)})

        }
      }
    }
    

  const handleDeptChange = (e) => {
    setSelectDept(e.target.value)
    dept.forEach((dept) => {
      if(dept.d_id == e.target.value)
        setSelectDeptName(dept.name)
    })
    
  }


  const printDiv = useRef();
  const handlePrint = useReactToPrint({
      content: () => printDiv.current,
  });

  
  
  return (
    <div
      className="text-md text-gray-800 flex flex-col w-full items-center
       py-10 px-20 min-h-screen ml-[253px]"
    >

        <div className='w-2/3'>
        <div className='flex justify-center text-xl p-2'>
            <div className=''><b>Departmental Letter for : </b></div>
            <select value={selectdept} name={selectdeptname} onChange={handleDeptChange} className="flex items-center justify-center rounded-md bg-white py-1 px-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
              {dept.map((dept) => (
                <option id={dept.name} name={dept.name}  value={dept.d_id}>{dept.name}</option>
              ))}
            </select>
        </div>

        <div className='flex justify-center '>
            <div className=''>
              <b>Year :</b>
              <select className='pr-1' onChange={(e)=>{setSelectYear(e.target.value)}} value={selectyear}>
                  {year && year.map((yr)=>(
                    <option value={yr}>{yr}</option>
                  ))}
              </select>
            </div>
            <p className='px-4'></p>
            <div className=''>
              <b>Month :</b>
                <select className='pr-1' onChange={(e)=>{setSelectMonth(e.target.value)}} value={selectmonth}>
                { month.map((mnt)=>(
                  <option value={mnt.index}>{mnt.month}</option>
                ))}
                </select>
            </div>
            <p className='px-4'></p>
            <button onClick={refresh} className='bg-blue-700 hover:bg-blue-900 text-white  py-1 px-4 rounded-full'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4 fill-white'><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
            </button>
            <p className='px-2'></p>
            <button onClick={handlePrint} className='bg-red-700 hover:bg-red-600 text-black  py-1 px-4 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-4 h-4 fill-white'><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V320 240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 240c0-8.8 7.2-16 16-16z" /></svg>
            </button>
        </div>
         
         <p className='p-4'></p>

        <div ref={printDiv} className=''>
          <div className='flex flex-col border py-6 px-8' >
              <div className='flex  justify-center text-xl'><h1 className='text-lg font-bold'>{selectdeptname}</h1></div>

              <p className='p-4'></p>
              <h1 className='text-md font-bold'>Events : </h1>
              <p className='p-2'></p>

              <div className='flex flex-col'>
                {
                  event && event.map((event) => (
                    <div className='py-2'>
                      <h1 className="text-xl font-extrabold font-serif flex w-full justify-center">
                          {event.name}
                      </h1>
                      <p className='p-1 '></p>
                      
                      <div className='flex justify-center  w-full'>
                        <img className="min-w-[250px] max-w-[280px] max-h-[160px] min-h-[160px] rounded-lg flex justify-center items-end  "
                        src={event.photo1} ></img>
                      </div>

                      <p className='p-1 '></p>
                      <div className=''><b>Held On : </b>{String(event.date)}</div>
                      <div className=''><b>Sub events for : </b>{event.name} </div>

                      <p className='p-1 '></p>
                      <table className='border-collapse border border-slate-500'>
                          <thead>
                          <tr className=''>
                            <th className='border border-slate-600 w-[300px]'>Sub Event No.</th>
                            <th className='border border-slate-600 w-[300px]'>Sub Event Name</th>
                            <th className='border border-slate-600 w-[300px]'>Sub Event Credits</th>
                          </tr>
                          </thead>
                        <tbody>
                        {
                          event.subevents && event.subevents.map((sub,index) => (
                            <tr className=''>
                              <td className='border border-slate-600 w-[300px] text-center'>{index+1}</td>
                              <td className='border border-slate-600 w-[300px] text-center'>{sub.name}</td>
                              <td className='border border-slate-600 w-[300px] text-center'>{sub.credits}</td>
                            </tr>
                          ))
                        }
                        </tbody>
                      </table>

                    </div>
                  ))
                }
              </div>

              <p className='p-4'></p>
              <hr className=' w-full h-[1px] bg-gray-900'></hr>
              <p className='p-4'></p>
              <h1 className='text-md font-bold'>Workshops : </h1>
              <p className='p-2'></p>

              <div className='flex flex-col'>
              {
                  workshop && workshop.map((event) => (
                    <div className='py-2'>
                      <h1 className="text-xl font-extrabold font-serif flex w-full justify-center">
                          {event.category}
                      </h1>
                      <p className='p-1 '></p>
                      
                      <div className='flex justify-center  w-full'>
                        <img className="min-w-[250px] max-w-[280px] max-h-[160px] min-h-[160px] rounded-lg flex justify-center items-end  "
                        src={event.photo1} ></img>
                        <p className='p-1 '></p>
                        <img className="min-w-[250px] max-w-[280px] max-h-[160px] min-h-[160px] rounded-lg flex justify-center items-end  "
                        src={event.photo2} ></img>
                      </div>

                      <p className='p-2 '></p>
                      <div className=''><b>Held On : </b>{String(event.date)}</div>
                      <div className=''><b>Attended by : </b>{event.faculty.designation} {event.faculty.fname} {event.faculty.lname}</div>

                      <div className='flex'>
                        <div className='min-w-[96px]'><b>Description :</b></div>
                        <p className='px-1'></p>
                        <div className=''>{event.des}</div>
                      </div>
                      
                    </div>
                  ))
                }
              </div>

              <p className='p-4'></p>
              <hr className=' w-full h-[1px] bg-gray-900'></hr>
              <p className='p-4'></p>

              <h1 className='text-md font-bold'>Activities : </h1>
              <p className='p-2'></p>

              <div className='flex flex-col'>
              {
                  activity && activity.map((event) => (
                    <div className='py-2'>
                      <h1 className="text-xl font-extrabold font-serif flex w-full justify-center">
                          {event.name}
                      </h1>
                      <p className='p-1 '></p>
                      
                      <div className='flex justify-center  w-full'>
                        <img className="min-w-[250px] max-w-[280px] max-h-[160px] min-h-[160px] rounded-lg flex justify-center items-end  "
                        src={event.photo1} ></img>
                        <p className='p-1 '></p>
                        <img className="min-w-[250px] max-w-[280px] max-h-[160px] min-h-[160px] rounded-lg flex justify-center items-end  "
                        src={event.photo2} ></img>
                      </div>

                      <p className='p-2 '></p>
                      <div className=''><b>Held On : </b>{String(event.date)}</div>
                      <div className=''><b>Credits : </b>{event.credits}</div>

                      <div className='flex'>
                        <div className='min-w-[96px]'><b>Description :</b></div>
                        <p className='px-1'></p>
                        <div className=''>{event.des}</div>
                      </div>
                      
                    </div>
                  ))
                }
              </div>
      
          </div>

        </div>
        </div>
        
    </div>
  )
}

export default Letter

const months = [
  {
    month : "All",
    index : 0
  },
  {
    month : "January",
    index : 1
  },
  {
    month : "Febraury",
    index : 2
  },
  {
    month : "March",
    index : 3
  },
  {
    month : "April",
    index : 4
  },
  {
    month : "May",
    index : 5
  },
  {
    month : "June",
    index : 6
  },
  {
    month : "July",
    index : 7
  },
  {
    month : "August",
    index : 8
  },
  {
    month : "September",
    index : 9
  },
  {
    month : "October",
    index : 10
  },
  {
    month : "November",
    index : 11
  },
  {
    month : "December",
    index : 12
  },
]