import React from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useYesNoAPI } from "./useYesNoAPI";

export default function App() {
  const { answer, image, loading, next } = useYesNoAPI();

  function AnswerImage() {
    return (
      <Image
        source={{
          uri: image,
        }}
        style={{
          flex: 2,
          height: 300,
          width: "100%",
        }}
      />
    );
  }

  function Answer() {
    function AnswerText() {
      return (
        <Text
          style={{
            fontSize: 100,
          }}
        >
          {answer}
        </Text>
      );
    }

    function ActivityIndicatorOrText() {
      return loading
        ? <ActivityIndicator size="large" color="blue" />
        : <AnswerText />;
    }

    return (
      <View
        style={{
          height: 200,
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicatorOrText />
      </View>
    );
  }

  function NextButton() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Button
          disabled={loading}
          title="next"
          onPress={next}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AnswerImage />
      <Answer />
      <NextButton />
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
