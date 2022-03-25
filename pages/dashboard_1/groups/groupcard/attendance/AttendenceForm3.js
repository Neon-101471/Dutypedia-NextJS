import React, { useEffect, useState } from "react";
import newFakeData from './newFakeData.json';
const AttendenceForm3 = () => {

  return (
    <div>
      <div className='attendence-form-table mt-5 '>
        <div className='attendance-table-head-new'>
          <div className='d-flex'>
            <div className='head-name'>
              <div className=''>
                <p className='pt-3 ps-5 ms-3'>Name</p>
              </div>
            </div>
            <div className='head-subject'>
              <div className='pt-3'>
                <small className='d-flex align-items-center'>
                  {/* <AiFillClockCircle /> */}
                  Attendence Time 12:45PM
                </small>
              </div>
              <div className='px-5 math1'>
                <div className='w-25'>English</div>
                <div className='d-flex align-items-center justify-content-center'>
                  <div
                    style={{
                      backgroundColor: "white",
                      color: "gray",
                      borderRadius: "5px",
                    }}
                    className='attendence-incomplete'
                  >
                    Attendence Running
                  </div>
                </div>
              </div>
              <span style={{ fontSize: "13px", marginTop: "29px" }}>0/50</span>
            </div>
            <div className='head-date'>
              <div className='pt-3'>
                <p>Sat, 12 Th Sep 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className='attendence-form-table-body'>
          {newFakeData.map((attendence) => (
            <div className='att-table-details'>
              <div className='att-table-person'>
                <div className='att-table-image'>
                  <img src={`${attendence.img}`} alt='' />
                </div>
                <div className='person-info'>
                  <p className='mb-0'>{attendence.name}</p>
                  <small>{attendence.id}</small>
                </div>
              </div>

              <div className='att-table-status'>
                <div className='table-status'>
                  <span>P</span>
                  <span>A</span>
                  <span>L</span>
                </div>
              </div>

              <div className='att-point-and-percentage'>
                <div className='point'>
                  <span>Point</span>
                  <span>{attendence.point}</span>
                </div>
                <div className='percentage'>
                  <span>Percentage</span>
                  <span>{attendence.percentage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendenceForm3;
