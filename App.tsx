import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";

export default function App() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAnAnswer = () => {
    setLoading(true);

    axios("https://yesno.wtf/api")
      .then((response) => response.data.answer)
      .then(setAnswer)
      .then(() => setLoading(false));
  };

  useEffect(fetchAnAnswer, []);

  const Answer = () => (
    <View style={{
      height: 200,
      flex: 2,
      alignItems: "center",
      justifyContent: "center"
    }}>
      {loading ? <ActivityIndicator /> : <Text
        style={{
          fontSize: 100,
        }}
      >
        {answer}
      </Text>}
    </View>
  );

  const NextButton = () => (
    <View       style={{
        flex: 1
    }}
>
      <Button
        disabled={loading}
        title="next"
        onPress={fetchAnAnswer}
      />
    </View>
  )

  return (
    <View style={styles.container}>
      <Answer />
      <NextButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
