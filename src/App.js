import * as React from "react"
import { View } from "react-native"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabBar from "./components/tab-bar";

import CalendarView from "./views/Calendar"
import AddTaskView from "./views/AddTask"
import ListView from "./views/List"
import DetailView from "./views/Detail";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function ListStack() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <HomeStack.Screen name="Home" component={ListView} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="Calendar" component={CalendarView} />
          <Tab.Screen name="Add" component={AddTaskView} />
          <Tab.Screen name="Tasks" component={ListStack} />
        </Tab.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    </View>
  )
}

export default App