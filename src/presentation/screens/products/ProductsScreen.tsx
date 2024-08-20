import { FlatList, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { type NavigationProp, useNavigation } from "@react-navigation/native"
import { type RootStackParamList } from '../../routes/StackNavigator';

const products = [
  {
    id: '1',
    name: 'Product 1',
  },
  {
    id: '2',
    name: 'Product 2',
  },
  {
    id: '3',
    name: 'Product 3',
  },
  {
    id: '4',
    name: 'Product 4',
  },
  {
    id: '5',
    name: 'Product 5',
  },
  {
    id: '6',
    name: 'Product 6',
  },
  {
    id: '7',
    name: 'Product 7',
  },
  {
    id: '8',
    name: 'Product 8',
  },
  {
    id: '9',
    name: 'Product 9',
  },
  {
    id: '10',
    name: 'Product 10',
  },
]

export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={ globalStyles.container}>
      <Text style={{marginBottom: 20, fontSize: 40, fontWeight: 'bold'}}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({item})=> (
          <PrimaryButton
          onPress={ () => navigation.navigate ('Product', {id: item.id, name: item.name})} 
          label={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 20, fontSize: 40, fontWeight: 'bold'}}>Ajustes</Text>
      <PrimaryButton label="Ajustes" onPress={() => navigation.navigate ('Settings')}
      />
    </View>
  )
}