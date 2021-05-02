import { useState } from 'react';

const useForm = (initialState) => {
  const [value, setValue] = useState(initialState);

  return [
    value,
    (e) => {
      setValue({
        ...value,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export const UseStateCustomHook = () => {
  const [value, handleChange] = useForm({ email: '', passowrd: '' });
  return (
    <form>
      <label>
        e-mail:
        <input
          style={{ margin: 20 }}
          type="text"
          name="email"
          value={value.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={value.password}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};
