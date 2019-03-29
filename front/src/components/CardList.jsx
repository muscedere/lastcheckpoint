import React, { Component } from 'react';
import Element from './Element';
import './CardList.css';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
    this.fetchBestMovie=this.fetchBestMovie.bind(this);
  }

  componentDidMount(){
    this.fetchBestMovie()
  }

  fetchBestMovie() {
    fetch("http://localhost:3000/api/best")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          lists: data,
        });
      })
      .catch(error => {
        console.log("error", error);
      })
  }

  render() {
    return (
      <div>
        <section className="CardList">
          <h1 className='TextTop'>Our BEST selection of movies</h1>
          <div className='flex-container'>
            {this.state.lists.map(list => <Element key={list.id} id={list.id} name={list.name} photo={list.photo} category={list.category} description={list.description} year={list.year} name_actors={list.name_actors} />)}
          </div>
        </section>
      </div>
    );
  }
}

export default CardList;
