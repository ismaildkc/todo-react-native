import * as React from "react"
import { SafeAreaView, View, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabBar from "./components/tab-bar";
import Box from "./components/Box";

import CalendarView from "./views/Calendar"
import AddTaskView from "./views/AddTask"
import ListView from "./views/List"
import DetailView from "./views/Detail";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function ListStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={ListView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="Calendar" component={CalendarView} />
          <Tab.Screen name="Add" component={AddTaskView} />
          <Tab.Screen name="Tasks" component={ListStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App