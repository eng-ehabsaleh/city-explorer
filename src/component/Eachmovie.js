import React from "react";
import Card from "./Card";

class Eachmovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
    };
  }
  render() {
    return (
      <>
        {this.state.movies.map((ele) => {
          <>
            <Card style={{ width: "18rem" }} />
            <Card.Img variant="top" src={ele.image_url} />
            <Card.Body>
              <Card.Title> {ele.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Movie title : {ele.title}</ListGroupItem>
              <ListGroupItem> {ele.overview}</ListGroupItem>
            </ListGroup>
          </>;
        })}
      </>
    );
  }
}
export default Eachmovie;
