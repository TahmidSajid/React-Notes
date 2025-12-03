import './App.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function App() {
  
  const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Invalid email').required('Required'),
    password:Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    }
  });

  console.log(formik);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="name" name='name' onChange={formik.handleChange} value={formik.values.name}/>
          <p>{formik.errors.name}</p>
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email}/>
          <p>{formik.errors.email}</p>
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" name='password' onChange={formik.handleChange} value={formik.values.password}/>
          <p>{formik.errors.password}</p>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>    
    </>
  )
}

export default App
