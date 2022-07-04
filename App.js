import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Homescreen';
import DetailsScreen from './screens/Detailsscreen';
import Contactscreen from './screens/Contactscreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Sākums" component={HomeScreen} />
        <Stack.Screen name="Par mums" component={DetailsScreen} />
        <Stack.Screen name="Kontakti" component={Contactscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;