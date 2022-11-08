import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerC() 
{

  const [startDate, setStartDate] = useState(new Date());
  

  return (
    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
  )
}

export default DatePickerC;

