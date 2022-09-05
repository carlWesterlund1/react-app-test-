import React from 'react';
import '../App.css';
import './CourseInfo.css';

function CourseInfo() {
    return (
        <div className='course-container'>
            <h1 className='course-header'>BEGINNERS COURSE</h1>
            <h2 className='form-header'>what are you waiting for?</h2>
            <form>
                <label for="fname" className='input-label'>First name:</label>
                <input type="text"></input><br></br>
                <label for="fname" className='input-label'>Last name:</label>
                <input type="text"></input><br></br>
                <button className='sign-up-button'>Sign up</button>
            </form>
        </div>
    );
}

export default CourseInfo;