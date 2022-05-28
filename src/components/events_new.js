import React, { Component } from 'react';
import { connect } from 'react-redux'
// https://redux-form.com/7.3.0/docs/api/field.md/
// https://redux-form.com/7.3.0/docs/api/reduxform.md/
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
// https://v0.material-ui.com/v0.20.0/#/components/text-field
import TextField from 'material-ui/TextField'

import { postEvent } from "../actions";

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <TextField 
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    this.props.history.push("/")
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = { margin: 12 }
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="タイトル" name="title" type="text" component={this.renderField} />
        </div>
        <div>
          <Field label="本文" name="body" type="text" component={this.renderField} />
        </div>
        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
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

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: "eventNewForm" })(EventsNew)
);
