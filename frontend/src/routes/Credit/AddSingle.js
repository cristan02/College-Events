import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import { formatDate } from "../utils/formatDate";

function AddSingle(props) {

    const [studDet , setStudDet] = useState();
    const [eventName , setEventName] = useState();

    const [activestudId , setActiveStudId] = useState();
    const [activeeventName , setActiveEventName] = useState();

    const formRef = useRef(); 

    const addCredits = (e)  => {
      e.preventDefault();
      activestudId && activeeventName && axios
        .post(props.path + "post/credits", {
          s_id:activestudId,
          ste_id:activeeventName,
        })
        .then((res) => {
          alert("Activity created successfully");
        });
      setActiveStudId();
      setActiveEventName();
  
      formRef.current.reset();
    }

    useEffect(() => {
        axios.get(props.path + "get/rollno").then((res) => {
          setStudDet(res.data);
        });
        axios.get(props.path + "get/activities").then((res) => {
          setEventName(res.data);
        });
      })

      const getstudent = (e) => {
        setActiveStudId(e.target.value);
      }

      const getevent = (e) => {
        setActiveEventName(e.target.value);
      }

  return (
    <div
    className="w-full  text-md text-gray-800 flex flex-col max-w-full
     py-10 px-10 min-h-screen ml-[253px] justify-center"
  >
    <div className="flex flex-col text-[30px] justify-center items-center p-4">
      Add Credits for Student
      <p className="p-2"></p>
      <form  className="w-1/3" ref={formRef}>
      {/* ref={formRef} onSubmit={handleSubmit} */}
        <div className="overflow-hidden shadow-xl shadow-blue-200 sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
    
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700">
                  Student Roll No.
                </label>
                <select onChange={getstudent} 
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">   
                  <option value="none" selected></option>
                  {
                    studDet && studDet.map((id)=>(
                        <option value={id.sid}>{id.sid  + ' - '+ id.fname  + ' ' + id.lname}</option>
                    ))
                  }
                </select>
            </div>

            <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700">
                  Activity / Sub-Event
                </label>
                <select
                  onChange={getevent}
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                    <option value="none" selected ></option>
                    {
                        eventName && eventName.map((event)=>(
                        <option value={event.eid}>{event.ename}</option>
                    ))
                  }
                </select>
            </div>
         </div>

          </div>
          <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={addCredits} >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AddSingle;

const studentId = [1,2,3,4,5]
const events = [
    {eid:1 , ename:"Irix"},
    {eid:2 , ename:"Techfeast"},
    {eid:3 , ename:"Tatatsu"},
    {eid:4 , ename:"PyskedUp"},
]
