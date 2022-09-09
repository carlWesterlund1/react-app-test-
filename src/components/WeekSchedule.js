import React, { useState } from 'react';
import './Styling/WeekSchedule.css';
import '../App.css';

function WeekSchedule({ weeknumber, monday, tuesday, wednesday, thursday, friday }) {
    const [isShown, setIsShown] = useState(false);
    const [dayHoveredOver, setDayHoveredOver] = useState();
    const days = [monday, tuesday, wednesday, thursday, friday];
    const RenderDays = (daysList) => {
        return (
            <ul>
                {daysList.map(day => (
                    <p
                        className='daily-program'
                        onMouseEnter={function () {
                            setIsShown(true);
                            setDayHoveredOver(day);
                        }}
                        onMouseLeave={function () {
                            setIsShown(false);
                        }}
                    >{day[0]}
                    </p>
                ))}
            </ul>
        );
    };

    return (
        <div className='weekschedule-container'>
            <div className='weekschedule-container2'>
                <h1 className='weekschedule-header'>Week {weeknumber}</h1>
                {RenderDays(days)}
                {isShown && (
                    <div className='program-info'>
                        <p>{dayHoveredOver[1]}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeekSchedule