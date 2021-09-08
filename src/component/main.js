import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Cardy from "../component/Card";
import Alert from "react-bootstrap/Alert";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      location: {},
      showErrMsg: false,
      showLocation: false,
      errMsg: "error: Unable to geocode",
    };
  }
  formChange = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };
  formSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(this.state.cityName);
      const url = `GET https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&city=${this.state.cityName}&format=json`;
      console.log(url);
      const res = await axios.get(url);
      this.setState({
        location: res.data[0],
        showErrMsg: false,
        showLocation: true,
      });
    } catch (err) {
      this.setState({
        showErrMsg: true,
        showLocation: false, //to not desplay the cardy
        // we caan say errMsg:err.res.data.error|| errMsg:err,message
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.showErrMsg && (
          <Alert variant="dark">{this.state.errMsg}</Alert>
        )}
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
          {this.state.showLocation && <Cardy location={this.state.location} />}
        </div>
      </div>
    );
  }
}
export default Main;
