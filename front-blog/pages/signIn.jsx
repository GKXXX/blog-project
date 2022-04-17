import { useCallback,useContext } from "react"
import AppContext from "../components/AppContext"
import * as Yup from "yup"
import Header from "../components/Header"
import {Formik,Field,Form} from "formik"

const showErrorForm = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
  email: Yup.string().required()
})

const signIn = () => {
  
  const {signIn} = useContext(AppContext)
  const handleFormSubmit = useCallback(async ({username,password,email}) => {
    console.log("handleSubmit")
    return signIn({username,password,email})
  },[signIn])
  return (
    <div className="container">
      <Header/>
      <h1 >Sign In</h1>
      <Formik
      initialValues={{username:"",password:"",email:""}}
      validationSchema={showErrorForm}
      onSubmit={handleFormSubmit}>
        {({errors,touched}) => (
          <Form>
          <div className="form-control">
          <Field className="form-control"
          id="username"
          name="username"
          placeholder="Entrez votre pseudo">

          </Field>
          </div>
          <div className="form-control">
          <Field className="form-control"
          id="password"
          name="password"
          placeholder="Entrez votre mot de passe"></Field>
          </div>
          <button type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default signIn