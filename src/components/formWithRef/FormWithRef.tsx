import { FC, useEffect, useRef, useState } from "react";
import styles from "./FormWithRef.module.scss";
import { useFetch } from "../../hooks/useFetch";

interface IFormState {
  name: string;
  email: string;
  message: string;
}

const FormWithRef: FC = () => {
  const [required, setRequired] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [form, setForm] = useState<IFormState>({
    name: "",
    email: "",
    message: "",
  });

  const inputEmailRef = useRef<HTMLInputElement>(null);

  if (required) {
    //(() => console.log(form))();
  }

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (form.name !== "" && form.email !== "" && form.message !== "") {
      setRequired(true);
    }
  };

  const formButtonHandler = (e: React.ChangeEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUrl("https://jsonplaceholder.typicode.com/posts");
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
      <button disabled={!required} type="submit" onClick={formButtonHandler}>
        Send
      </button>
    </form>
  );
};

export default FormWithRef;
