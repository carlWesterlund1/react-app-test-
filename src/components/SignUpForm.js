import React from 'react'
import '../App.css';
import './Styling/SignUpForm.css';

import { useState } from 'react';

function SignUpForm() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [extraComment, setExtraComment] = useState();

    return (
        <div>
            <form className='signup-form'>
                <label htmlFor='first-name' className='form-label'>First name:</label>
                <br></br>
                <input
                    id='first-name'
                    className='small-text-input'
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                >
                </input><br></br>
                <label htmlFor='last-name' className='form-label'>Last name:</label>
                <br></br>
                <input
                    id='last-name'
                    className='small-text-input'
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                >
                </input><br></br>

                <label htmlFor='extra-comment' className='form-label'>extra comments</label>
                <br></br>
                <textarea
                    id='extra-comment'
                    className='large-text-input'
                    type="text"
                    value={extraComment}
                    onChange={(e) => setExtraComment(e.target.value)}
                >
                </textarea><br></br>
                <label htmlFor='is-student' className='form-label'>Are you a student?</label>
                <br></br>
                <select id='is-student'>
                    <option value='student'>Yes</option>
                    <option value='not student'>No</option>
                </select>
                <br></br>
                <button className='signup-btn'>Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm