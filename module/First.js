import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function First({ navigation }) {
  return (
    <View style={{
      alignItems: 'center',
      padding: 50
    }}>
      <Text>zhangqing</Text>
      <Text>KP04</Text>
      <TouchableOpacity style={{
        marginTop: 50,
        backgroundColor: 'blue'
      }} onPress={() => {
        navigation.navigate('Second');
      }}>
        <Text style={{
          color: '#fff'
        }}>
        Second 
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default First;
