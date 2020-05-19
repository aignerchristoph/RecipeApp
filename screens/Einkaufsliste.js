import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function Item(props) {
  const [isSelected, handleSelect] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => handleSelect(!isSelected)}
      style={[styles.item, isSelected && styles.itemSelected]}
    >
      <Text style={styles.title}>{props.title}</Text>
      {isSelected ? (
        <Ionicons name="ios-checkmark-circle-outline" color="green" size={30} />
      ) : (
        <Ionicons name="ios-radio-button-off" size={30} color="gray" />
      )}
    </TouchableOpacity>
  );
}

export default function Einkaufsliste(props) {
  return (
    <ScrollView style={styles.container}>
      {props.list.map((item, index) => (
        <Item key={index + 1} index={index} title={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  item: {
    padding: 20,
    backgroundColor: "lightgray",
    marginTop: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemSelected: {
    backgroundColor: "lightgreen"
  },
  title: {
    fontSize: 18
  }
});
