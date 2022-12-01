import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
  )
}

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login"
                    component={LoginScreen}/>
      <Stack.Screen name="Home"
                    component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default App;