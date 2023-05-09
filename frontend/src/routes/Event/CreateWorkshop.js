import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import { formatDate } from "../utils/formatDate";

function Workshop(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [des, setDes] = useState("");
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [tchr, setTchr] = useState("");


  const [faculty, setFaculty] = useState([]);

  const formRef = useRef();

  useEffect(() => {
    const faculty_options = [{ value: "", text: "--Choose an option--" }];

    axios.get(props.path + "faculty").then((res) => {
      res.data.forEach((faculty) => {
        faculty_options.push({
          value: faculty.f_id,
          text: `${faculty.fname} ${faculty.lname}`,
        });
      });
      setFaculty(faculty_options);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "Title":
        setTitle(value);
        break;
      case "Date":
        setDate(value);
        break;
      case "Des":
        setDes(value);
        break;
      case "Faculty":
        setTchr(value);
        break;
      case "Photo1":
        setPhoto1(value);
        break;
        case "Photo2":
        setPhoto2(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(props.path + "post/workshop", {
        category :  title ,
        wdate : date, 
        des : des,
        photo1 : photo1 ,
        photo2 : photo2,
        f_id : tchr ,
      })
      .then((res) => {
        alert("Activity created successfully");
      });

    formRef.current.reset();
  };
  return (
    <div
    className="w-full  text-md text-gray-800 flex flex-col max-w-full
     py-10 px-10 min-h-screen ml-[253px]"
  >
    <div className="flex flex-col text-[30px] justify-center items-center p-4">
      Create a New Workshop
      <p className="p-2"></p>
      <form  className="w-1/2" ref={formRef} onSubmit={handleSubmit}>
        <div className="overflow-hidden shadow-xl shadow-blue-200 sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                onChange={handleChange}
                  type="text"
                  id="Title"
                  name="Title"
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                </input>
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  required
                onChange={handleChange}
                  type="date"
                  name="Date"
                  id="date"
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="faculty"
                  className="block text-sm font-medium text-gray-700">
                  Faculty
                </label>
                <select
                onChange={handleChange}
                  id="faculty"
                  name="Faculty"
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                  {faculty.map((faculty, id) => (
                    <option key={id} value={faculty.value}>
                      {faculty.text}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label
                  htmlFor="des"
                  className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  required
                onChange={handleChange}
                  type="text"
                  name="Des"
                  id="des"
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="photo1"
                  className="block text-sm font-medium text-gray-700">
                  Image 1
                </label>
                <input
                  required
                onChange={handleChange}
                  type="text"
                  name="Photo1"
                  id="photo1"
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="photo2"
                  className="block text-sm font-medium text-gray-700">
                  Image 2
                </label>
                <input
                  required
                onChange={handleChange}
                  type="text"
                  name="Photo2"
                  id="photo2"
                  className="mt-1 block w-full rounded-md border-2 border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Workshop;