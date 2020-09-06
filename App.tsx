import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from '@shopify/restyle';
import * as React from 'react';
import 'react-native-gesture-handler';
import { Login, Onboarding, Welcome } from './src/Authentication';
import theme from './src/global/theme';
import { Routes } from './src/types/Navigation';

const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none" initialRouteName="Login">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
