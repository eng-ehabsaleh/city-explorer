import React from "react";
import Card from "./Card";
class Movie extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }} />
        <Card.Img variant="top" src={this.props.movie.image_url} />
        <Card.Body>
          <Card.Title> {this.props.movie.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>title name: {this.props.movie.title}</ListGroupItem>
          <ListGroupItem>lat: {this.props.movie.overview}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
export default Movie;
