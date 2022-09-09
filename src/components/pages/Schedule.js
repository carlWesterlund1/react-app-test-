import React from 'react';
import '../../App.css';
import WeekSchedule from '../WeekSchedule';

function Schedule() {
    const weeks = [{
        weeknumber: 1,
        monday: ['monday', 'program1.1'],
        tuesday: ['tuesday', 'program1.2'],
        wednesday: ['wednesday', 'program1.3'],
        thursday: ['thursday', 'program1.4'],
        friday: ['friday', 'program1.5']
    },
    {
        weeknumber: 2,
        monday: ['monday', 'program2.1'],
        tuesday: ['tuesday', 'program2.2'],
        wednesday: ['wednesday', 'program2.3'],
        thursday: ['thursday', 'program2.4'],
        friday: ['friday', 'program2.5']
    },
    {
        weeknumber: 3,
        monday: ['monday', 'program3.1'],
        tuesday: ['tuesday', 'program3.2'],
        wednesday: ['wednesday', 'program3.3'],
        thursday: ['thursday', 'program3.4'],
        friday: ['friday', 'program3.5']
    },
    {
        weeknumber: 4,
        monday: ['monday', 'program4.1'],
        tuesday: ['tuesday', 'program4.2'],
        wednesday: ['wednesday', 'program4.3'],
        thursday: ['thursday', 'program4.4'],
        friday: ['friday', 'program4.5']
    },
    ];
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