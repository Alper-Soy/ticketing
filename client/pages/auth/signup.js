import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const Signup = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    doRequest();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Signup</h1>
      <div className='form-group'>
        <label>Email Address</label>
        <input
          type='email'
          className='form-control'
          name='email'
          value={email}
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          name='password'
          value={password}
          onChange={onChange}
        />
      </div>
      {errors}
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};

export default Signup;
