import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  submitHandler = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-6 mt-5 pt-5 pl-5">
          <img src="./images/contact.png" alt="" className="img img-fluid" />
        </div>
        <div className="justify-content-md-center  col-md-6">
          <form className=" p-2 mt-5" onSubmit={this.submitHandler}>
            <h1 className="text-center">Stay in Touch </h1>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                ></textarea>
              </div>

              <button className="btn btn-primary btn-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
