import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Login = () => {
  return (
    <div>
      <form>
        <input placeholder="username"></input>
        <input placeholder="password"></input>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
