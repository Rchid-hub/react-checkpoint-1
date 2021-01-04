import {Button, Form, FormGroup, Label, Input}
from 'reactstrap';
import {FacebookLoginButton} from 
'react-social-login-buttons';
import React from 'react';

function Myform(){
    return(
    <Form className="authentification">
      <h1><span className="font-weight-bold">Welcome to The authentification page.</span></h1>
      <h2>Please enter your credentials</h2>
      <FormGroup className="fields">
        <div className="field">
        <Label>Email:</Label>
        <Input type="email" placeholder="Email"/>
        </div>
        <div className="field">
        <Label>PassWord:</Label>
        <Input type="password" placeholder="Password"/>
        </div>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">
        Log in
      </Button>
      <div className="text-center pt-3">
        Or continue with your social account
      </div>
      <FacebookLoginButton/>
      <div className="text-center">
          <a href="/sign-up">Sign Up</a>
          <span className="p-4">|</span>
          <a href="/sign-up">I forgot the password</a>
      </div>
  </Form>
  );
}
export default Myform;