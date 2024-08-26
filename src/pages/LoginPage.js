import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FaGoogle } from 'react-icons/fa'; // React icons for social media logos

const LoginPage = () => {
  const { loginWithGoogle } = useAuth();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-primary text-center mb-6 animate-slideIn">
          Sign In
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Sign in to your account to continue.
        </p>
        
        <div className="flex flex-col space-y-4">
          <button
            onClick={loginWithGoogle}
            className="flex items-center justify-center w-full bg-red-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            <FaGoogle className="mr-3 text-lg" />
            Continue with Google
          </button>

          {/* Additional OAuth buttons can be added similarly */}
          {/* Example for Facebook (uncomment if needed)
          <button
            onClick={loginWithFacebook}
            className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <FaFacebook className="mr-3 text-lg" />
            Continue with Facebook
          </button>
          */}
        </div>

        <hr className="my-6 border-gray-300" />

        <p className="text-gray-600 text-center">
          Don't have an account?{' '}
          <a
            href="https://accounts.google.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Sign Up with Google
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
