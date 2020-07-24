import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMsg] = useResults();

  const filterResultsBy = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.SearchScreen}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}

      <ScrollView>
        <ResultsList results={filterResultsBy("$")} title="Cost Effective" />
        <ResultsList results={filterResultsBy("$$")} title="Bit Pricier" />
        <ResultsList results={filterResultsBy("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  SearchScreen: {
    backgroundColor: "white",
    flex: 1,
  },
});
export default SearchScreen;
