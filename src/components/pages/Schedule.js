import React from 'react';
import '../../App.css';
import WeekSchedule from '../WeekSchedule';

function Schedule() {
    const weeks = [{
        weeknumber: 1,
        monday: 'test',
        tuesday: 'test',
        wednesday: 'test',
        thursday: 'test',
        friday: 'test'
    },
    {
        weeknumber: 2,
        monday: 'test1',
        tuesday: 'test1',
        wednesday: 'test1',
        thursday: 'test1',
        friday: 'test1'
    },
    {
        weeknumber: 3,
        monday: 'test2',
        tuesday: 'test2',
        wednesday: 'test2',
        thursday: 'test2',
        friday: 'test2'
    },
    {
        weeknumber: 4,
        monday: 'test3',
        tuesday: 'test3',
        wednesday: 'test3',
        thursday: 'test3',
        friday: 'test3'
    }];
    return (
        <div>
            <ul>
                {weeks.map(week => (
                    <li> <WeekSchedule {...week} /> </li>
                ))}
            </ul>
        </div>
    );
}

export default Schedule;