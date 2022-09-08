import React from 'react';
import './Styling/WeekSchedule.css';
import '../App.css';

function WeekSchedule({ weeknumber, monday, tuesday, wednesday, thursday, friday }) {
    return (
        <div className='weekschedule-container'>
            <div className='weekschedule-container2'>
                <h1 className='weekschedule-header'>week {weeknumber}</h1>
                <p className='daily-program'>monday {monday}</p>
                <p className='daily-program'>tuesday {tuesday}</p>
                <p className='daily-program'>wednesday {wednesday}</p>
                <p className='daily-program'>thursday {thursday}</p>
                <p className='daily-program'>friday {friday}</p>
            </div>
        </div>
    );
}

export default WeekSchedule