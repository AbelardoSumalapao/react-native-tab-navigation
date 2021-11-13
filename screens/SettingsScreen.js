import * as React from 'react';
import { Text, Button, View } from 'react-native';

function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title="Go to Listing" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }


export default SettingsScreen  