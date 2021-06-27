import { useEffect, useState } from "react";
import axios from "axios";

export const useYesNoAPI = () => {
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAnAnswer = () => {
    setLoading(true);

    axios("https://yesno.wtf/api")
      .then((response) => response.data)
      .then((data) => {
        setAnswer(data.answer);
        setImage(data.image);
      })
      .then(() => setLoading(false));
  };

  useEffect(fetchAnAnswer, []);

  return { answer, image, loading, next: fetchAnAnswer };
};
