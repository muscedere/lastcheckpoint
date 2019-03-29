import React, { Component } from 'react';
import Element from './Element';
import './CardListAll.css';

class CardListAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/infos/")
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
          <h1 className='Text-Top'>What you can watch today...</h1>
          <div className='flex-container'>
            {this.state.lists.map(list => <Element key={list.id} id={list.id} name={list.name} photo={list.photo} category={list.category} description={list.description} year={list.year} name_actors={list.name_actors} />)}
          </div>
        </section>
      </div>
    );
  }
}

export default CardListAll;
