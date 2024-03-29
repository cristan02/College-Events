import React, { useEffect, useState, PureComponent } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

function Credit(props) {
  const [showModal, setShowModal] = useState(false)
  const closeModal = () => setShowModal(false)
  const openModal = () => setShowModal(true)
  
  const [departments, setDepartments] = useState([])

  const [selectedStud, setSelectedStud] = useState({})

  const [credits, setCredits] = useState()

  const handleUpdate = (e) => {
    e.preventDefault()
    const { fname, lname } = selectedStud
    axios
      .put(props.path + 'student/update/' + selectedStud.roll_no, {
        fname,
        lname,
      })
      .then((res) => {
        alert('Student details updated successfully')
        window.location.reload()
      })
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      axios.delete(props.path + 'student/delete/' + id).then((res) => {
        if (res.data) {
          alert('Deleted Scccessfully')
          window.location.reload()
        } else alert('Some Error has occured')
      })
    } else {
    }
  }

  const handleChange = (e) => {
    setSelectedStud({ ...selectedStud, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    axios.get(props.path + 'credits').then((res) => {
      setCredits(res.data)
    })
  }, [])
  return (
    <div
      className=" text-md text-gray-800 py-10 px-20 min-h-screen ml-[253px] flex flex-col  w-full"
    >
      <div className="text-black font-bold flex justify-between items-center">
        <div className="text-2xl p-2">
          Credits
        </div>
        <Link to="/Credit/AddSingle" className='w-fit'>
          <button className="bg-green-400 hover:bg-green-500  py-4 px-4  h-[30px] rounded-full font-semibold flex items-center justify-center w-fit mr-2">
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
      <p className='p-1'></p>

      <div className="grid grid-cols-6 bg-black text-white font-bold text-md boder">
        <div className="p-2 flex justify-center border-r">Roll No.</div>
        
        <div className="p-2 col-span-2 flex justify-center border-r">Full Name</div>
        
        <div className="p-2 flex justify-center border-r">Year Joined</div>
        
        <div className="p-2 flex justify-center border-r">Credit Hours</div>
        
        <div className="p-2 flex justify-center">Edit Details</div>
      </div>

      <div className="">
          {credits && credits.map((stud) => (
              <div className="grid grid-cols-6 border-b">
                
                <div className="py-2 flex justify-center border-x">{stud.roll_no}</div>
                
                <div className="py-2 px-4 col-span-2 border-r">{stud.fname} {stud.lname}</div>
                
                <div className="py-2 flex justify-center border-r">{stud.year_joined}</div>
                
                <div className="py-2 flex justify-center border-r">{stud.tot_credits}</div>
                
                <div className='py-2 flex justify-center border-r'>
                  <div className="">
                    <button
                      onClick={() => {
                        openModal()
                        setSelectedStud(stud)
                      }}
                      className="flex items-center justify-center text-white  py-1 px-2 rounded-full h-[30px] "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-blue-800"
                      >
                        <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z" />
                      </svg>
                    </button>
                  </div>

                  <div className="">
                    <button
                      onClick={() => {
                        handleDelete(stud.roll_no)
                      }}
                      className="flex items-center justify-center text-black  py-1 px-2 rounded-full h-[30px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="w-4 h-4 fill-red-500"
                      >
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                      </svg>
                    </button>
                  </div>
                </div>
            </div>
          ))}
      </div>

     
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-6 text-left">
                    <div className="text-center">Update Student Details</div>
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="">
                        <form
                          className="grid grid-cols-3 gap-6"
                          onSubmit={handleUpdate}
                        >
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="type"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First Name
                            </label>
                            <input
                              required
                              onChange={handleChange}
                              type="text"
                              id="Fname"
                              name="fname"
                              value={selectedStud.fname}
                              className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            ></input>
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="type"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last Name
                            </label>
                            <input
                              required
                              onChange={handleChange}
                              type="text"
                              name="lname"
                              value={selectedStud.lname}
                              id="lname"
                              className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            />
                          </div>

                          <div className="w-full flex justify-center ">
                            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                              Update
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default Credit

const credit = [
  { id: 1, fname: 'ashbourn', lname: 'dcunha', year_joined: 2020, hours: 1 },
  { id: 2, fname: 'moses', lname: 'Crastro', year_joined: 2020, hours: 2 },
  { id: 3, fname: 'reeve', lname: 'barretto', year_joined: 2020, hours: 3 },
  { id: 4, fname: 'elton', lname: 'john', year_joined: 2020, hours: 4 },
  { id: 5, fname: 'cassius', lname: 'dias', year_joined: 2020, hours: 5 },
]
