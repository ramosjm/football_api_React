import React, {Component} from 'react';
import TeamList from '../components/TeamList.js';
import TeamItem from '../components/TeamItem.js';

class TeamContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      teams: [],
      currentTeam: null
    };
    this.handleTeamSelected = this.handleTeamSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://api.football-data.org/v2/teams'
    const request = new XMLHttpRequest();
    request.open("GET",url);
    request.setRequestHeader("X-Auth-Token", "1114a790ee894270b8e106947b10de9b");
    request.addEventListener("load",()=>{
      if(request.status !==200) return;
      const jsonString = request.responseText;
      const teamList = JSON.parse(jsonString);
      this.setState({teams:teamList.teams})
    });
    request.send();
  }

  handleTeamSelected(index) {
  const selectedTeam = this.state.teams[index];
  this.setState({currentTeam: selectedTeam})
}

  render(){
    return(
      <div className = 'team-container'>
        <h1>Hello from TeamContainer</h1>
        <TeamList teams={this.state.teams} onTeamSelected={this.handleTeamSelected} />
        <TeamItem team= {this.state.currentTeam}/>
      </div>
    );
  }

}

export default TeamContainer;
