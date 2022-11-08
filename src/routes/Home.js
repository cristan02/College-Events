import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

import SubEvent from './Home/SubEvent'

function Home() {
  
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
        d_id:event.d_id      
      }});
  }

  const getWorkshop = (event) =>{
    navigate('/Home/SubEvent' ,{
      state:{
        id:event.e_id ,
        title:event.category ,
        host_label:"Attended By",
        host:event.f_id,
        date_label:"Held On",
        date:event.wdate , 
        about_label:"Department",
        about:event.d_id,
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
        host:event.d_id,
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
    setEvents(mevent);
    setWorkshops(workshop);
    setActivity(subeventtalk);
  })

  return(

      <div className='flex flex-col max-w-full
       pt-14 px-10 overflow-x-hidden min-h-screen ml-[253px]'>
          <div className='flex flex-col '>
              
                <div>
                  <h1 className='text-xl text-gray-800 font-bold '>Events</h1>
                  <p className='p-1'></p>
                  <div className='flex flex-row space-x-5 overflow-x-auto  py-1 inviz'>
                  {
                    mevent.map((event , index) => (
                        <div id={index} className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] gap-2 relative' onClick = {()=>{
                          getMainEvent(event)
                        }}>
                          <img className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] rounded-lg  justify-center items-end  ' src={event.photo1}></img>
                          <div className='absolute bottom-0 flex justify-center w-full text-lg font-bold text-grey-200 capitalize shadow'>{event.ename}
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              

              <p className='p-4'></p>

              <h1 className='text-xl text-gray-800 font-bold '>Workshop</h1>
              <p className='p-1'></p>
              <div className='flex flex-row space-x-5 overflow-x-auto  py-1 inviz'>
              {
                    workshops.map((workshop , index) => (
                        <div id={index} className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] gap-2 relative' onClick = {()=>{
                          getWorkshop(workshop)
                        }}>
                          <img className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] rounded-lg  justify-center items-end  ' src={workshop.photo1}></img>
                          <div className='absolute bottom-0 flex justify-center w-full text-lg font-bold text-grey-200 capitalize shadow'>{workshop.category}
                          </div>
                        </div>
                    ))}
              </div>

              <p className='p-4'></p>

              <h1 className='text-xl text-gray-800 font-bold '>Activity</h1>
              <p className='p-1'></p>
              <div className='flex flex-row space-x-5 overflow-x-auto  py-1 inviz'>
              {
                    subeventtalk.map((activity , index) => (
                        <div id={index} className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] gap-2 relative' onClick = {()=>{
                          getActivity(activity)
                        }}>
                          <img className='min-w-[200px] max-w-[200px] max-h-[120px] min-h-[120px] rounded-lg  justify-center items-end  ' src={activity.photo1}></img>
                          <div className='absolute bottom-0 flex justify-center w-full text-lg font-bold text-grey-200 capitalize shadow'>{activity.stename}
                          </div>
                        </div>
                ))}
    
              </div>
          </div>
      </div>
    
  );
}

export default Home;



    const mevent =  [  
        {   e_id : 1 ,
            ename :  "TechFeast" ,
            startdate : "2022-08-10" ,
            photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            d_id : 1 } ,
        {   e_id : 2 ,
            ename :  "IRIX" ,
            startdate : "2022-06-20" ,
            photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            d_id : 1 } ,
        {   e_id : 3 ,
            ename :  "Tatastu" ,
            startdate : "2022-06-20" ,
            photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            d_id : 1 } ];
    
    const subeventtalk =  [  
        {   ste_id : 1 ,
            stename : "FIFA" ,
            stedate : "2022-08-10" ,
            credits : 5 ,
            stedes : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
            photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            d_id : null  ,
            e_id : 1 } ,
        {   ste_id : 2 ,
            stename : "Blind Coder" ,
            stedate : "2022-08-10" ,
            credits : 2 ,
            stedes : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
            photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            d_id : null  ,
            e_id : 1 } ,
        {   ste_id : 3 ,
            stename : "Time Management" ,
            stedate : "2022-08-10" ,
            credits : 2 ,
            stedes : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
            photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            d_id : 1  ,
            e_id : null } ,
        {   ste_id : 4 ,
            stename : "Photography" ,
            stedate : "2022-08-10" ,
            credits : 2 ,
            stedes : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
            photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            d_id : 1  ,
            e_id : 5 } ,
        {   ste_id : null ,
            stename : "Painting" ,
            stedate : "2022-08-10" ,
            credits : 5 ,
            stedes : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
            photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            d_id : 2  ,
            e_id : null } ,
        {   ste_id : 6 ,
            stename : "Futsal" ,
            stedate : "2022-08-10" ,
            credits : 2 ,
            stedes : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
            photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
            d_id : 2  ,
            e_id : null } ];

const workshop =  [  
    {   w_id : 1 ,
        category : "Web Development" ,
        wdate : "2022-08-10" , 
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." , 
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" , 
        photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" , 
        f_id : 1 } ,
    {   w_id : 2 ,
        category : "AI" ,
        wdate : "2022-08-10" , 
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." , 
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" , 
        photo2 :"https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        f_id : 2 } ];