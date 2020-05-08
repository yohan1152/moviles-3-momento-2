import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CreateAppointmentScreen from './screens/create-appointment/create-appointment.js';

const Tab = createMaterialBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="CreateAppointmentScreen"
          activeColor="#e91e63"
          backgroundColor={Colors.DarkBlue}>
          <Tab.Screen
            name="CreateAppointmentScreen"
            component={CreateAppointmentScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
