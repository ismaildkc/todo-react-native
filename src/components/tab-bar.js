import * as React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Plus, Calendar, List } from "./icons"
import Box from "./Box"

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {label === 'Add' && <Plus />}
            {label === 'Calendar' && <Calendar />}
            {label === 'Tasks' && <List />}
            <Box style={styles.box} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  box: {
    flex: 1,
    color: 'red',
    backgroundColor: 'red',
    width: 3,
    height: 30,
  }
})

export default TabBar