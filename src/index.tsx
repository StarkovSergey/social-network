import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { store, StateType } from './redux/state';

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store._state}
        addPost={store.addPost.bind(store)}
        textareaChangeHandler={store.updateNewPostText.bind(store)}
        newMessageChangeHandler={store.updateNewMessageText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store._state);
store.subscribe(rerenderEntireTree);
