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

const signUp = () => {
  
  const {signUp} = useContext(AppContext)
  const handleFormSubmit = useCallback(async ({username,password,email}) => {
    console.log("handleSubmit")
    console.log(username)
    console.log(password)
    console.log(email)
    return signUp({username,password,email})
  },[signUp])
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
          <div className="form-control">
          <Field className="form-control"
          id="email"
          name="email"
          placeholder="Entrez votre adresse mail"></Field>
          </div>
          <button type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default signUp