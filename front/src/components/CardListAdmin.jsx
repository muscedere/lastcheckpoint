import React, { Component } from 'react';
import ElementAdmin from './ElementAdmin';
import './CardListAdmin.css';

class CardListAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/infos")
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
          <h1 className='TextTop'>Administrator section</h1>
          <div className='flex-container'>
            {this.state.lists.map(list => <ElementAdmin id={list.id} name={list.name} photo={list.photo} category={list.category} description={list.description} year={list.year} name_actors={list.name_actors} />)}
          </div>
        </section>
      </div>
    );
  }
}

export default CardListAdmin;
