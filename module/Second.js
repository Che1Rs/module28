import * as React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

function Second({ navigation }) {
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState([]);

  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => {
            let data2 = [...data];
            data2.push(value);
            setData(data2);
          }}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            append
          </Text>
        </TouchableOpacity>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            marginTop: 10,
          }}
          onChangeText={(v) => setValue(v)}
          value={value}
        />
      </View>
      {data.map((item, index) => {
        return <View key={index} style={{
          borderColor: 'black',
          marginTop: 10,
          borderWidth: 1
        }}>
          <Text >{item}</Text>
        </View>;
      })}
    </View>
  );
}

export default Second;
