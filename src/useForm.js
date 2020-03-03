import { useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => {
      setValues({ ...values, [e.target.name]: e.target.value }); // based on the stuff you type in put field you update the value
    }
  ];
}
