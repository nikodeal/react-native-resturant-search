import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import yelp from "../api/yelp";
import { Feather } from "@expo/vector-icons";

const ResultsShowScreen = ({ navigation }) => {
  const [state, setState] = useState(null);
  const id = navigation.getParam("id");
  console.log(state);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setState(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!state) {
    return null;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
  
  
      <Text style={styles.name}>{state.name}</Text>
      {state.transactions ? (
        <View style={styles.optionView}>
          <Text style={styles.option}>Options :</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${state.phone}`);
            }}
          >
            <Feather name="phone" style={styles.iconStyle} />
          </TouchableOpacity>

         {state.transactions[0] ? 
          <Text style={styles.tran}>
            {state.transactions[0]}
          </Text> : null}
          {state.transactions[1] ?   <Text style={styles.tran}>
            { state.transactions[1]}
          </Text> : null}
       
        </View>
      ) : null}

      <FlatList
        style={{ maxHeight: 350 }}
        data={state.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />

      <Text style={styles.adress}>
        {state.location.display_address[0]}, {state.location.display_address[1]}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 10,
    color: "#1f4068",
    left: 0,
  },
  statusOpen: {
    alignSelf: "flex-end",
    right: 6,
    color: "blue",
    fontWeight: "bold",
  },
  statusClosed: {
    alignSelf: "flex-end",
    right: 6,
    color: "red",
    fontWeight: "bold",
  },
  optionView: {
    marginTop: -10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  option: {
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f4068",
  },
  tran: {
    margin: 10,
    backgroundColor: "#1b1c25",
    color: "white",
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  image: {
    height: 180,
    width: 280,
    alignSelf: "center",
    marginVertical: 5,
    borderRadius: 5,
  },
  adress: {
    textAlign: "center",
    color: "#1b1c25",
    fontWeight: "bold",
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 30,
    color: "#1b1c25",
  },
});
export default ResultsShowScreen;
