import React, { Component } from 'react';
import './Element.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container,
} from 'reactstrap';


class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (
      <div className="Element">
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
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Element;