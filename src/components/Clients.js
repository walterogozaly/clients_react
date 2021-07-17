import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';


class Clients extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newClient) {
      this.props.clients.unshift(nextProps.newClient)
    }
  }

  render() {
    const clientList = this.props.clients.map(client => (
      <div key={client.id}>
        <h3>{client.name}</h3>
        <p>{client.email}</p>
        <p>{client.phone}</p>
      </div>
    ));
    return (
      <div>
        <h1>Clients</h1>
        {clientList}
      </div>
    )
  }
}

Clients.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  clients: PropTypes.array.isRequired,
  newClient: PropTypes.object
}

const mapStateToProps = state => ({
  clients: state.clients.items,
  newClient: state.clients.item
});

export default connect(mapStateToProps, { fetchUsers })(Clients);