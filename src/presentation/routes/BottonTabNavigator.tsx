import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens';
import { colors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigation';

const Tab = createBottomTabNavigator();

export const  BottonTabNavigator = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: colors.background,
    }}
    screenOptions={{
      //headerShown: false,
      tabBarLabelStyle: {
        marginBottom: 10,
      },
      headerStyle: {
        elevation: 0,
        borderColor: 'transparent',
        shadowColor: 'transparent',
        },
        tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
            }
    }}
    >
      <Tab.Screen name="Tab1" options={{ title: 'Tab1', tabBarIcon: ({ color }) => <Text style={{color}}>Tab1</Text> }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: ({color}) => <Text style={{color}}>Tab2</Text> }} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{ title: 'Tab3', tabBarIcon: ({color}) => <Text style={{color}}>Tab3</Text> }} component={Tab3Screen} />
    </Tab.Navigator>
  );
}