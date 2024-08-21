import 'react-native-gesture-handler';

// Usa PagerView en tu código


import { NavigationContainer } from "@react-navigation/native";
import { 
  //StackNavigator,
  SideMenuNavigator,
  //BottonTabNavigator
 } from './presentation/routes';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator />  */}
      <SideMenuNavigator />
      {/* <BottonTabNavigator /> */}
    </NavigationContainer>
  )
}

