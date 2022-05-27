import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form'

import { getEvent,deleteEvent, putEvent } from "../actions";

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push("/")
  }

  async onSubmit(values) {
    // await this.props.postEvent(values)
    this.props.history.push("/")
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="タイトル" name="title" type="text" component={this.renderField} />
        </div>
        <div>
          <Field label="本文" name="body" type="text" component={this.renderField} />
        </div>
        <div>
          <imput type="保存" name="submit" disabled={pristine || submitting} />
          <Link to="/">cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>delete</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const error = {}

  if (!values.title) error.title = "タイトルを入力してください"
  if (!values.body) error.body = "本文を入力してください"

  return error
}

const mapDispatchToProps = ({ deleteEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: "eventShowForm" })(EventsShow)
);
