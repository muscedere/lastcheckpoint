import React, { Component } from 'react';
import Slider from './Slider';
import CardList from './CardList';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="color">
        <Slider />
        <br></br>
        <p className='TextMove'><span className='TextMovie'>A Star Is Born (2018)</span>  A Star Is Born is a 2018 American musical romantic drama film produced and directed by Bradley Cooper (in his directorial debut) and written by Eric Roth, Cooper and Will Fetters.</p>
        <p><span className='TextMovie'>The story :</span>It's a remake of the 1937 film of the same name, it stars Cooper, Lady Gaga, Dave Chappelle, Andrew Dice Clay, and Sam Elliott, and follows a hard-drinking musician (Cooper)<br></br> who discovers and falls in love with a young singer (Gaga). It marks the third remake of the original 1937 film, after the 1954 musical and the 1976 musical.</p>
        <CardList />
      </div>
    );
  }
}

export default Home;