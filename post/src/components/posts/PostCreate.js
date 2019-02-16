import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class PostCreate extends React.Component {

  renderInput({input}) {
    return (
      <div className="field">
        <label>What do you do now?</label>
        <textarea {...input} />
      </div>
    );  
  }

  render() {
    return (
      <form className="ui form ">
        <Field name="text" component={this.renderInput} />
      </form>   
    );
  }
};

export default reduxForm({
  form: 'postCreate'
})(PostCreate);