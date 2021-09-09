import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
class Cardy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapurl: "",
    };
  }

  map = () => {
    this.setState({
      mapurl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.props.location.lat},${this.props.location.lon}&zoom=18&size=100x180&format=png&markers=icon:large-blue-cutout|${this.props.location.lat},${this.props.location.lon}&markers=icon:large-blue-cutout|${this.props.location.lat},${this.props.location.lon}`,
    });
  };
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.state.mapurl} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              name: {this.props.location.display_name}
            </ListGroupItem>
            <ListGroupItem>lat: {this.props.location.lat}</ListGroupItem>
            <ListGroupItem>lon: {this.props.location.lon}</ListGroupItem>
            {/* <ListGroupItem>date: {this.props.weather.valid_date}</ListGroupItem> */}
            <ListGroupItem>date: {this.props.weather.ob_time}</ListGroupItem>
            <ListGroupItem>
              description: {this.props.weather.weather.descriptin}
            </ListGroupItem>
          </ListGroup>
          {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
        </Card>
      </div>
    );
  }
}

export default Cardy;
