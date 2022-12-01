import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/homeComponents/HomeScreen';
import SessionUsersScreen from './src/screens/homeComponents/SessionUsersScreen'
import { Provider } from 'react-redux';
import { userStore } from './src/redux/Store';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen} />
      <Stack.Screen
          name="Home"
          component={DrawerNavigation}
          options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Welcome"
        component={HomeScreen} />
      <Drawer.Screen
        name="Session Users"
        component={SessionUsersScreen} />
    </Drawer.Navigator>
  )
}

export default () => {
  return (
    <Provider store={userStore}>
      <App />
    </Provider>
  )
};