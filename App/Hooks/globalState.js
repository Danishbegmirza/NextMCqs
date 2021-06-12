/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
import React, { useReducer } from 'react';
import AppContext from './app-context';
import {
  UserDetails,
  UserNameData,
} from './constants';

export const GlobalState = (props) => {
  // lets add some reducers and see how useReducer work
  /**
   *  this is the intial state of the reducer
   */
  const initialState = {
    userData: {},
    UserNameData: []
  };
  /**
   * this is the reducer function which will handle the actions
   * @param {*} state
   * @param {*} action
   */
  function reducer(state, action) {
    switch (action.type) {
      case UserDetails:
        return { ...state, userData: action.payload };
      case UserNameData:
        return { ...state, UserNameData: action.payload };
      default:
        return state;
    }
  }

  // using the useReducerHook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={ {
        state,
        dispatch
      } }
    >
      {props.children}
    </AppContext.Provider>
  );
};
