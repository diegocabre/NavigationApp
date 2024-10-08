import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ProfileScreen} from '../screens';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/theme';
import {useWindowDimensions, View} from 'react-native';
import React from 'react';
import {BottonTabNavigator} from './BottonTabNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',

        headerShown: false,

        drawerActiveBackgroundColor: '#f4511e',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: colors.primary,
        drawerLabelStyle: {
          fontSize: 15,
        },
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon
              name="notifications-circle-outline"
              color={color}
              size={20}
            />
          ),
        }}
        name="Tabs"
        component={BottonTabNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="person-outline" color={color} size={20} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: colors.primary,
          borderRadius: 50,
          margin: 30,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
