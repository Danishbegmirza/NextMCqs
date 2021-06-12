import React from 'react'
import { View } from 'react-native'
import AppNavigation from './App/AppNavigation'
import ErrorBoundary from './App/Components/ErrorBoundary'
import { GlobalState } from "./App/Hooks/globalState";
export default class App extends React.Component{
  render(){
    return(
      <><ErrorBoundary>
      <GlobalState>
        <AppNavigation />
        </GlobalState>
        </ErrorBoundary>
      </>
    )
  }
}

