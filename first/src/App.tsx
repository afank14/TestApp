import React from 'react';
import './App.css';

// Define what the Band Properties are going to look like
interface BandProps {
  name: string;
  members: string;
  formed: number;
}

const bandNames = [
  {
    name: 'The Beastie Boys',
    members: 'Ad Rock, MCA, Mike D',
    formed: 1979,
  },
  {
    name: 'Wolfmother',
    members: 'Andrew Stockdale, Hamish Rosser, Bobby Poulton',
    formed: 2004,
  },
  {
    name: 'Cream',
    members: 'Eric Clapton, Jack Bruce, Ginger Baker',
    formed: 1966,
  },
  {
    name: 'Nirvana',
    members: 'Kurt Cobain, Dave Groul, Krist Novoselic',
    formed: 1987,
  },
];

function Welcome() {
  return (
    <div>
      <h1>The Best Music Trios Ever</h1>
      <h3>According to Professor Hilton</h3>
    </div>
  );
}

class Band extends React.Component<BandProps> {
  render() {
    const oneBand = this.props;
    return (
      <div>
        <img />
        <h2>{oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {/* <Band {...bandNames[0]} />
      <Band {...bandNames[1]} />
      <Band {...bandNames[2]} /> */}

      {bandNames.map((oneBand) => (
        <Band {...oneBand} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
