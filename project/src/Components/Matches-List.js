import React, { useState } from 'react';
import Matches from './Matches';

const MatchesList = (props) => {

const [clickedIndex, setClickedIndex ] = useState();

const newIndex = (index) => {
  setClickedIndex(index);
};


return (
  <ul class="card mt-5 mx-3" style={{ backgroundColor: "whitesmoke" }}>
    {props.items.map((match, index) => (
      <li
        value={index}
        class="card my-1 p-2 mr-5 ml-3"
        style={{ display: "inline" }}
      >
        <Matches
          key={match.id}
          name={match.userName}
          result={match.result}
          champion={match.champion}
          date={match.date}
        />
        <div
          class="card d-inline"
          style={{ position: "absolute", right: "30px", top: "45px" }}
        >
          <button
            class="btn btn-warning mx-1"
            onClick={() => newIndex(index)}
            data-toggle="modal"
            data-target="#seeMatchModal"
          >
            Match info
          </button>

          <button
            class="btn btn-outline-danger mx-1"
            onClick={() => setClickedIndex(index)}
            data-toggle="modal"
            data-target="#deleteMatchModal"
          >
            Delete Match
          </button>
        </div>
      </li>
    ))}
    {/* DELETE MODAL */}
    <div
          class="modal fade"
          id="deleteMatchModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="deleteMatchModalLabel">
                  Are you sure ?
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => props.onDelete(clickedIndex)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* DELETE MODAL */}

    {/* SEE MATCH MODAL */}
{ (props.items) && (clickedIndex >= 0) && 
        <div
          class="modal fade"
          id="seeMatchModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="seeMatchModalLabel">
                  MATCH INFO
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="username">
                      Player Name: <h5>{(props.items[clickedIndex].userName)}</h5>
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">
                      Match Result: {(props.items[clickedIndex].result)}
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="champion">
                      Champion Selected: {(props.items[clickedIndex].champion)}
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="kills">Kills: {(props.items[clickedIndex].kills)}</label>
                  </div>
                  <div class="form-group">
                    <label for="damage">
                      Damage: {(props.items[clickedIndex].damage)}
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="heal">Heal: {(props.items[clickedIndex].heal)}</label>
                  </div>
                  <div class="form-group">
                    <label for="matchDate">
                      Match Date{(props.items[clickedIndex].date)}
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
}
        {/* SEE MATCH MODAL */}
  </ul>
  
);
}

export default MatchesList