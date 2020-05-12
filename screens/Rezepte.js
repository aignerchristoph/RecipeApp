import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
import { grey } from "ansi-colors";
// import data from "assets/data/rezepte.json";

const DATA = [
  {
    categoryTitle: "Fleisch",
    data: [
      {
        id: 1,
        title: "Wiener Schnitzerl",
        zutaten: ["Semmelbrösel", "Kalbfleisch", "Mehl", "Salz", "Schmalz"],
        kochzeit: 60,
        image: "wienerSchnitzel.jpg"
      },
      {
        id: 2,
        title: "Cevapcici",
        zutaten: [
          "Faschiertes",
          "Knoblauch",
          "Zwiebeln",
          "Salz",
          "Pfeffer",
          "Oregano",
          "Paprikapulver",
          "Semmelbrösel",
          "Eier"
        ],
        kochzeit: 45,
        image: "wienerSchnitzel.jpg"
      }
    ]
  },
  {
    categoryTitle: "Vegetarisch",
    data: [
      {
        id: 1,
        title: "Eiernockerl",
        zutaten: ["Eier", "Mehl", "Salz", "Wasser"],
        kochzeit: 60,
        image: "wienerSchnitzel.jpg"
      }
    ]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Rezepte() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
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
    marginHorizontal: 12
  },
  item: {
    padding: 20,
    marginVertical: 4,
    backgroundColor: "lightgrey"
  },
  header: {
    fontSize: 32
  },
  title: {
    fontSize: 24
  }
});
