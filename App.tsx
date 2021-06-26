import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import axios from "axios";

const useYesNoAPI = () => {
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(true);

  const fetchAnAnswer = () => {
    setLoading(true);

    axios("https://yesno.wtf/api")
      .then((response) => response.data)
      .then((data) => {
        setAnswer(data.answer)
        setImage(data.image)
      })
      .then(() => setLoading(false));
  };

  useEffect(fetchAnAnswer, []);

  return { answer, image, loading, next: fetchAnAnswer }
}

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
