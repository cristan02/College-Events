import React, { useEffect, useState , PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , PieChart, Pie, Sector, Cell } from 'recharts';

import axios from "axios";

function Graph(props) 
{
  const [data , setData] = useState()

  const [type , setType] = useState('yearly')
  const [graph , setGraph] = useState(0)

  const selectGraph = (e) => {
    if (e.target.value == 1){
      setGraph(1);
      // setType('yearly');
    }  
    else {
      setGraph(0);
    }
  }

  useEffect(() => {
    getData()
  },[type])

  useEffect(() => {    
    getData()
  },[])


  const getData = () => {
    let tempdata = []
    axios.get(props.path + "graph/"+type).then((res) => {
      res.data.forEach((data) => {
        tempdata.push({
          name : data.name,
          d_initials : data.d_initials,
          value : parseInt(data.value)
        })
      })
      setData(tempdata)
    }) 
  }


  const COLORS = ['#0088FE','#00C49F','#FFBB28','#FF8042','#FF42A6','#BA42FF','#42F6FF','#FF5342','#FFFF50','#92FF50',    '#FF5050','#FF5050','#122771','#127154','#410D59','#217E42','#737F3A','#FFD15F','#F86200','#E49797']
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  

  return (
    <div
      className="w-full  text-md text-gray-800 flex flex-col max-w-full
       py-10 px-10 min-h-screen ml-[253px]"
    >

      <div className='flex justify-center text-xl p-2'>
          <div className=''><b>Departmental Performances</b></div>
                
      </div>

      <p className='p-6'></p>

      <div className='w-full flex justify-between font-semibold px-80'>
        <div className='flex '>
          <input id='yearly' onClick={(e)=>{setType(e.target.value)}} type="radio" value='yearly' name="date" checked={type === 'yearly' ? true : false}/>
          <div className='px-1'>Yearly</div>
          <p className='p-2'></p>
          <input  type="radio" onClick={(e)=>{setType(e.target.value)}} value='montly' name="date" checked={type === 'montly' ? true : false}/> <div className='px-1'>Montly</div>
        </div>

        <div className='flex '>
          <input onClick={selectGraph} type="radio" value={0} name="graph" checked={graph ? false : true}/><div className='px-1'>Bar</div>
          <p className='p-2'></p>
          <input type="radio" onClick={selectGraph} value={1} name="graph" checked={graph ? true : false}/><div className='px-1'>Pie</div>
        </div>
      </div>


      <div className='w-full h-full flex items-center justify-center '>
          <div className=' min-w-[600px] h-[380px] rounded-lg py-8 pt-10 px-4 flex items-center bg-gray-900'>
          {
            data ?

            graph ? 
            <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={130}
                fill="#8884d8"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>  
          
            
            : <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 40,
                left: 15,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis dataKey="d_initials" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis/>
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="value" fill="#DE6C83" background="{{ fill: '#eee' }}" />
            </BarChart>
            </ResponsiveContainer>  

            : 

            <div className='text-white'>loading...</div>
          }
          </div>
      </div>
        
    </div>
  )
}

export default Graph;

const department = [
  "Computer Science" , "Chemistry" , "Physics" , "Maths"
]

const backgroundColor = ["green","red","yellow","pink","brown","orange","cyan","purple","aqua","coral","crimson","burlywood"]


const deptdata = [
  {
  "value": 16,
  "name": "Computer Science"
  },
  {
  "value": 6,
  "name": "Chemistry"
  },
  {
  "value": 16,
  "name": "Botany"
  },
  {
  "value": 1,
  "name": "Sociology"
  },
  {
  "value": 9,
  "name": "Psychology"
  },
  {
  "value": 1,
  "name": "French"
  },
  {
  "value": 1,
  "name": "History"
  }
  ]