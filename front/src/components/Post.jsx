import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      photo: '',
      category: '',
      description: '',
      year: '',
      name_actors: '',
      isSubmitDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value,
      }, function () { this.canSubmit() })
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

    fetch("http://localhost:3000/api/infos/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
       alert("Création de la fiche réussie")
      }
    }).then(() => void window.location.reload());
  };

  canSubmit() {
    const { name, photo, category, description, year, name_actors } = this.state;
  
    if (name.length >=3 && photo.length >=3 && category.length >=3 && description.length >=3 && year.length >=3 && name_actors.length >=3 ) {
      this.setState({ isSubmitDisabled: false })
    } else {
      this.setState({ isSubmitDisabled: true })
    }
  }
  

  render() {
    return (
      <div className='ContactUs'>
        <Container className='Container'>
          <Form className='Form' onSubmit={this.handleSubmit}>
          <h1 className='TitleName'>Add your favourite movie</h1>
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
            <p>* Please fill all the form to send your movie ;)</p>
            <Button color="success" type="submit" className='Send' disabled={this.state.isSubmitDisabled}>Send your movie</Button>
          </Form>
        </Container>
      </div>
    );
  };
};

export default Post;