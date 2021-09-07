import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      location: {},
      mapurl: "",
    };
  }
  formChange = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };
  formSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.cityName);
    const url = `GET https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&city=${this.state.cityName}&format=json`;
    console.log(url);
    const res = await axios.get(url);
    this.setState({
      location: res.data[0],
      mapurl: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=18&size=100x180&format=png&maptype=<MapType>&markers=icon:<icon>|${this.state.location.lat},${this.state.location.lon}&markers=icon:<icon>|${this.state.location.lat},${this.state.location.lon}`,
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter the name of the city"
              onChange={this.formChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.mapurl} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                name: {this.state.location.display_name}
              </ListGroupItem>
              <ListGroupItem>lat: {this.state.location.lat}</ListGroupItem>
              <ListGroupItem>lon: {this.state.location.lon}</ListGroupItem>
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
        </div>
      </div>
    );
  }
}
export default Main;
