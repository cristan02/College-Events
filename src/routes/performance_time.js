import React, { useEffect, useState , PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , PieChart, Pie, Sector, Cell } from 'recharts';

function Graph() 
{

  const [selectdept , setSelectDept] = useState([]);
  const [dept , setDept] = useState([]);
  const getDept = (e) => {
    setSelectDept(e.target.value);
  };

  const [data , setData] = useState();

  const [type , setType] = useState('yearly');
  const [graph , setGraph] = useState(0);

  const setDate = (e) => {
      setType(e.target.value)
  };

  const selectGraph = (e) => {
    if (e.target.value == 'line'){
      setGraph(1);
      setType(0);
      document.getElementById('yearly').checked = true;
    }  
    else {
      setGraph(0);
    }
  }

  useEffect(() => {
    setDept(department);
    setData(deptdata);
  })

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042' , '#3f3f3f'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  };
  return (
    <div
      className="w-full  text-md text-gray-800 flex flex-col max-w-full
       py-10 px-10 min-h-screen ml-[253px]"
    >

      <div className='flex justify-center text-xl p-2'>
          <div className=''><b>DepartMental Performances</b></div>
                <select className='pr-1' onChange={getDept}>
                  { department.map((dept)=>(
                    <option value={dept}>{dept}</option>
                  ))}
                </select>
      </div>

      <p className='p-1'></p>

      <div className='w-full flex justify-between font-semibold px-80'>
        <div className='flex '>
          <input id='yearly' onClick={setDate} type="radio" value={0} name="date"/>
          <div className='px-1'>Yearly</div>
          <p className='p-2'></p>
          <input disabled={graph ? true : false} type="radio" onClick={setDate} value={1} name="date"/> <div className='px-1'>Montly</div>
        </div>

        <div className='flex '>
          <input onClick={selectGraph} type="radio" value="bar" name="graph"/>
          <div className='px-1'>Bar</div>
          <p className='p-2'></p>
          <input type="radio" onClick={selectGraph} value="line" name="graph"/> <div className='px-1'>Line</div>
        </div>
      </div>


      <div className='w-full h-full flex items-center justify-center'>
          <div className=' w-[600px] h-[380px] rounded-lg py-8 pt-10 px-4'>
          {
            data ?

            graph ? 
            <ResponsiveContainer width="100%" height="100%">
            <PieChart width="400" height="400">
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                
              >
                {data && data.map((entry, index) => (
                  <Cell key={`cell-${index}`}  fill={COLORS[index % COLORS.length]} />
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
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="value" fill="crimson" background={{ fill: '#eee' }} />
            </BarChart>
            </ResponsiveContainer>  

            : 

            <div></div>
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
  {name: 'Computer science', value : 3}, 
  {name: 'Chemistry', value : 2}, 
  {name: 'English', value : 5}, 
  {name: 'Bio chem', value : 8}, 
  {name: 'Psycology', value : 9}, 
]