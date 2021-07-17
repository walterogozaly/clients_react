import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions';

class Clientform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const newClient = {
      name: this.state.name,
      email: this.state.email
    }

    this.props.createUser(newClient);
  }


  render() {
    return (
      <div>
        <h1>Add A Client</h1>        
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label><br/>
            <input type="text" name="name" onChange={this.onChange} value={this.state.name} />
          </div>
          <br />
          <div>
            <label>Email: </label><br/>
            <input type="text" name="email" onChange={this.onChange} value={this.state.email} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Clientform.propTypes = {
  createUser: PropTypes.func.isRequired,

}

export default connect(null, { createUser })(Clientform);