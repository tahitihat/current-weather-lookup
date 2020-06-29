import React from 'react';
import Form from "react-bootstrap/Form";

const Select = (props) => {
  return (
    <Form.Group controlId={props.name} className="f-group">
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        as="select"
        name={props.name}
        onChange={props.onChange}
      >
        <option value="" disabled>{props.placeholder}</option>
        {props.options.map((option) => {
          return (
            <option
              label={option}
              key={option}
              value={option}
            />
          );
        })}
      </Form.Control>
    </Form.Group>
  )
}

export default Select;