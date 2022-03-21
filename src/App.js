import * as React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalendarView from "./views/Calendar"
import AddTaskView from "./views/AddTask"
import ListView from "./views/List"
import DetailView from "./views/Detail";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function ListStack(){
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={ListView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="List">
        <Tab.Screen name="Calendar" component={CalendarView} />
        <Tab.Screen name="Add Task" component={AddTaskView} />
        <Tab.Screen name="List" component={ListStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App