import React from 'react';
import '../App.css';
import './Styling/CourseInfo.css';
import SignUpForm from './SignUpForm';

function CourseInfo() {

    return (
        <div className='course-container'>
            <div className='content-layout'>
                <h1 className='course-header'>BEGINNERS COURSE</h1>
                <p className='text-field2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor nulla, dapibus in rhoncus at,
                    tincidunt et lectus. Donec cursus mollis lacinia. Pellentesque ut nisi ultrices, congue diam non,
                    ornare augue. Donec scelerisque luctus rutrum. Aenean ex nulla, vulputate quis vulputate nec, semper
                    vel mi. Etiam posuere eleifend dictum. Donec eu diam et ipsum tempor vehicula. Quisque vel nisi at metus dictum consectetur.
                    Mauris eu justo non turpis accumsan tempus a et quam. Suspendisse et iaculis risus. Sed ac mattis nisi. Vivamus ut purus nisi
                </p>
                <h2 className='form-header'>what are you waiting for?</h2>
                <SignUpForm />
            </div>
        </div>
    );
}

export default CourseInfo;