import { useEffect, useRef, useState } from "react";
import styles from "./FormWithRef.module.scss";
import { useFetch } from "../../hooks/useFetch";

const FormWithRef = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputEmailRef = useRef(null);
  const [url, setUrl] = useState();

  const { data, error } = useFetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  useEffect(() => {
    if (inputEmailRef.current) {
      inputEmailRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const formButtonHandler = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(form));
    //setUrl("https://jsonplaceholder.typicode.com/posts");
  };

  useEffect(() => {
    if (data) {
      console.log("Данные успешно отправлены:", data);
    }
    if (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  }, [data, error]);

  return (
    <form className={styles.form}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Email"
        ref={inputEmailRef}
      />
      <textarea
        onChange={handleChange}
        name="message"
        placeholder="Post message"
      ></textarea>
      <button type="submit" onClick={formButtonHandler}>
        Send
      </button>
    </form>
  );
};

export default FormWithRef;
