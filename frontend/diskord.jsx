import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentMember) {
    const preloadedState = {
      entities: {
        members: { [window.currentMember.id]: window.currentMember }
      },
      session: { id: window.currentMember.id }
    };
    store = configureStore(preloadedState);
    delete window.currentMember;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});