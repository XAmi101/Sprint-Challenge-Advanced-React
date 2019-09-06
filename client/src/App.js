import React from 'react';
import './App.css';
import Player from './components/Player';
import Navbar from './components/NavBar'
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/api/players')
    .then(res => this.setState({players: res.data}))
    .catch(err => console.err("Error:", err));

};

 render() {
  return (
    <div className="App">

      <Navbar />
  {/* {this.state.soccerPlayers.map( (player) => {
    return <SoccerCardsMaker key={player.id} player={player} /> */}
      {this.state.players.map((player, index) => {
        return <Player {...player} key={index} />
      })}
    </div>
  );
}
}


export default App;
