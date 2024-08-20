import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { useNavigation, NavigationProp, DrawerActions } from "@react-navigation/native";
import { RootStackParamList } from "../../routes";


export const ProfileScreen = () => {


  const {top}= useSafeAreaInsets();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();



  return (
    <View style={{
      flex:1,
      paddingHorizontal: 20,
      paddingTop: top + 20,
    }}>
      <Text>ProfileScreen</Text>

      <PrimaryButton
        label="Ir a Home"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  )
}