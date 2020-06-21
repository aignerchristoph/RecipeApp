import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import data from "assets/data/rezepte.json";

const DATA = [
  {
    categoryTitle: "Fleisch",
    data: [
      {
        id: 1,
        title: "Wiener Schnitzel",
        zutaten: [
          { title: "Semmelbrösel", isChecked: false },
          { title: "Kalbfleisch", isChecked: false },
          { title: "Mehl", isChecked: false },
          { title: "Eier", isChecked: false },
          { title: "Schmalz", isChecked: false },
        ],
        kochzeit: 30,
        image: "wienerSchnitzel.jpg",
      },
      {
        id: 2,
        title: "Cevapcici",
        zutaten: [
          { title: "Faschiertes", isChecked: false },
          { title: "Knoblauch", isChecked: false },
          { title: "Zwiebeln", isChecked: false },
          { title: "Pfeffer", isChecked: false },
          { title: "Paprikapulver", isChecked: false },
        ],
        kochzeit: 45,
        image: "Cevapcici.jpg",
      },
    ],
  },
  {
    categoryTitle: "Vegetarisch",
    data: [
      {
        id: 1,
        title: "Eiernockerl",
        zutaten: [
          { title: "Eier", isChecked: false },
          { title: "Mehl", isChecked: false },
          { title: "Salz", isChecked: false },
          { title: "Wasser", isChecked: false },
        ],
        kochzeit: 60,
        image: "wienerSchnitzel.jpg",
      },
    ],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Rezepte(props) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={props.handleRezept(item.zutaten)}>
            <Item title={item.title} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { categoryTitle } }) => (
          <Text style={styles.header}>{categoryTitle}</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 12,
  },
  item: {
    padding: 20,
    marginVertical: 4,
    backgroundColor: "lightgrey",
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});
