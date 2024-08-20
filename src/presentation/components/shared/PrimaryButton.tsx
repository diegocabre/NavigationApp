import { Pressable, View, Text} from "react-native";
import { globalStyles } from "../../theme/theme";


interface Props {
  label: string,
  onPress: () => void,
}

export const PrimaryButton = ( {label, onPress}: Props) => {
  return (
    <View>
    <Pressable 
      onPress={() => onPress()}
      style={globalStyles.primaryBotton}>
        <Text style={globalStyles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  )
}
