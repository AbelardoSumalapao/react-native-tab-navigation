import * as React from 'react';
import { Text, Button, View } from 'react-native';

function ListingScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Listing!</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }


export default ListingScreen  