import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, View } from "react-native"
import { IonIcon } from "./IonIcon";
import { colors } from "../../theme/theme";




export const HamburgerMenu = () => {
    const navigation = useNavigation();
    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Pressable
            style={{ marginLeft: 10 }} 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            <IonIcon name="menu-outline" size={25} color={colors.secondary} />
          </Pressable>
        )
      } );
    }, []);
  return (
    <View>
      
    </View>
  )
}
