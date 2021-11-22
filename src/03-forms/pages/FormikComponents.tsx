import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikCompoenents = () => {

  return (
    <div>
      <h1>Formik Yup</h1>

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
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component="span" />

              <label htmlFor="email">Email Adress</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="span" />

              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">It Senior</option>
                <option value="it-jr">It Jr.</option>
              </Field>
              <ErrorMessage name="jobType" component="span" />

              <label >
                <Field name="terms" type="checkbox" />
                Terms and conditions
              </label>
              <ErrorMessage name="terms" component="span" />

              <button type="submit">Enviar</button>

            </Form>
          )
        }
      </Formik>
    </div >
  )
}
