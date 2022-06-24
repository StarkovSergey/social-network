import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { state, subscribe } from './redux/state';
import App from './App';
import { addPost, StateType, updateNewMessageText, updateNewPostText } from './redux/state';

const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} textareaChangeHandler={updateNewPostText} newMessageChangeHandler={updateNewMessageText}/>
    </BrowserRouter>, document.getElementById('root')
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
