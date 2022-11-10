import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';


import axios from "axios";

function SubEvent(props) {
    const location = useLocation();
    
  return (
    <div
    className="text-md text-gray-800 flex flex-col max-w-full
     py-10 px-10 min-h-screen ml-[253px]"
  >
      <div className="flex flex-col ">
        <h1 className="text-xl font-extrabold font-serif flex w-full justify-center">
            {location.state.title}
        </h1>

        <p className="p-3"></p>

        <div className="flex w-full justify-center gap-4">
          <img
            className="min-w-[250px] max-w-[280px] max-h-[160px] min-h-[160px] rounded-lg  justify-center items-end  "
            src={location.state.photo1}
          ></img>
          <img
            className="min-w-[250px] max-w-[280px] max-h-[160px] min-h-[160px] rounded-lg  justify-center items-end  "
            src={location.state.photo2}
          ></img>
        </div>

        <p className="p-4"></p>

        <div className="px-40">
          <div className="flex flex-col ">
            <div className="flex flex-row ">
              <b className="min-w-[125px] ">{location.state.host_label}</b>
              <b> : </b>
              <p className="p-2"></p>
              <div className="">{location.state.host}</div>
            </div>

            <p className="p-2"></p>

            <div className="flex flex-row ">
              <b className="min-w-[125px] ">{location.state.date_label}</b>
              <b> : </b>
              <p className="p-2"></p>
              <div className="">{location.state.date}</div>
            </div>

            <p className="p-2"></p>

            <div className="flex flex-row ">
              <b className="min-w-[125px] ">{location.state.about_label}</b>
              <b> : </b>
              <p className="p-2"></p>
              <div className="">{location.state.about}</div>
            </div>

            <p className="p-2"></p>

            <div className="flex flex-row ">
              <b className="min-w-[125px] ">{location.state.desc_label}</b>
              <b> : </b>
              <p className="p-2"></p>
              <div className="">
              {location.state.desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubEvent
