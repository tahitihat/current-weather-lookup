import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import WeatherService from "../services/weatherService";

class WeatherContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celsius: false,
      city: "",
      state: "",
      zipCode: "",
      returnWeather: {},
      errorMessage: ''
    };
    this.handleRequestSubmit = this.handleRequestSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  handleRequestSubmit() {
      WeatherService.requestWeather(
        this.state.zipCode,
        (response) => {
          this.setState({
            returnWeather: response,
            city: "",
            state: "",
            zipCode: "",
          });
        },
      )
  }

  onChangeHandler(event) {
    console.log(event)
    const name = event.target.name;
    const value = event.target.value;
  
    this.setState({[name]: value});
}

  render() {
    return (
      <div className="container">
        <div className="col">
          <Form>
            <Form.Text>Enter a city and state in the United States or an American zip code to check the current weather.</Form.Text>
            <Form.Row>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                  name="city"
                  value={this.state.city}
                  type="text" 
                  placeholder="Enter city" 
                  onChange={this.onChangeHandler}
                />            
                </Form.Group>

              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control 
                  name="state"
                  value={this.state.state}
                  type="text" 
                  placeholder="Enter state" 
                  onChange={this.onChangeHandler}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control 
                name="zipCode"
                value={this.state.zipCode}
                type="text" 
                placeholder="Enter zip code" 
                onChange={this.onChangeHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.Text>Temperature scale</Form.Text>
              <div key="inline-radio" className="mb-3">
                <Form.Check
                  inline
                  type="radio"
                  label="Fahrenheit"
                  name="temperatureRadios"
                  id="fahrenheitRadio"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Celsius"
                  name="temperatureRadios"
                  id="celsiusRadio"
                />
              </div>
            </Form.Group>

            <Button variant="secondary" onClick={this.handleRequestSubmit}>
              Submit
            </Button>
          </Form>          

          <div className="col">
            <p>{ JSON.stringify(this.state.returnWeather) }</p>
          </div>
        </div>
      </div >
    );
  }
}

export default WeatherContainer;
