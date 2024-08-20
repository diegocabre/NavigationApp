import { Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { StackActions, useNavigation, type NavigationProp } from "@react-navigation/native";
import { type RootStackParamList } from "../../routes/StackNavigator";


export const SettingScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style= {globalStyles.container}>
      <Text>SettingScreen</Text>
      <PrimaryButton label={"Regresar"} onPress={ () => navigation.goBack() }/>
      <PrimaryButton label={"Home"} onPress={ () => navigation.dispatch(StackActions.popToTop()) }/>
    </View>
  )
}