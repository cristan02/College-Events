import logo from './logo.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import MainEvent from './routes/Home/MainEvent'
import SubEvent from './routes/Home/SubEvent'
import Events from './routes/Events'
import CreateMainEvent from './routes/Event/CreateMainEvent'
import CreateSubEvent from './routes/Event/CreateSubEvent'
import CreateActivity from './routes/Event/CreateActivity'
import CreateWorkshop from './routes/Event/CreateWorkshop'
import Filter from './routes/Event/Filter'
import Letter from './routes/Letter'
import Graph from './routes/Graph'
import Credit from './routes/Credit'
import AddSingle from './routes/Credit/AddSingle'

import Navbar from './components/Navbar'

function App() {

  const path = 'http://localhost:5000/'
  return (
    <div className="flex flex-row w-full ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home path={path}/>} />
        <Route path="/Home/MainEvent" element={<MainEvent path={path}/>} />
        <Route path="/Home/SubEvent" element={<SubEvent path={path}/>} />
        <Route path="/Events" element={<Events path={path}/>} />
        <Route path="/Event/CreateMainEvent" element={<CreateMainEvent path={path}/>} />
        <Route path="/Event/CreateSubEvent" element={<CreateSubEvent path={path}/>} />
        <Route path="/Event/CreateActivity" element={<CreateActivity path={path}/>} />
        <Route path="/Event/CreateWorkshop" element={<CreateWorkshop path={path}/>} />
        <Route path="/Event/Filter" element={<Filter path={path}/>} />
        <Route path="/Letter" element={<Letter path={path}/>} />
        <Route path="/Graph" element={<Graph path={path}/>} />
        <Route path="/Credit" element={<Credit path={path}/>} />
        <Route path="/Credit/AddSingle" element={<AddSingle path={path}/>} />
      </Routes>
    </div>
  )
}


export default App
