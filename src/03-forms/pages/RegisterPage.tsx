import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

  const { formData, onChange, resetForm, isValidEmail, name, email, password, password2 } = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Regiser Page</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Name"
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        <input
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {(email.trim().length <= 0 && <span>Este campo es obligatorio</span>) || (!isValidEmail(email) && <span>Email no valido</span>)}
        <input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña debe tener 6 caracteres</span>}
        <input
          type="password"
          value={password2}
          name="password2"
          placeholder="Repeat Password"
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password2.trim().length > 0 && password !== password2 && <span>Las contraseñas deben de ser iguales</span>}
        <button type="submit">Enviar</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}
