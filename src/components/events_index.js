import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash";
import { Link } from "react-router-dom";

import { readEvents } from "../actions";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>ID</td>
        <td>title</td>
        <td>body</td>
      </tr>
))
  }
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">new event</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ( {events: state.events} )
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
