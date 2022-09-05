import React from 'react';
import './WeekSchedule.css';
import '../App.css';

function WeekSchedule({ weeknumber, monday, tuesday, wednesday, thursday, friday }) {
    return (
        <div className='weekschedule-container'>
            <h1 className='weekschedule-header'>week {weeknumber}</h1>
            <p>monday {monday}</p>
            <p>tuesday {tuesday}</p>
            <p>wednesday {wednesday}</p>
            <p>thursday {thursday}</p>
            <p>friday {friday}</p>
        </div>
    );
}

export default WeekSchedule