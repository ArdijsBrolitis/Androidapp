import { View, Text, Button, StyleSheet } from "react-native";

const Contactscreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Šeit atrodas informācija, kā ar mums sazināties</Text>
        <Button title="Atgriezties uz sākumu" onPress={() => navigation.navigate('Sākums')} />
      </View>
    );
  }

  export default Contactscreen;

  const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

});
