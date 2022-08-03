
import './App.css';
import myImage from './photodaly.jpg';
import Particle from './component/Particle';
import React from 'react';

class App extends React.Component {
  state = {
    Person: {
      fullName: "Mohamed Ali Affes",
      bio: "Web",
      imgSrc: myImage,
      profession: "développeur web full stack"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className='main' >
<Particle/>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Naruto"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button className="button1" onClick={this.handleShowPerson}>click here</button>
     
      </div>
      
    );
  }
}
export default App;

