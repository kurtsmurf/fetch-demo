import { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "react-native";

export const useYesNoAPI = () => {
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAnswer = () => {
    setLoading(true);

    const fetchAnswerAsync = async () => {
      const response = await axios("https://yesno.wtf/api")
      await Image.prefetch(response.data.image)
      setAnswer(response.data.answer);
      setImage(response.data.image);
      setLoading(false);
    }

    fetchAnswerAsync()
  };

  useEffect(fetchAnswer, []);

  return { answer, image, loading, next: fetchAnswer };
};
