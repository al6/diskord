import React from 'react';
import ReactDOM from "react-dom";
import { postMember, postSession, deleteSession } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.signup = postMember;
  window.login = postSession;
  window.logout = deleteSession;
  ReactDOM.render(<h1>Welcome to Diskord!</h1>, root);
});