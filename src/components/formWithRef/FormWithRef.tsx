import { useEffect, useRef, useState } from "react";
import styles from "./FormWithRef.module.scss";
import { useFetch } from "../../hooks/useFetch";

const FormWithRef = () => {
  const [required, setRequired] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputEmailRef = useRef(null);

  if (required) {
    //(() => console.log(form))();
  }

  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }
  );

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

    if (form.name !== "" && form.email !== "" && form.message !== "") {
      setRequired(true);
    }
  };

  const formButtonHandler = (e) => {
    e.preventDefault();
    setForm(JSON.stringify(form));
  };

  //   useEffect(() => {
  //     if (data) {
  //       console.log("Данные успешно отправлены:", data);
  //     }
  //     if (error) {
  //       console.error("Ошибка при отправке данных:", error);
  //     }
  //   }, [data, error]);

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
      <button disabled={!required} type="submit" onClick={formButtonHandler}>
        Send
      </button>
    </form>
  );
};

export default FormWithRef;
