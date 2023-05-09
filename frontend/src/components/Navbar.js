import React from 'react'
import { Link } from 'react-router-dom'

import { useLocation } from "react-router-dom";

function Navbar() {
 
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="fixed text-gray-800 px-1 bg-white">
      <div className="w-[250px] min-h-screen h-full border-r-2 py-2">
        <div className="flex items-center py-4 px-1">
          <img src="../logo.png" className="w-8"></img>
          <div className="px-2 text-lg font-bold">PCCAS</div>
        </div>

        <p className="p-0"></p>

        <ul className="first-line:flex flex-col list-none  text-gray-800 justify-left px-1 ">
          <li className={splitLocation[1] === "" ? "nav-item transition ease-in-out decoration-black decoration-2 py-3 hover:rounded px-2 text-sm  bg-blue-100" : "nav-item transition ease-in-out decoration-black decoration-2 hover:bg-gray-100 py-3 hover:rounded px-2 text-sm  active:bg-blue-100"  }>
            <Link to="/" className='no-underline'>
              <div className="flex flex-row items-center">
                <svg
                  className="w-5 h-5 fill-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z" />
                </svg>
                <span className="px-3">Home</span>
              </div>
            </Link>
          </li>

          <li className={splitLocation[1] === "Events" || splitLocation[1] === "Event" ? "nav-item transition ease-in-out decoration-black decoration-2 py-3 hover:rounded px-2 text-sm  bg-blue-100" : "nav-item transition ease-in-out decoration-black decoration-2 hover:bg-gray-100 py-3 hover:rounded px-2 text-sm  active:bg-blue-100"  }>
            <Link to="/Events">
              <div className="flex flex-row items-center">
                <svg
                  className="w-5 h-5 fill-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>
                <span className="px-3">Events</span>
              </div>
            </Link>
          </li>

          <li className={splitLocation[1] === "Letter" ? "nav-item transition ease-in-out decoration-black decoration-2 py-3 hover:rounded px-2 text-sm  bg-blue-100" : "nav-item transition ease-in-out decoration-black decoration-2 hover:bg-gray-100 py-3 hover:rounded px-2 text-sm  active:bg-blue-100"  }>
            <Link to="/Letter">
              <div className="flex flex-row items-center">
                <svg
                  className="w-5 h-5 fill-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm0 184c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16zM160 400c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>
                <span className="px-3">Generate Letters</span>
              </div>
            </Link>
          </li>

          {/* <li className={splitLocation[1] === "Letter" ? "nav-item transition ease-in-out decoration-black decoration-2 py-3 hover:rounded px-2 text-sm  bg-blue-100" : "nav-item transition ease-in-out decoration-black decoration-2 hover:bg-gray-100 py-3 hover:rounded px-2 text-sm  active:bg-blue-100"  }>
            <Link to="/Letter">
              <div className="flex flex-row items-center">
                <svg
                  className="w-5 h-5 fill-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
                </svg>
                <span className="px-3">Departmental performance</span>
              </div>
            </Link>
          </li> */}



          <li className={splitLocation[1] === "Graph" ? "nav-item transition ease-in-out decoration-black decoration-2 py-3 hover:rounded px-2 text-sm  bg-blue-100" : "nav-item transition ease-in-out decoration-black decoration-2 hover:bg-gray-100 py-3 hover:rounded px-2 text-sm  active:bg-blue-100"  }>
            <Link to="/Graph">
              <div className="flex flex-row items-center">
                <svg
                  className="w-5 h-5 fill-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
                </svg>
                <span className="px-3">Graphs</span>
              </div>
            </Link>
          </li>

          <li className={splitLocation[1] === "Credit" ? "nav-item transition ease-in-out decoration-black decoration-2 py-3 hover:rounded px-2 text-sm  bg-blue-100" : "nav-item transition ease-in-out decoration-black decoration-2 hover:bg-gray-100 py-3 hover:rounded px-2 text-sm  active:bg-blue-100"  }>
            <Link to="/Credit">
              <div className="flex flex-row items-center">
                <svg
                  className="w-5 h-5 fill-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <span className="px-3">Credit Hours</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
