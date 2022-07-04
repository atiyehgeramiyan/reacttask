import React from 'react';
import './App.css'

import TaskPage from './Pages/Task/TaskPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskStatusProvider from './Stores/Contexts/TaskStatusContext'
import TaskProvider from './Stores/Contexts/TaskContext';


const App = () => {

  return (
    <div>
      <ToastContainer />
      <TaskProvider>
        <TaskStatusProvider>
          <TaskPage />
        </TaskStatusProvider>
      </TaskProvider>
    </div>
  )
}

// const App = () => {

//   const { handleSubmit, register, formState: { errors } } = useForm();

//   const submit = () => {
//     alert("submit");
//   }

//   const firstNameValidation = {
//     ...register("firstName", {
//       required: {
//         value: true,
//         message: "firstName is required"
//       },
//       maxLength: {
//         value: 10,
//         message: "length must be less than 11"
//       },
//       validate: (val) => {
//         if (val.includes("morteza")) {
//           return "error";
//         }
//         return true;
//       }

//     })
//   };

//   return (
//     <div style={{ padding: 100 }}>

//       <form onSubmit={handleSubmit(submit)}>

//         <div className={errors.firstName ? "input-group error" : "input-group"}>
//           <input type="text"  {...firstNameValidation} />
//           {errors.firstName && <label className="error-message">{errors.firstName?.message}</label>}
//         </div>

//         <div className={errors.age ? "input-group error" : "input-group"}>
//           <input type="number" {...register("age", {
//             min: { value: 18, message: "age is less than 18" },
//             max: { value: 40, message: "age is more than 40" }
//           })} />
//           {errors.age && <label className="error-message">{errors.age?.message}</label>}
//         </div>

//         <div className={errors.email ? "input-group error" : "input-group"}>
//           <input type="text" {...register("email", {
//            pattern:{
//             value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//             message: "Invalid email address"
//            }
//           })} />
//           {errors.email && <label className="error-message">{errors.email?.message}</label>}
//         </div>
//         <button className="btn success">Submit</button>

//       </form>
//     </div>
//   )
// }







export default App;



