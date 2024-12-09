import React from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

const EndorsementForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      feedback: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      feedback: Yup.string().required('Feedback is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission, e.g., send feedback to an API
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-500"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
        )}
      </div>
      {/* Similar structure for email and feedback fields */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default EndorsementForm