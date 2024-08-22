import React from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { loginWithGoogle, loginWithFacebook } = useAuth();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold text-primary mb-6 animate-slideIn">Login</h2>
      <button
        onClick={loginWithGoogle}
        className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300 mb-4"
      >
        Login with Google
      </button>
      <button
        onClick={loginWithFacebook}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default LoginPage;
