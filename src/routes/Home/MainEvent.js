import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


import axios from "axios";

function MainEvent(props) {
  const [subevents, setSubEvents] = useState([])
  

  const location = useLocation()

  useEffect(() => {
     axios.get("http://localhost:5000/home/events/"+ location.state.id).then((res) => {
      setSubEvents(res.data);
    });


  })

  return (
    <div
      className="text-md text-gray-800 flex flex-col max-w-full
       py-10 px-10 min-h-screen ml-[253px]"
    >
      <div className="flex flex-col ">
        <h1 className="text-xl  font-bold ">{location.state.ename}</h1>

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
            <div className="flex gap-4 justify-center items-center py-2">
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

//   const subeventtalk = [
//   {
//     ste_id: 1,
//     stename: 'FIFA',
//     stedate: '2022-08-10',
//     credits: 5,
//     stedes:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     photo1:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     photo2:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     d_id: null,
//     e_id: 1,
//   },
//   {
//     ste_id: 2,
//     stename: 'Blind Coder',
//     stedate: '2022-08-10',
//     credits: 2,
//     stedes:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     photo1:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     photo2:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     d_id: null,
//     e_id: 1,
//   },
//   {
//     ste_id: 3,
//     stename: 'Time Management',
//     stedate: '2022-08-10',
//     credits: 2,
//     stedes:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     photo1:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     photo2:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     d_id: 1,
//     e_id: null,
//   },
//   {
//     ste_id: 4,
//     stename: 'Photography',
//     stedate: '2022-08-10',
//     credits: 2,
//     stedes:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     photo1:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     photo2:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     d_id: 1,
//     e_id: 5,
//   },
//   {
//     ste_id: null,
//     stename: 'Painting',
//     stedate: '2022-08-10',
//     credits: 5,
//     stedes:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     photo1:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     photo2:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     d_id: 2,
//     e_id: null,
//   },
//   {
//     ste_id: 6,
//     stename: 'Futsal',
//     stedate: '2022-08-10',
//     credits: 2,
//     stedes:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//     photo1:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     photo2:
//       'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
//     d_id: 2,
//     e_id: null,
//   },
// ]
