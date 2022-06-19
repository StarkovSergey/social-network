import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, StateType, updateNewMessageText, updateNewPostText } from './redux/state';

export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} textareaChangeHandler={updateNewPostText} newMessageChangeHandler={updateNewMessageText}/>
    </BrowserRouter>, document.getElementById('root')
  );
};
