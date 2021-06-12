import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Category from '../Views/Category';
import Colors from '../Values/colors'
import Prepare from '../Views/Prepare';
import Test from '../Views/Test';
const Tab = createBottomTabNavigator();
var ScrollableTabView = require('react-native-scrollable-tab-view-forked');
var CustomTabBar = require('./CustomTabBar');
class bottomTabs extends React.Component {

    render() {
        return (
        <ScrollableTabView >
        <Prepare tabLabel="React" />
        <Test tabLabel="Flow" />
       
      </ScrollableTabView>
        )
        
    }
}
export default bottomTabs;