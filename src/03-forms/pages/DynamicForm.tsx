import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import *  as Yup from 'yup';


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {}
for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations) continue;
  let schema = Yup.string()
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido')
    }
    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Debe tener minimo ${(rule as any).value || 2} de caracteres`)
    }
    if (rule.type === 'email') {
      schema = schema.email('Email invalido')
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);

        }}
      >
        {(formik) => (
          <Form>
            {
              formJson.map(({ name, label, placeholder, type, options }) => {

                if (type === 'input' || type === 'email' || type === 'password') {

                  return <MyTextInput
                    key={name}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    type={type as any}
                  />
                }
                else if (type === 'select') {
                  return (
                    <MySelect
                      label={label}
                      name={name}
                      key={name}
                    >

                      <option value="">Select an option</option>
                      {
                        options?.map(opt => (
                          <option key={opt.id} value={opt.id}>{opt.label}</option>
                        ))
                      }
                    </MySelect>
                  )
                }
                throw new Error(`El type: ${type}, no es soportado`);

              })
            }

            <button type="submit">Enviar</button>
          </Form>
        )}

      </Formik>

    </div>
  )
}
