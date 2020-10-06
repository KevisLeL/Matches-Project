import React, { useEffect, useState } from 'react';
import Matches from '../Components/Matches';
//import Filter from '../Components/Filter';



const MatchesPage = () => {
  
  const [matches, setMatches] = useState([]);
  const [addName, setAddName] = useState();
  const [addChampion, setAddChampion] = useState();
  const [addKills, setAddKills] = useState();
  const [addDamage, setAddDamage] = useState();
  const [addHeal, setAddHeal] = useState();
  const [addDate, setAddDate] = useState();
  
  const [seeName, setSeeName] = useState();
  const [seeChampion, setSeeChampion] = useState();
  const [seeResult, setSeeResult] = useState();
  const [seeKills, setSeeKills] = useState();
  const [seeDamage, setSeeDamage] = useState();
  const [seeHeal, setSeeHeal] = useState();
  const [seeDate, setSeeDate] = useState();
  
  const [clickedIndex, setClickedIndex ] = useState();
  const [ userName, setUsername ] = useState('');
  const [ date, setDate ] = useState('');
  
    
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const responseData = await fetch(
          "http://localhost:5000/api/"
          ).then((resp) => resp.json());
          setMatches(responseData.matches);
      } catch(err) {
        console.log(err);
      }
      };
      fetchMatches();
    },[])

    const filteredMatches = async () => {
      
        try {
          let url = new URL('http://localhost:5000/api/')
          url.search = new URLSearchParams({
            userName,
            date
        })
          const responseData = await fetch(url).then((resp) => resp.json());
             console.log(responseData.matches)
             setMatches(responseData.matches);

           } catch (err) {
        console.log(err);
      }
    }
    
  const seeMatch = (index) => {
    setSeeName(matches[index].userName);
    setSeeChampion(matches[index].champion);
    setSeeResult(matches[index].result);
    setSeeKills(matches[index].kills);
    setSeeDamage(matches[index].damage);
    setSeeHeal(matches[index].heal);
    setSeeDate(matches[index].date);
  };
  
  
  const addMatch = async (event) => {
    event.preventDefault();
    
    try {
      const addedMatch = await fetch('http://localhost:5000/api/match', {
        method: 'POST',
        body: JSON.stringify({
          userName: document.getElementById("usernameInput").value,
          result: document.getElementById("resultInput").value,
          champion: document.getElementById("championInput").value,
          kills: document.getElementById("killsInput").value,
          damage: document.getElementById("damageInput").value,
          heal: document.getElementById("healInput").value,
          date: document.getElementById("dateInput").value,
        }),
        headers: {
          'Content-Type': "application/json"
        }
      } ).then((resp) => resp.json());
    console.log(matches.length);
    matches.push(addedMatch.match);
     const addedMatches = matches;
     setMatches(addedMatches);
     console.log(matches.length);
     console.log(matches);
    } catch (err) {
      console.log(Error);
    }
    
  };
  
  const deleteMatch = async (index) => {

    let selectedMatch = matches[index].id;
    await fetch(`http://localhost:5000/api/match/${selectedMatch}`, {
      method: "DELETE",
    });

    var newMatches = matches.filter(function (match) {
      return match.id !== matches[index].id;
    });
    setMatches(newMatches);

  };

  return (
    <React.Fragment>
      {/* FILTER */}
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
                <button class="btn btn-warning float-right" onClick={() => filteredMatches()}>
                    FILTER
                </button>
            </div>
        </div>
      </div> 
      {/* FILTER */}
{/* <Filter items={matches}/> */}
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
                  onClick={addMatch}
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

      <ul class="card mt-5 mx-3" style={{ backgroundColor: "whitesmoke" }}>
        {matches.map((match, index) => (
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
                data-toggle="modal"
                data-target="#seeMatchModal"
                onClick={() => seeMatch(index)}
              >
                Match info
              </button>

              <button
                class="btn btn-outline-danger mx-1"
                onClick={() => (setClickedIndex(index))}
                data-toggle="modal"
                data-target="#deleteMatchModal"
              >
                Delete Match
              </button>
            </div>
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
                      onClick={() => deleteMatch(clickedIndex)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* DELETE MODAL */}
            {/* SEE MATCH MODAL */}
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
                        <label for="username">Player Name: {seeName}</label>
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">
                          Match Result: {seeResult}
                        </label>
                      </div>
                      <div class="form-group">
                        <label for="champion">
                          Champion Selected: {seeChampion}
                        </label>
                      </div>
                      <div class="form-group">
                        <label for="kills">Kills: {seeKills}</label>
                      </div>
                      <div class="form-group">
                        <label for="damage">Damage: {seeDamage}</label>
                      </div>
                      <div class="form-group">
                        <label for="heal">Heal: {seeHeal}</label>
                      </div>
                      <div class="form-group">
                        <label for="matchDate">Match Date{seeDate}</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* SEE MATCH MODAL */}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default MatchesPage;