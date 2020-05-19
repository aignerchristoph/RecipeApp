import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function Item(props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.title}</Text>
      <Ionicons name={"ios-checkmark-circle-outline"} size={30} />
    </View>
  );
}

export default function Einkaufsliste(props) {
  return (
    <ScrollView style={styles.container}>
      {console.log(props.list)}
      {props.list.map(item => (
        <Item key={Math.random()} title={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  item: {
    padding: 20,
    marginVertical: 4,
    backgroundColor: "lightgrey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 16
  }
});
