import React from 'react';

const TeamItem =(props)=>{
  if(!props.team) return null;
  console.log(props.team);
  return(
    <div className='team-details'>
      <h3>{props.team.name}</h3>
      <h4>Founded in: {props.team.founded}</h4>
      <img src ={props.team.crestUrl} height = '200px' width='200px' atl = 'team-crest' ></img>
    </div>
  );
}

export default TeamItem;
