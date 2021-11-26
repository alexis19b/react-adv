
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Regiser Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password1: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, 'El nombre debe tener mas de dos letras').max(15, 'El nombre no debe tener mas de 15 letras').required('Requerido'),
          email: Yup.string().email('Email invalido').required('Requerido'),
          password: Yup.string().min(6, 'El password debe tener al menos 6 caracteres').required('Requerido'),
          password1: Yup.string().oneOf([Yup.ref('password')], 'Los password no son iguales').required('Requerido'),

        })}
      >{
          ({ handleReset }) => (
            <Form>
              <MyTextInput
                label="Nombre"
                placeholder="Ingrese su nombre"
                name="name"

              />

              <MyTextInput
                label="Email"
                placeholder="Ingrese su email"
                name="email"
                type="email"
              />

              <MyTextInput
                label="Password"
                placeholder="Ingrese su password"
                name="password"
                type="password"
              />
              <MyTextInput
                label="Repita su Password"
                placeholder="Repita su password"
                name="password1"
                type="password"
              />

              <button type="submit">Enviar</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </Form>
          )
        }


        {/* <button type="button" onClick={resetForm}>Reset</button> */}
      </Formik>
    </div>
  )
}
