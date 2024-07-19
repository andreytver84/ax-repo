import { useEffect, useRef, useState } from "react";
import styles from "./FormWithRef.module.scss";

const FormWithRef = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputEmailRef = useRef(null);

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
      <button>Send</button>
    </form>
  );
};

export default FormWithRef;
