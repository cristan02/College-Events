import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import axios from "axios";

function Home(props) {
  
  const [events,setEvents] = useState([]);
  const [workshops,setWorkshops] = useState([]);
  const [activity,setActivity] = useState([]);

  const navigate = useNavigate();

  const getMainEvent = (event) =>{
    navigate('/Home/MainEvent' ,{
      state:{
        id:event.e_id ,
        ename:event.ename ,
        startdate:event.startdate , 
        d_id:event.d_id ,
        name:event.name    
      }});
  }

  const getWorkshop = (event) =>{
    navigate('/Home/SubEvent' ,{
      state:{
        id:event.e_id ,
        title:event.category ,
        host_label:"Attended By",
        host:event.fname + " " + event.lname,
        date_label:"Held On",
        date:event.wdate , 
        about_label:"Department",
        about:event.name,
        desc_label:"Description",
        desc:event.des,
        photo1:event.photo1,
        photo2:event.photo2
      }});
  }

  const getActivity = (event) =>{
    navigate('/Home/SubEvent' ,{
      state:{
        id:event.ste_id ,
        title:event.stename ,
        host_label:"By Department",
        host: event.name ,
        date_label:"Held On",
        date:event.stedate , 
        about_label:"Credits",
        about:event.credits,
        desc_label:"Description",
        desc:event.stedes ,
        photo1:event.photo1,    
        photo2:event.photo2
      }});
  }

  useEffect(() => {
    axios.get(props.path + "home/event").then((res) => {
      setEvents(res.data);
    });
    axios.get(props.path + "home/workshop").then((res) => {
      setWorkshops(res.data);
    });
    axios.get(props.path + "home/subevent").then((res) => {
      setActivity(res.data);
    })
  
  },[])



  return(

      <div className='flex flex-col max-w-full
       pt-14 px-10 overflow-x-hidden min-h-screen ml-[253px]'>
          <div className='flex flex-col '>
              
                <div>
                  <h1 className='text-xl text-gray-800 decoration-4 underline decoration-sky-500 font-bold '>Events</h1>
                  <p className='p-1'></p>
                  <div className='flex flex-row space-x-5 overflow-x-auto  py-1 inviz'>
                  {
                    events && events.map((event , index) => (
                        <div id={index} className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] gap-2 relative' onClick = {()=>{
                          getMainEvent(event)
                        }}>
                          <img className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] rounded-lg  justify-center items-end  ' src={event.photo1}></img>
                          <div className='absolute bottom-0 flex justify-center w-full text-lg font-bold text-sky-200 backdrop-brightness-50 backdrop-blur-sm capitalize'>{event.ename}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              

              <p className='p-4'></p>

              <h1 className='text-xl text-gray-800 decoration-4 underline decoration-pink-500 font-bold '>Workshop</h1>
              <p className='p-1'></p>
              <div className='flex flex-row space-x-5 overflow-x-auto  py-1 inviz'>
              {
                   workshops &&  workshops.map((workshop , index) => (
                        <div id={index} className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] gap-2 relative' onClick = {()=>{
                          getWorkshop(workshop)
                        }}>
                          <img className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] rounded-lg  justify-center items-end  ' src={workshop.photo1}></img>
                          <div className='absolute bottom-0 flex justify-center w-full text-lg font-bold backdrop-blur-sm capitalize text-pink-200 backdrop-brightness-50'>{workshop.category}
                          </div>
                        </div>
                    ))}
              </div>

              <p className='p-4'></p>

              <h1 className='text-xl text-gray-800 decoration-4 underline decoration-yellow-300 font-bold '>Activity</h1>
              <p className='p-1'></p>
              <div className='flex flex-row space-x-5 overflow-x-auto  py-1 inviz'>
              {
                    activity && activity.map((activity , index) => (
                        <div id={index} className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] gap-2 relative' onClick = {()=>{
                          getActivity(activity)
                        }}>
                          <img className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] rounded-lg  justify-center items-end  ' src={activity.photo1}></img>
                          <div className='absolute bottom-0 flex justify-center w-full text-lg font-bold text-yellow-100 backdrop-brightness-50 backdrop-blur-sm capitalize'>{activity.stename}
                          </div>
                        </div>
                ))}
    
              </div>
          </div>
      </div>
    
  );
}

export default Home;

