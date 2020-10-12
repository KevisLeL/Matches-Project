import React, { useState } from 'react';

const Filter = (props) => {
  const [ userName, setUsername ] = useState('');
  const [ date, setDate ] = useState('');


    return (
      <div class="card" style={{width: "18rem", backgroundColor: "whiteSmoke"}}>
      <div class="card-body">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="Username">
              Username
            </span>
          </div>
          <input
            id= 'Username'
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="Username"
            value={userName}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="Date">
              Date
            </span>
          </div>
          <input
            id= 'Date'
            type="text"
            class="form-control"
            placeholder="Date"
            aria-label="Date"
            aria-describedby="Date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
              <button class="btn btn-warning float-right" onClick={() => props.onFilter(userName, date)}>
                  FILTER
              </button>
          </div>
      </div>
    </div>
    );
};

export default Filter;