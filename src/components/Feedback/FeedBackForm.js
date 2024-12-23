// import React from 'react'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'

// const FeedbackForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       feedback: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Name is required'),
//       email: Yup.string().email('Invalid email address').required('Email is required'),
//       feedback: Yup.string().required('Feedback is required'),
//     }),
//     onSubmit: values => {
//       // Handle form submission here (e.g., send data to an API)
//       console.log(values)
//     },
//   })

//   return (
//     <form onSubmit={formik.handleSubmit} className="p-6">
//       <div className="mb-4">
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//           Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           {...formik.getFieldProps('name')}
//           className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//         {formik.touched.name && formik.errors.name && (
//           <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
//         )}
//       </div>

//       {/* Add email and feedback fields similarly */}

//       <button
//         type="submit"
//         className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//         Submit
//       </button>
//     </form>
//   )
// }

// export default FeedbackForm
