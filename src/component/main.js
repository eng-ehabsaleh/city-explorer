import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Map from "google-maps-react";
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
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.cityName}&format=json`;
    console.log(url);
    const response = await axios.get(url);
    console.log(response.data[0]);
    this.setState({
      location: response.data[0],
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
            Submit
          </Button>
        </Form>
        <div>
          <h2>location information</h2>
          <p>name: {this.state.location.display_name}</p>
          <p> lat: {this.state.location.lat}</p>
          <p> lon: {this.state.location.lon}</p>
        </div>
        <div>
          <Map
            zoom={14}
            google={this.props.google}
            initialCenter={{
              lat: this.state.location.lat,
              lng: this.state.location.lon,
            }}
          ></Map>
        </div>
      </div>
    );
  }
}
export default Main;
