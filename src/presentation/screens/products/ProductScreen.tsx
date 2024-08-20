import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { type RootStackParamList } from "../../routes/StackNavigator";
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";
import { StackNavigationProp } from '@react-navigation/stack';

export const ProductScreen = () => {
  // Obteniendo los parámetros usando useRoute y tipándolos correctamente
  const { params } = useRoute<RouteProp<RootStackParamList, 'Product'>>();
  
  // Tipando la navegación para mayor seguridad
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Product'>>();

  // Actualizar el título de la pantalla al montar el componente
  useEffect(() => {
    navigation.setOptions({ title: params.name });
  }, [navigation, params.name]);

  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <Text>ID: {params.id}</Text>
      <Text>Name: {params.name}</Text>
    </View>
  );
};
