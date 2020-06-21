import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function Item(props) {
  return (
    <TouchableOpacity
      onPress={() => props.handleCheck(props.index)}
      style={[styles.item, props.isChecked && styles.itemSelected]}
    >
      <Text style={styles.title}>{props.title}</Text>
      {props.isChecked ? (
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
      {props.list.length > 0 ? (
        props.list.map((item, index) => (
          <Item
            handleCheck={props.handleCheck}
            key={index + 1}
            index={index}
            title={item.title}
            isChecked={item.isChecked}
          />
        ))
      ) : (
        <View style={styles.fallBack}>
          <Text style={styles.title}>Such dir zuerst ein Rezept aus</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    padding: 20,
    backgroundColor: "lightgray",
    marginTop: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemSelected: {
    backgroundColor: "lightgreen",
  },
  title: {
    fontSize: 18,
  },
  fallBack: {
    display: "flex",
    alignItems: "center",
  },
});
