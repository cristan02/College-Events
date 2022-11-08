import logo from './logo.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import MainEvent from './routes/Home/MainEvent'
import SubEvent from './routes/Home/SubEvent'
import Events from './routes/Events'
import CreateMainEvent from './routes/Event/CreateMainEvent'
import CreateSubEvent from './routes/Event/CreateSubEvent'
import Filter from './routes/Event/Filter'
import Letter from './routes/Letter'
import Graph from './routes/Graph'
import Credit from './routes/Credit'
import AddSingle from './routes/Credit/AddSingle'
import AddMultiple from './routes/Credit/AddMultiple'

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex flex-row w-full ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/MainEvent" element={<MainEvent />} />
        <Route path="/Home/SubEvent" element={<SubEvent />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Event/CreateMainEvent" element={<CreateMainEvent />} />
        <Route path="/CreateSubEvent" element={<CreateSubEvent />} />
        <Route path="/Event/Filter" element={<Filter />} />
        <Route path="/Letter" element={<Letter />} />
        <Route path="/Graph" element={<Graph />} />
        <Route path="/Credit" element={<Credit />} />
        <Route path="/Credit/AddSingle" element={<AddSingle />} />
        <Route path="/Credit/AddMultiple" element={<AddMultiple />} />
      </Routes>
    </div>
  )
}

export default App
