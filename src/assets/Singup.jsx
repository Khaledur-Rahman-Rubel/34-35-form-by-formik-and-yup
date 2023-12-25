import { useFormik } from "formik";
import * as yup from "yup";

export const Singup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "Name must have alleast 2 characters")
        .required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "password must have atleast 6 characters")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");      
  const [password, setPassword] = useState("");
  *******initialValues is formik alternative for this work***** */

  /*   const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }; */
  /*  const handleSubmit = (e) => {
    e.preventDefault();
         const allValue = {
      name,
      email,
      password,
    };
    console.log(allValue); 
  }; */

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <br />
          {formik.touched.name && formik.errors.name && (
            <span>{formik.errors.name}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <br />
          {formik.touched.name && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <br />
          {formik.touched.name && formik.errors.password && (
            <span>{formik.errors.password}</span>
          )}
        </div>
        <button type="submit">signup</button>
      </form>
    </div>
  );
};
