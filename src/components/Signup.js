import React, { Component } from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirmation from './Confirmation'
import Success from './Success'
//import RangeSlider from './RangeSlider'
import Question from './Question'
import { Fragment } from 'react';

export default class Signup extends Component {

  state = {
    step: 1,
    email: '',
    username: '', 
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    levelOfEducation: '',
    question1: 50,
    question2: 50,
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { email, username, password, firstName, lastName, country, levelOfEducation, question1, question2 } = this.state;
    const values = { email, username, password, firstName, lastName, country, levelOfEducation, question1, question2 }
    
    switch(step) {
      case 1: 
        return (
          <Fragment>
            <UserDetails 
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
            {/*<RangeSlider />*/}
          </Fragment>
        )
      case 2: 
        return (
          <PersonalDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
        return (
          <Question 
            questionAttribute={ 'question1' }
            questionStatement={ 'What is your age?' }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 4: 
        return (
          <Question 
            questionAttribute={ 'question2' }
            questionStatement={ 'How many pets do you have?' }
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 5: 
          return (
            <Confirmation 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
      case 6: 
          return (
            <Success />
          )
      default: 
          // do nothing
    }
  }
}
