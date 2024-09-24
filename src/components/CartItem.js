import { StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../global/colors';

const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>{item.price} $</Text>
      </View>
      <Entypo name="trash" size={48} color="white" />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: 'rgba(0, 128, 0, 0.9)', 
    marginVertical: 10,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Para Android
  },
  containerText: {
    width: "70%",
    gap: 5
  },
  title: {
    color: "white",
    fontSize: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  brand: {
    color: "white",
    fontSize: 16,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  price: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  }
});
