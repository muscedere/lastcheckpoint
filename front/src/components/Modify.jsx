import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './Modify.css';

class Modify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      photo: '',
      category: '',
      description: '',
      year: '',
      name_actors: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    fetch(`http://localhost:3000/api/infos/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          name: data[0].name,
          photo: data[0].photo,
          category: data[0].category,
          description: data[0].description,
          year: data[0].year,
          name_actors: data[0].name_actors,
        });
      })
      .catch(error => {
        console.log("error", error);
      })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, photo, category, description, year, name_actors } = this.state;
    const data = {
      name: name,
      photo: photo,
      category: category,
      description: description,
      year: year,
      name_actors: name_actors,
    };
    fetch(`http://localhost:3000/api/infos/${this.props.match.params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
       alert("modification réussie")
      }
    })
    .then(()=> this.props.history.push('/cardlistall'));
  };
  



  render() {
    console.log("props", this.props)
    return (
      <div className='ContactUs'>
        <Container className='Container'>
        <Form className='Form' onSubmit={this.handleSubmit}>
          <h1 className='Title'>Modify a movie</h1>
          <br></br>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="Nom">Name</Label>
                  <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Photo">Photo</Label>
                  <Input type="text" name="photo" id="photo" value={this.state.photo} onChange={this.handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="category">Category</Label>
                  <Input type="textarea" name="category" id="category" value={this.state.category} onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input type="textarea" name="description" id="description" value={this.state.description} onChange={this.handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="year">Year of distribution</Label>
                  <Input type="textarea" name="year" id="year" value={this.state.year} onChange={this.handleChange} />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="name_actors">Name of actors</Label>
                  <Input type="textarea" name="name_actors" id="name_actors" value={this.state.name_actors} onChange={this.handleChange} />
                </FormGroup>
              </Col>
            </Row>
            <Button color="warning" type="submit" className='Send'>Save your changes</Button>
          </Form>
        </Container>
      </div>
    );
  };
};

export default Modify;