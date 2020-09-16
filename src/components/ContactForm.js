import React from "react";
import { Form, Header, Button } from "semantic-ui-react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Form  style={{padding: "35px"}}
        onSubmit={this.submitForm}
        action="https://formspree.io/maylwbqw"
        method="POST"
      >
        <Form.Field>
          <label
            style={{
              fontFamily: "Montserrat",
              fontWeight: "normal",
              fontSize: "13px",
              lineHeight: "19px",
            }}
          >
            Name:
          </label>
          <input type="text" name="name" />
        </Form.Field>
        <Form.Field>
          <label
            style={{
              fontFamily: "Montserrat",
              fontWeight: "normal",
              fontSize: "13px",
              lineHeight: "19px",
            }}
          >
            Email:
          </label>
          <input type="email" name="email" />
        </Form.Field>
        <Form.Field>
        <label
         style={{
          fontFamily: "Montserrat",
          fontWeight: "normal",
          fontSize: "13px",
          lineHeight: "19px",
        }}
        >Message:</label>
         <textarea name="message" />
        </Form.Field>
        {status === "SUCCESS" ? <p>Thanks! I will get back to you shortly.</p> : <Button style={style.button}>Submit</Button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
};

const style = {
  form: {
    fontFamily: "Montserrat",
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "27px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2B2828",
    color: "#F4F4F4",
    fontFamily: "Montserrat",
    fontWeight: "normal",
    fontSize: "13px",
    lineHeight: "19px",
  },
}