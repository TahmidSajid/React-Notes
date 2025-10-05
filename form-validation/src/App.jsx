import './App.css'
import { useFormik } from 'formik';

function App() {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: values => {
      console.log(values);
      formik.resetForm();
    }
  })


  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="name" name='name' onChange={formik.handleChange} value={formik.values.name}/>
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email}/>
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" name='password' onChange={formik.handleChange} value={formik.values.password}/>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>    
    </>
  )
}

export default App
