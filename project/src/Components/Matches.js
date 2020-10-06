import React from 'react';

const Matches = (props) => {

    return (
     
          <div class="card m-3 w-75" style={{backgroundColor:"whiteSmoke", position: "static", left: "0px" }}>
            <div class="card-body d-inline">
              <h5 class="card-title d-inline p-4">Player: {props.name}</h5>
              <h5 class="card-title d-inline p-4">Result: {props.result}</h5>
              <h5 class="card-title d-inline p-4">Champion: {props.champion}</h5>
              <h5 class="card-title d-inline p-4">Match Date: {props.date}</h5>
            </div>
            
        </div>

    );
}

export default Matches;