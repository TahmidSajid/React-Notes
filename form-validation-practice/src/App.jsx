import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {

  const validationSchema = Yup.object({
    name: Yup.string().required('Name Required'),
    email: Yup.string().email().required('Email Required'),
    password: Yup.string().required('Password Required'),
  });

  const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
    },
    validationSchema: validationSchema,
    onSubmit: (values,) =>{
      console.log(values);
      formik.resetForm();
    }
  });
  

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} id="name"/>
        </div>
        <p>{formik.errors.name}</p>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} id="email"/>
        </div>
        <p>{formik.errors.email}</p>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} id="password"/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default App
