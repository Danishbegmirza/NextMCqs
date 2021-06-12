import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Category from '../Views/Category';
import Colors from '../Values/colors'
import Prepare from '../Views/Prepare';
import Test from '../Views/Test';
const Tab = createBottomTabNavigator();
class bottomNavigator extends React.Component {

    render() {
        return (
            <Tab.Navigator
                sceneContainerStyle={{ padding: 10 }}
                tabBarOptions={{
                    activeTintColor:Colors.primaryblue,
                    style : {  paddingBottom : '1%',}
                }}>
                <Tab.Screen name="Home" component={Category}

                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" size={30} color={Colors.primaryblue} />
                        ),
                    }} />
                <Tab.Screen name="Prepare" component={Prepare}
                    options={{
                        tabBarLabel: 'Prepare',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="book" size={30} color={Colors.primaryblue} />
                        ),
                    }}
                />
                <Tab.Screen name="Test" component={Test}
                    options={{
                        tabBarLabel: 'Test',
                        
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="pencil" size={30} color={Colors.primaryblue} />
                        ),
                    }} />
            </Tab.Navigator>
        )
    }
}
export default bottomNavigator;