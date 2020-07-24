import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.details}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    marginLeft: 15
  },
  image: {
    borderRadius: 4,
    width: 230,
    height: 150,
   marginBottom: 5
  },
  name: {
    fontWeight: "bold",
    color: '#1f4068',
    fontSize: 16,
    textAlign: 'center'
  },
  details:{
    backgroundColor: '#1b1c25',
    color: 'white',
    textAlign: 'center',
    borderRadius: 50
  }
});
export default ResultDetail;
