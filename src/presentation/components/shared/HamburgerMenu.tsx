import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native"




export const HamburgerMenu = () => {
    const navigation = useNavigation();
    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            <Text>Menu</Text>
          </Pressable>
        )
      } );
    }, []);
  return (
    <View>
      
    </View>
  )
}
