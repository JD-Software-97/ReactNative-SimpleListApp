import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';

export default function App() {

  const Tab = createBottomTabNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName: keyof typeof Ionicons.glyphMap
              let rn = route.name;

              if (rn === "Home") {
                iconName = focused ? 'home' : 'home-outline'
              } else {
                iconName = 'ellipse'
              }

              return <Ionicons name={iconName} size={24} color={focused ? '#59ddf7' : '#002342'} />
            },
            tabBarInactiveTintColor: '#002342',
            tabBarActiveTintColor: '#002342',
            tabBarStyle: {
              borderTopWidth: 0,
              paddingTop: 6
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: "center", headerTitleStyle: { color: '#002342' } }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
