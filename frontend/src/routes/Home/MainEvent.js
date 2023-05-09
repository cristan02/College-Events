import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


import axios from "axios";

function MainEvent(props) {
  const [subevents, setSubEvents] = useState([])
  

  const location = useLocation()

  useEffect(() => {
     axios.get(props.path + "home/events/"+ location.state.id).then((res) => {
      setSubEvents(res.data);
    },[]);


  })

  return (
    <div
      className="text-md text-gray-800 flex flex-col max-w-full
       py-20 px-20 min-h-screen ml-[253px] items-center w-full"
    >
      <div className="flex flex-col">
        <h1 className="text-xl font-bold w-full text-center">{location.state.ename}</h1>

        <p className="p-1"></p>
        <div className="">
          <b>Held On : </b>
          {location.state.startdate}
        </div>
        <div className="">
          <b>By Department : </b>
          {location.state.name}
      
        </div>
        <div className="">
          <b>Sub Event : </b>
        </div>

        <p className="p-2"></p>
        <div className="flex flex-col">
          {subevents && subevents.map((event) => (
            <div className="flex gap-4  py-2">
              <img
                className="min-w-[220px] max-w-[220px] max-h-[160px] min-h-[160px] rounded-lg  justify-center items-end  "
                src={event.photo1}
              ></img>

              <div className="flex flex-col">
                <div className="capitalize">
                  <b>Event Name : </b>
                  {event.stename}
                </div>
                <div className="">
                  <b>Event credits : </b>
                  {event.credits}
                </div>
                <div className="text-ellipsis overflow-hidden  max-h-[120px]">
                  <b>Description : </b>
                  {event.stedes}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="p-2"></p>
      </div>
    </div>
  )
}

export default MainEvent
