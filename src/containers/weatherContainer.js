import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import WeatherService from "../services/weatherService";

/*
React Container for handling user form input and rendering 
weather response data from OpenWeatherData API.
*/
class WeatherContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fahrenheit: true,
      locationInput: {
        city: "",
        state: "",
        zipCode: "",
      },
      returnWeather: {},
      renderErrorMessage: false
    };
    this.handleRequestSubmit = this.handleRequestSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onTempScaleChange = this.onTempScaleChange.bind(this);
  }

  /* 
    Form submit handler. Pass params from user input (stored in state) 
    to appropriate WeatherService method.
  */
  handleRequestSubmit() {
    const tempScale = this.state.fahrenheit ? 'imperial' : 'metric';

    WeatherService.requestWeather(
      this.state.locationInput.zipCode,
      tempScale,
      (response) => {
        this.setState({
          returnWeather: response,
          locationInput: {
            city: "",
            state: "",
            zipCode: ""
          },
          renderErrorMessage: false
        });
      },
      (errorMessage) => {
        this.setState({ renderErrorMessage: true });
      }
    )
  }

  /* 
    Update state to reflect change in user form input.
  */
  onInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
  
    this.setState({
      locationInput: {
        ...this.state.locationInput,
        [name]: value
      }
    });
  }

  /* 
    Update state to reflect change in temperature scale radio buttons.
  */
  onTempScaleChange(_) {
    const currentTempScale = this.state.fahrenheit;

    this.setState({
      fahrenheit: !currentTempScale
    });
  }


  render() {
    const { fahrenheit, locationInput, returnWeather, renderErrorMessage } = this.state;
    const { city, state, zipCode } = locationInput;

    return (
      <div className="container">
        <div className="col">
          <Form>
            <Form.Text>
              Enter a city and state in the United States or an American zip code to check the current weather.
            </Form.Text>

            <Form.Row>
              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                  name="city"
                  value={city}
                  type="text" 
                  placeholder="Enter city" 
                  onChange={this.onInputChange}
                />            
                </Form.Group>
              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control 
                  name="state"
                  value={state}
                  type="text" 
                  placeholder="Enter state" 
                  onChange={this.onInputChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control 
                name="zipCode"
                value={zipCode}
                type="text" 
                placeholder="Enter zip code" 
                onChange={this.onInputChange}
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
                  checked={fahrenheit}
                  onChange={this.onTempScaleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Celsius"
                  name="temperatureRadios"
                  id="celsiusRadio"
                  checked={!fahrenheit}
                  onChange={this.onTempScaleChange}
                />
              </div>
            </Form.Group>

            <Button variant="secondary" onClick={this.handleRequestSubmit}>
              Submit
            </Button>
          </Form>          

          <div className="col">
            <p>{ JSON.stringify(returnWeather) }</p>
          </div>
          {
            renderErrorMessage && (
              <h3>There was an error making the request. Please try again.</h3>
            )
          }
        </div>
      </div >
    );
  }
}

export default WeatherContainer;
