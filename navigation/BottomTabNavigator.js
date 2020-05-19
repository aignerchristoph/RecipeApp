import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import Rezepte from "../screens/Rezepte";
import Einkaufsliste from "../screens/Einkaufsliste";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerStyle: {
      backgroundColor: "lightblue"
    },
    headerTintColor: "#fff"
  });
  const [zutaten, setRezept] = React.useState([]);

  const handleRezept = newValue => () => {
    if (!zutaten.includes(...newValue)) {
      setRezept([...zutaten, ...newValue]);
    }
  };

  const rezepteComponent = () => <Rezepte handleRezept={handleRezept} />;
  const listComponent = () => <Einkaufsliste list={zutaten} />;

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={rezepteComponent}
        options={{
          title: "Rezepte",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          )
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={listComponent}
        options={{
          title: "Einkaufsliste",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-basket" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Rezepte";
    case "Links":
      return "Einkaufsliste";
  }
}
