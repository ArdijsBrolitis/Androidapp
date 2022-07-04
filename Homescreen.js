import { View, Text, StyleSheet, Button } from "react-native";


const  HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container} >
        <Text>Esi sveicināts!</Text>
        <Button title="Par mums" onPress={() => navigation.navigate("Par mums")}/>
        <Button title="Kontakti" onPress={() => navigation.navigate("Kontakti")} />
      </View>
    );
}

export default HomeScreen;


const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

});