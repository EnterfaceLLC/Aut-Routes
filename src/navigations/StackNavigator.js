import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/Home';
import RegisteredScreen from '../screens/Registered';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          name='Registered'
          component={RegisteredScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;
