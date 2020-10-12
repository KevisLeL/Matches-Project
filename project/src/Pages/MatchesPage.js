import React, { useEffect, useState } from 'react';
import Filter from '../Components/Filter';
import MatchesList from '../Components/Matches-List';
import AddMatch from '../Components/AddMatch';

const MatchesPage = () => {
  
  const [matches, setMatches] = useState([]);

    
      //Añadir IF para evitar crash por no repsuesta de server
      const fetchMatches = async () => { 
        try {
          const responseData = await fetch(
            "http://localhost:5000/api/"
            ).then((resp) => resp.json());
            setMatches(responseData.matches);
          } catch(err) {
            alert('Something went wrong, please try again')
            console.log(err);
          }
        };
       
        useEffect(()=> {
          
          fetchMatches();

      }, [])
  
  const addMatch = async () => {
    
    try {
      await fetch('http://localhost:5000/api/match', {
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
      } ).then(() => fetchMatches())

    } catch (err) {
      console.log(Error);
      return alert('Some input was wrong. Please check and try again')
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

  const filteredMatches = async (userName, date) => {
      
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

  return (
    <React.Fragment>
      
    <Filter items={matches} onFilter = {filteredMatches}/>

    <AddMatch items={matches} add={addMatch}/>

    <MatchesList items={matches} onDelete ={deleteMatch} />
    </React.Fragment>
  );
}

export default MatchesPage;