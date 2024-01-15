import { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Footer from "../components/Footer";

import Auth from '../utils/auth';




function Login(props) {

  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, { error }] = useMutation(LOGIN)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <div className="gradient-section">
      <body className="login-body">
        <div className="login-wrapper">
          <form className="login-form" onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input className="login-input" type="text" placeholder="Username" required onChange={handleChange} />
            </div>

            <div className="input-box">
              <input className="login-input" type="password" placeholder="Password" required onChange={handleChange} />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="checkbox-a">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn">
              Login
            </button>

            <div className="register-link">
              <p>
                Don&#39;t have an account? <a href="/signup">Register</a>{" "}
              </p>
            </div>
            {error ? (
              <div>
                <p>The login was unsuccessful. Please try again.</p>
              </div>
            ) : null}
          </form>
        </div>
      </body>
      <Footer />
    </div>
  );
}
export default Login;
