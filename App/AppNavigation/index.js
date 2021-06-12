import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Views/Auth/Splash';
import Login from '../Views/Auth/Login';
import Signup from '../Views/Auth/Signup';
import Category from '../Views/Category';
import Test from '../Views/Test';
import bottomNavigator from './bottomnavigator';
import Prepare from '../Views/Prepare';
import Menu from './sideMenu';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Views/Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
class AppNavigation extends React.Component {
  
      firstScreenStack({ navigation }) {
        return (
            <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          
          <Stack.Screen
            name="Dashboard"
            component={Category}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="bottomNavigator"
            component={bottomNavigator}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Category"
            component={Category}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        
        );
      }
  render() {
    return (
      <NavigationContainer>
                  <Drawer.Navigator initialRouteName="bottomNavigator">
            <Drawer.Screen name="Home" component={this.firstScreenStack} />
            <Drawer.Screen name="bottomNavigator" component={bottomNavigator} />
           
            <Drawer.Screen name="Notifications" component={Category} />
          </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigation;
