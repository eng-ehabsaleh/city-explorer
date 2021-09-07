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
    });
    // console.log(res);

    // const response = await axios.get(url);
    // console.log(response.data[0]);
    // this.setState({
    //   location: response.data[0],
    // });
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
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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

// <div>
//   <h2>location information</h2>
//   <p>name: {this.state.location.display_name}</p>
//   <p> lat: {this.state.location.lat}</p>
//   <p> lon: {this.state.location.lon}</p>
// </div>
