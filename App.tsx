import React from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import { useYesNoAPI } from "./useYesNoAPI";

export default function App() {
   const { answer, image, loading, next } = useYesNoAPI()

  const Answer = () => {
    const AnswerText = () => (<Text
      style={{
        fontSize: 100
      }}
    >
      {answer}
    </Text>);

    return <View
      style={{
        height: 200,
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? <ActivityIndicator size="large" color="blue" /> : <AnswerText />}
    </View>;
  };

  const NextButton = () => (
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

  return (
    <View style={styles.container}>
      <Image 
        source={{
          uri: image
        }}
        style={{
          flex: 2,
          height: 300,
          width: '100%'
        }}
      />
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
