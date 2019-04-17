import React from 'react';

const TeamList = (props) =>{
  if (props.teams == null || props.teams.length === 0) {
  return <p>Loading...</p>;
  };
  const teams = props.teams.map((team, index) => {
    return <option value={index} key={index}>{team.name}</option>
  });

  console.log(props);

  function handleChange(event){
    props.onTeamSelected(event.target.value);
  }

  return(

    <div className = 'team-list'>
      <h2>Hello from TeamList</h2>
      <select id="team-selector" onChange={handleChange} defaultValue="default">
        <option disabled value="default">Choose a team...</option>
        { teams }
      </select>
    </div>
  );
}


export default TeamList;
