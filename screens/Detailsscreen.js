import { View, Text, Button, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation }) => {
    return (
      <View style={ styles.container }>
        <Text>Šeit pieejama informācija par mums</Text> 
        <Button title="Atgriezties uz sākumu" onPress={() => navigation.navigate('Sākums')} />
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </View>
    );
  }

  export default DetailsScreen;


  const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

});