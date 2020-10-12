import React, { useState } from 'react';

const AddMatch = (props) => {

    const [addName, setAddName] = useState();
    const [addChampion, setAddChampion] = useState();
    const [addKills, setAddKills] = useState();
    const [addDamage, setAddDamage] = useState();
    const [addHeal, setAddHeal] = useState();
    const [addDate, setAddDate] = useState();

    return (
        <React.Fragment>
        <div>
        <button
          class="btn btn-info float-right"
          data-toggle="modal"
          data-target="#addMatchModal"
        >
          Add Match
        </button>

        {/* ADD MATCH MODAL */}
        <div
          class="modal fade"
          id="addMatchModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addMatchModalLabel">
                  ADD MATCH
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
                    <label for="username">Player Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="usernameInput"
                      placeholder="Username"
                      value={addName}
                      onChange={(event) => setAddName(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Match Result</label>
                    <select class="form-control" id="resultInput">
                      <option>WIN</option>
                      <option>LOSE</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="champion">Champion Selected</label>
                    <input
                      type="text"
                      class="form-control"
                      id="championInput"
                      placeholder="Champion´s Name"
                      value={addChampion}
                      onChange={(event) => setAddChampion(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="kills">Kills</label>
                    <input
                      type="number"
                      class="form-control"
                      id="killsInput"
                      placeholder=""
                      value={addKills}
                      onChange={(event) => setAddKills(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="damage">Damage</label>
                    <input
                      type="number"
                      class="form-control"
                      id="damageInput"
                      placeholder="Damage"
                      value={addDamage}
                      onChange={(event) => setAddDamage(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="heal">Heal</label>
                    <input
                      type="number"
                      class="form-control"
                      id="healInput"
                      placeholder=""
                      value={addHeal}
                      onChange={(event) => setAddHeal(event.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="matchDate">Match Date</label>
                    <input
                      type="date"
                      class="form-control"
                      id="dateInput"
                      placeholder="Date"
                      value={addDate}
                      onChange={(event) => setAddDate(event.target.value)}
                    />
                  </div>
                </form>
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
                  type="button"
                  class="btn btn-primary"
                  onClick={()=> props.add()}
                  data-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ADD MATCH MODAL */}
      </React.Fragment>
    )
};

export default AddMatch;