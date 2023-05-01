import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todoadd from './app/screens/Todoadd';
import Todolist from './app/screens/Todolist';
import Tododelete from './app/screens/Tododelete';


const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Delete a Task' component={Tododelete}/>
      <Tab.Screen name='List of Tasks' component={Todolist}/>
      <Tab.Screen name='Add a Task' component={Todoadd}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App