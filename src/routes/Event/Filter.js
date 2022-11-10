import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import axios from 'axios'

function Filter(props) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [selectdept, setSelectDept] = useState('Computer Science')

  const [dept, setDept] = useState([{ d_id: null, name: 'All' }])
  const [activity, setActivity] = useState([])
  const [workshop, setWorkshop] = useState([])
  const [event, setEvent] = useState([])
  const [subevent, setSubEvent] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/event/filter/departments').then((res) => {
      setDept(res.data)
    })

    setActivity(act)
    setWorkshop(work)
    setEvent(events)
  })

  const getDept = (e) => {
    setSelectDept(e.target.value)
  }

  const filter = () => {
    axios
      .get(
        'http://localhost:5000/event/filter/event/' +
          selectdept +
          '/' +
          startDate +
          '/' +
          endDate,
      )
      .then((res) => {
        setEvent(res.data)
      })
    axios
      .get(
        'http://localhost:5000/event/filter/event/' +
          selectdept +
          '/' +
          startDate +
          '/' +
          endDate,
      )
      .then((res) => {
        setEvent(res.data)
      })
    axios
      .get(
        'http://localhost:5000/event/filter/event/' +
          selectdept +
          '/' +
          startDate +
          '/' +
          endDate,
      )
      .then((res) => {
        setEvent(res.data)
      })
  }

  return (
    <div
      className="text-md text-gray-800 flex flex-col max-w-full
       py-10 px-10 min-h-screen ml-[253px]"
    >
      <div className="">
        <div className="flex justify-evenly">
          <div className="flex flex-col ">
            <div className="">
              <b>Department :</b>
            </div>
            <select className="pr-1" onChange={getDept}>
              {dept.map((dept) => (
                <option value={dept.d_id}>{dept.name}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <div className="">
              <b>Start Date :</b>
            </div>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
            <p className="p-2"></p>
            <button
              className="bg-black hover:bg-gray-900 text-white  py-1 px-4 w-[100px]  rounded-full"
              //   onClick={filter}
            >
              Filter
            </button>
          </div>
          <div className="flex flex-col">
            <div className="">
              <b>End Date :</b>
            </div>
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
            />
          </div>
        </div>
      </div>

      <p className="p-4"></p>
      <hr className="h-2 bg-balck"></hr>
      <p className="p-1"></p>

      <div className="w-full flex justify-center">
        <div className="flex  w-[1000px] flex-col">
          <h1 className="text-xl font-bold">Events : </h1>

          <p className="p-2"></p>

          {event.map((event) => (
            <div className="flex py-1">
              <h1 className="text-lg font-bold w-[150px] p-2">{event.name} </h1>
              <img
                className="min-w-[220px] max-w-[220px] max-h-[160px] min-h-[160px] rounded-lg  justify-center items-end  "
                src={event.photo1}
              ></img>

              <div className="flex flex-col">
                {event.subevent.map((sub) => (
                  <div className="flex gap-4  py-1 px-4 ">
                    <div className="flex flex-col">
                      <div className="capitalize">
                        <b>Sub Event Name : </b>
                        {sub.name}
                      </div>
                      <div className="">
                        <b>Sub Event Date : </b>
                        {String(sub.date)}
                      </div>
                    </div>

                    <p className="p-2"></p>

                    <img
                      className="min-w-[50px] max-w-[50px] max-h-[50px] min-h-[50px] rounded-lg  justify-center items-end "
                      src={sub.photo1}
                    ></img>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="p-2"></p>
          <hr className="h-2 bg-balck"></hr>
          <p className="p-1"></p>

          <h1 className="text-xl font-bold">Workshop : </h1>

          <p className="p-2"></p>

          {workshop.map((event) => (
            <div className="flex py-1 ">
              <h1 className="text-lg font-bold w-[150px] p-2">
                {event.category}
              </h1>
              <img
                className="min-w-[220px] max-w-[220px] max-h-[160px] min-h-[160px] rounded-lg  justify-center items-end  "
                src={event.photo1}
              ></img>

              <div className="flex flex-col">
                {event.faculty.map((sub) => (
                  <div className="flex gap-4  py-1 px-4 ">
                    <div className="flex flex-col">
                      <div className="capitalize">
                        <b>Faculty FName : </b>
                        {sub.fname}
                      </div>
                      <div className="">
                        <b>Faculty FName : </b>
                        {String(sub.lname)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="p-2"></p>
          <hr className="h-2 bg-balck"></hr>
          <p className="p-1"></p>

          <h1 className="text-xl font-bold">Activity : </h1>

          <p className="p-2"></p>

          {activity.map((event) => (
            <div className="flex py-1">
              <h1 className="text-lg font-bold w-[150px] p-2">
                {event.name} :{' '}
              </h1>
              <img
                className="min-w-[220px] max-w-[220px] max-h-[160px] min-h-[160px] rounded-lg  justify-center items-end  "
                src={event.photo1}
              ></img>

              <div className="flex gap-4  py-2 px-4 ">
                <div className="flex flex-col">
                  <div className="capitalize">
                    <b>Activity Date : </b>
                    {String(event.date)}
                  </div>
                  <div className="">
                    <b>Activity Credits : </b>
                    {event.credits}
                  </div>
                </div>

                <p className="p-2"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filter

const department = ['Computer Science', 'Chemistry', 'Physics', 'Maths']

const work = [
  {
    _id: 1,
    category: 'Web Development',
    date: new Date('2022-06-10'),
    des:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photo1:
      'https://th.bing.com/th/id/OIP.HC-UyOCPxhwxSX_PltuYvgHaEj?w=261&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    photo2:
      'https://th.bing.com/th/id/OIP.UB2JvpKuexLOKKo09Qx0pwHaE8?w=284&h=189&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    department: 'Computer Science',
    faculty: [
      {
        fname: 'Abishek',
        lname: 'Guidekar',
        designation: 'Asst Proff',
      },
      {
        fname: 'Ian',
        lname: 'Barreto',
        designation: 'Assoc Proff',
      },
    ],
  },
  {
    _id: 2,
    category: 'AI',
    date: new Date('2022-06-20'),
    des:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photo1:
      'https://th.bing.com/th/id/OIP.BqKdgPjor3R6DK5PZmS3ZQHaFj?w=208&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    photo2:
      'https://th.bing.com/th/id/OIP.ah99LJ3z6Bgr_J1c3JEs7AHaDo?w=303&h=171&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    department: 'Computer Science',
    faculty: [
      {
        fname: 'Dikshita',
        lname: 'Aroskar',
        designation: 'Asst Proff',
      },
      {
        fname: 'Kumresh',
        lname: 'C',
        designation: 'Assoc Proff',
      },
    ],
  },
  {
    _id: 3,
    category: 'Graphic Design',
    date: new Date('2022-07-11'),
    des:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photo1:
      'https://th.bing.com/th/id/OIP.G_tOhn1snMAeO3covZlvEwHaEi?w=276&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    photo2:
      'https://th.bing.com/th/id/OIP.yymYaZW4YfTu4518RgOV6QHaFj?w=226&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    department: 'Computer Science',
    faculty: [
      {
        fname: 'Sameena',
        lname: 'Faleiro',
        designation: 'Assoc Proff',
      },
      {
        fname: 'Sanas',
        lname: 'Shaikh',
        designation: 'Asst Proff',
      },
    ],
  },
  {
    _id: 4,
    category: 'Design Thinking',
    date: new Date('2022-02-24'),
    des:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photo1:
      'https://th.bing.com/th/id/OIP.dPG-yTQiOvKwzFdfd0YZ2AHaFj?w=267&h=200&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    photo2:
      'https://th.bing.com/th/id/OIP.ncnhbbQMcyXOixJFp-uVlwHaE8?w=287&h=191&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    department: 'Computer Science',
    faculty: [
      {
        fname: 'Sameena',
        lname: 'Faleiro',
        designation: 'Assoc Proff',
      },
    ],
  },
]

const student = [
  {
    _id: 1,
    fname: 'Ashbourn',
    lanme: 'DCunha',
    year_joined: new Date('2019'),
    status: null,
    department: 'Computer Science',
    credits: [
      {
        eid: 1,
        subid: 2,
      },
      {
        eid: 1,
        subid: 2,
      },
      {
        eid: 1,
        subid: 1,
      },
      {
        eid: 5,
      },
    ],
  },
  {
    _id: 2,
    fname: 'Moses',
    lanme: 'Crasto',
    year_joined: new Date('2019'),
    status: null,
    department: 'Computer Science',
    credits: [
      {
        eid: 4,
      },
      {
        eid: 1,
        subid: 2,
      },
      {
        eid: 1,
        subid: 1,
      },
      {
        eid: 6,
      },
    ],
  },
]

const events = [
  {
    _id: 1,
    name: 'TechFest',
    date: new Date('2022-06-20'),
    photo1:
      'https://th.bing.com/th/id/OIP.cg-yV4eUkhmvhXN9gBincAHaE8?w=277&h=185&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    department: 'Computer Science',
    type: 'event',
    subevent: [
      {
        _id: 1,
        name: 'FIFA',
        date: new Date('2022-06-20'),
        credits: 15,
        des:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        photo1:
          'https://th.bing.com/th/id/OIP.i3SufWxvC7270opR0Lm2WwHaE7?w=282&h=188&c=7&r=0&o=5&dpr=1.31&pid=1.7',
        photo2:
          'https://th.bing.com/th/id/OIP.i7x4BQaj4Qv3E_5Q_6nSdAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
      },
      {
        _id: 2,
        name: 'Blind Coder',
        date: new Date('2022-06-20'),
        credits: 15,
        des:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        photo1:
          'https://th.bing.com/th/id/OIP.QYyyEbi20aFDtjNQkyqv0AHaFY?w=208&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
        photo2:
          'https://th.bing.com/th/id/OIP.lG1uFK4v1rJVXCzdq3qV9QHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
      },
    ],
  },
  {
    _id: 2,
    name: 'IRIX',
    date: new Date('2022-10-15'),
    photo1:
      'https://th.bing.com/th/id/OIP.WykiZDp7CVulnOAC-19MAwHaEB?w=339&h=184&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    department: 'Computer Science',
    type: 'event',
    subevent: [
      {
        _id: 1,
        name: 'Futsal',
        date: new Date('2022-10-15'),
        credits: 15,
        des:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        photo1:
          'https://th.bing.com/th/id/OIP.i3SufWxvC7270opR0Lm2WwHaE7?w=282&h=188&c=7&r=0&o=5&dpr=1.31&pid=1.7',
        photo2:
          'https://th.bing.com/th/id/OIP.i7x4BQaj4Qv3E_5Q_6nSdAHaE8?w=254&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
      },
    ],
  },
]
const act = [
  {
    _id: 4,
    name: 'Time Management',
    date: new Date('2022-06-20'),
    credits: 2,
    des:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photo1:
      'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
    photo2:
      'https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true',
    department: 'Computer Science',
    type: 'activity',
  },
  {
    _id: 8,
    name: 'Religious Dialogue',
    date: new Date('2022-10-28'),
    credits: 15,
    des:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photo1:
      'https://th.bing.com/th/id/OIP.S8kmS6u9DiSpSdGgLjW-1AHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    photo2:
      'https://th.bing.com/th/id/OIP.xdLbO-F2AL4qNQxW2juaqgHaEj?w=269&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    department: 'Sociology',
    type: 'activity',
  },
  {
    _id: 12,
    name: 'Voice of Chowgules',
    date: new Date('2022-05-31'),
    credits: 25,
    des:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    photo1:
      'https://th.bing.com/th/id/OIP.a6OsWPf4lUIgidIGxSPaMAHaD4?w=335&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    photo2:
      'https://th.bing.com/th/id/OIP.rJIEXLHTta29XX-UXmJ7bQHaHa?w=149&h=180&c=7&r=0&o=5&dpr=1.31&pid=1.7',
    department: 'College',
    type: 'activity',
  },
]
