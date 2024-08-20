import {  Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { DrawerActions, type NavigationProp, useNavigation } from "@react-navigation/native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { type RootStackParamList } from "../../routes/StackNavigator";
import { useEffect } from "react";


export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {

    navigation.setOptions({ 
      headerLeft: () =>
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
    });
  
    return () => {
  
    };
  }, [])

  return (
    <View style={globalStyles.container}>
      <PrimaryButton label="Productos" onPress={() => navigation.navigate('Products')}/>
      <PrimaryButton label="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  )
}

