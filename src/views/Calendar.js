import * as React from "react"
import { View, Text } from "react-native"
import SafeAreaView from 'react-native-safe-area-view';

function CalendarView(){
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calendar!</Text>
    </SafeAreaView>
  )
}

export default CalendarView