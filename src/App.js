import * as React from "react"
import { Text, SafeAreaView } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalendarView from "./views/Calendar"
import AddTaskView from "./views/AddTask"
import ListView from "./views/List"

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calendar" component={CalendarView} />
        <Tab.Screen name="Add Task" component={AddTaskView} />
        <Tab.Screen name="List" component={ListView} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App