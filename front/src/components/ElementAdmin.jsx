import React, { Component } from 'react';
import './ElementAdmin.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { withRouter } from 'react-router-dom';


class ElementAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleClickDelete() {
    console.log("this.props.id", this.props.id);
    fetch(`http://localhost:3000/api/infos/${this.props.id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => void window.location.reload());
  }

  render() {

    return (
      <div className="ElementAdmin">
        <Container>
          <Card className="ElementItem">
            <CardImg className="Img" top width="200px" src={this.props.photo} alt="Card image cap" />
            <CardBody>
              <CardTitle>{this.props.name}</CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText>Category : {this.props.category}</CardText>
              <CardText>Description : {this.props.description}</CardText>
              <CardText>Year : {this.props.year}</CardText>
              <CardText>Starring : {this.props.name_actors}</CardText>
              <Button onClick={() => this.props.history.push(`/modify/${this.props.id}`)} color="primary">Modify</Button>
              <Button color="danger" onClick={this.toggle}>Delete</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Warning !</ModalHeader>
              <ModalBody>
                You will delete a movie !!!
              </ModalBody>
                <ModalFooter>
                  <Button color="danger" onClick={this.handleClickDelete}>Delete</Button>
                  <Button color="success" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
}
}

export default withRouter(ElementAdmin);