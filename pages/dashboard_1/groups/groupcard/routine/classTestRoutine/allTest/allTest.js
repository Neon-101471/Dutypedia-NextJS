import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';

const allTest = () => {
    const [weekday, setWeekDay] = useState([
        '2nd Test',
        '3rd Test',
        '4th Test',
        '5th Test',
        '6th Test',
        '7th Test',
        '8th Test '
    ]);
    const [completed, setCompleted] = useState([
        ' ',
        ' ',
        'This Test is completed ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' '
    ]);
    return (
        <Wrapper style={{ width: '85%', margin: 'auto' }}>
            <h3>Class 10 Test</h3>
            {/* test btn */}
            <div className="d-flex">
                <div className=" btn-bootom pb-5 me-4">
                    <button className="cmnBtn test-btn me-4">All Test</button>
                </div>
                <div className=" btn-bootom pb-5">
                    <button className="cmnBtn test-btn me-4">Upcoming Test</button>
                </div>
                <div className=" btn-bootom pb-5">
                    <button className="cmnBtn test-btn me-4">Completed Test</button>
                </div>
                <div className=" btn-bootom pb-5 test-btn me-4">
                    <button className="cmnBtn test-btn">Create New Test</button>
                </div>
            </div>

            {/* table */}

            <div className="custom-table-container">
                <table className="workout-table">
                    <thead>
                        <th>
                            <td className="text-start">
                                Sl No 1 <span className="ms-3">Topic Name</span>
                            </td>
                            <td>1st Test</td>
                            {weekday.map((day, index) => (
                                <td key={index}>{day}</td>
                            ))}
                        </th>
                    </thead>
                    <tbody className='table-body'>
                        {/* table row one */}
                        {Array.from({ length: 9 }).map((_, idx) => (
                            <tr>
                                <td>Date</td>
                                <td>hello</td>

                                {weekday.map((day, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* delete update btn */}
            <div className="user-edit-input ">
                <div className="d-flex justify-content-end">
                    <i id="edit-class-routine" className="me-2" title="Edit Input">
                        <FaEdit />
                    </i>
                    <i id="delete-class-routine" className="" title="Remove Row">
                        <FaTrashAlt />
                    </i>
                </div>
            </div>

            {/* second table */}
            <div className="custom-table-container">
                <table className="workout-table">
                    <thead>
                        <th>
                            <td className="text-start">
                                Sl No 1 <span className="ms-3">Topic Name</span>
                            </td>
                            <td>1st Test</td>
                            {weekday.map((day, index) => (
                                <td key={index}>{day}</td>
                            ))}
                        </th>
                    </thead>
                    <tbody>
                        {/* table row one */}
                        {Array.from({ length: 9 }).map((_, idx) => (
                            <tr>
                                <td>Date</td>
                                <td>hello</td>

                                {weekday.map((day, index) => (
                                    <td key={index}></td>
                                ))}
                            </tr>
                        ))}
                        <th className='status-change'>
                            
                            {completed.map((status, index) => (
                                <td >{status}</td>
                            ))}
                        </th>
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
};

export default allTest;

const Wrapper = styled('div')`
    /* test btn */
    .test-btn {
        width: 231px !important;
        height: 66px !important;
    }
    /* after creating routine styles start */
    .workout-table {
        margin-bottom: 40px;
        color: #666;
    }
    .workout-table th {
        color: #fff;
        white-space: nowrap;
        border-radius: 15px 15px 0 0;
        font-size: 18px;
        position: sticky;
        top: 0;
    }
    .workout-table th td {
        padding: 12px 20px;
        background-color: #e22424;
        height: 60px;
    }
    .workout-table th td:first-child {
        border-top-left-radius: 15px;
    }
    .workout-table th td:last-child {
        border-top-right-radius: 15px;
    }
    .status-change td:first-child{
        border-bottom-left-radius: 15px !important;
        border-top-left-radius: unset !important;
    }
    .status-change td:last-child{
        border-bottom-right-radius: 15px !important;
        border-top-right-radius: unset !important;
    }

    .workout-table th td,
    .workout-table tr td {
        width: 228px;
        display: inline-block;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    .workout-table tr:first-child {
        border-top: none;
    }
    .workout-table tr:first-child td {
        padding: 5px;
        height: 70px;
        border: 1px solid #c7c7c7;
        border-top: none;
        border-bottom: 0;
        border-right: 0;
    }
    /* .workout-table tr:first-child td:first-child {
        border-bottom: 0;
    } */
    .workout-table tr:nth-child(2) td:first-child {
        border-top: 1px solid #c7c7c7;
    }
    .workout-table tr td {
        border: 1px solid #c7c7c7;
        height: 70px;
        padding: 5px;
        display: inline-flex;
        align-items: center;
        border-bottom: 0;
        border-right: 0;
    }
    .workout-table tr td:first-child {
        border-left: 1px solid #c7c7c7;
    }
    .workout-table tr td:last-child {
        border-right: 1px solid #c7c7c7;
    }
    .workout-table tr:last-child td {
        border-bottom: 1px solid #c7c7c7;
    }
    i {
        color: #666;
    }
    .CheckBox__Wrapper-sc-1vre3qs-0 {
        margin-left: -129px;
        margin-top: 29px;
    }
    .date {
        display: flex;
        border: 1px solid rgb(220, 14, 14);
        position: relative;
        border-radius: 8px;
    }
    .per-day {
        margin-bottom: 27px;
        margin-top: 19px;
    }
`;
