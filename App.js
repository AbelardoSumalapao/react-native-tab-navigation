import * as React from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import ListingScreen from './screens/ListingScreen'
import DownloadScreen from './screens/DownloadScreen'
import UploadScreen from './screens/UploadScreen';

const Tab = createBottomTabNavigator();
const homeScreen = "Home";
const settingsScreen = "Settings";
const listingScreen = "Listing";
const downloadScreen = "Download";
const uploadScreen = "Upload";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeScreen}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : "home-outline";
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Listing') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Download') {
              iconName = focused ? 'download' : 'download-outline';
            } else if (route.name === 'Upload') {
              iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
            } 


            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Listing" component={ListingScreen} />
        <Tab.Screen name="Download" component={DownloadScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}