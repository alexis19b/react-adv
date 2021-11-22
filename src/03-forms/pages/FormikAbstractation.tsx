import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components/'
import '../styles/styles.css';

export const FormikAbstractation = () => {

  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        //Objeto con valores iniciales
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        //Lo que quiero que haga cuando se haga submit
        onSubmit={(values) => {
          console.log(values);
        }}
        //Las validaciones con yup
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Debe de tener 15 Caraceteres o menos').required('Requerido'),
          lastName: Yup.string().max(10, 'Debe de tener 10 Caracteres o menos').required('Requerido'),
          email: Yup.string().email('Email invalido').required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string().notOneOf(['it-jr'], 'Esta opcion no es permitida').required('Requerido')
        })
        }>
        {
          (formik) => (
            <Form>
              <MyTextInput
                label='First Name'
                name='firstName'
                placeholder="Ingrese su nombre"
              />
              <MyTextInput
                label='Last Name'
                name='lastName'
                placeholder="Ingrese su apellido"
              />
              <MyTextInput
                label='Email'
                name="email"
                placeholder="Ingrese su Email"
                type="email"
              />

              <MySelect label="Job Type" name="jobType">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">It Senior</option>
                <option value="it-jr">It Jr.</option>
              </MySelect>

              <MyCheckbox label='Terms & Conditions' name='terms' />

              <button type="submit">Enviar</button>

            </Form>
          )
        }
      </Formik>
    </div >
  )
}
