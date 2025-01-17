// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { useEffect, useState } from "react";
// import { PostAuth } from "./GetApi";

// export const LoginPage = () => {
//   const [auth, setAuth] = useState({
//     username: "adnan.saeed@ausz-tech.com",
//     password: "office123",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await PostAuth(auth);
//         console.log(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAuth((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <div style={{ margin: "60px 0px 0px 100px" }}>
//         <img src="src/assets/images/logo.png" width="18%" alt="Logo" />
//       </div>
//       <div style={{ margin: "100px 0px 0px 110px" }}>
//         <form style={{ fontSize: "20px" }}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">
//               Username
//             </label>
//             <input
//               style={{ width: "18%", height: "2.5rem" }}
//               type="email"
//               className="form-control"
//               id="username"
//               name="username"
//               value={auth.username}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               style={{ width: "18%", height: "2.5rem" }}
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={auth.password}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             style={{ marginTop: "20px", marginBottom: "20px" }}
//           >
//             Login
//           </button>
//           <br />
//           <button className="btn btn-primary btn1 " type="button">
//             Sign up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { useState } from "react";
// import { PostAuth } from "./GetApi";
// import { useNavigate } from "react-router-dom";

// export const LoginPage = () => {
//   const navigate = useNavigate();
//   // Initializing the state for username and password
//   const [auth, setAuth] = useState({
//     username: "",
//     password: "",
//   });

//   // Handling changes in the input fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAuth((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation logic
//     let validationErrors = {};
//     if (!auth.username) validationErrors.username = "Please fill this field.";
//     if (!auth.password) validationErrors.password = "Please fill this field.";

//     // If there are errors, set them and stop the submission
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const res = await PostAuth(auth); // Assuming PostAuth returns a response object
//       console.log("API Response:", res); // Debug the response

//       if (res.data.code === 200) {
//         // Ensure the response data indicates a successful login
//         if (res.data && res.data.success) {
//           console.log("Login successful:", res.data);
//           navigate("/FirstDiv"); // Navigate to the desired page
//         } else {
//           console.error(
//             "Login failed:",
//             res.data.message || "Invalid username or password."
//           );
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             password: res.data.message || "Invalid username or password.",
//           }));
//         }
//       } else {
//         // Handle non-200 status codes
//         console.error(
//           "Login failed:",
//           res.data.message || "Invalid username or password."
//         );
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           password: res.data.message || "Invalid username or password.",
//         }));
//       }
//     } catch (error) {
//       console.error("Error during login:", error.message || error);
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         password: "An error occurred. Please try again later.",
//       }));
//     }
//   };

//   return (
//     <div>
//       <div style={{ margin: "60px 0px 0px 100px" }}>
//         <img src="src/assets/images/logo.png" width="18%" alt="Logo" />
//       </div>
//       <div style={{ margin: "100px 0px 0px 110px" }}>
//         <form style={{ fontSize: "20px" }} onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">
//               Username
//             </label>
//             <input
//               style={{ width: "18%", height: "2.5rem" }}
//               type="email"
//               className="form-control"
//               id="username"
//               name="username"
//               value={auth.username}
//               onChange={handleInputChange}
//               placeholder="Enter username"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               style={{ width: "18%", height: "2.5rem" }}
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={auth.password}
//               onChange={handleInputChange}
//               placeholder="Enter password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-primary"
//             style={{ marginTop: "20px", marginBottom: "20px" }}
//           >
//             Login
//           </button>
//           <br />
//           <button className="btn btn-primary btn1 " type="button">
//             Sign up
//           </button>
//           <br />
//           <button
//             type="button"
//             className="btn btn-primary"
//             style={{ marginTop: "20px", marginBottom: "20px" }}
//           >
//             Back
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { PostAuth } from "./GetApi";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  // State for username and password
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  // State for validation messages
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // Handling changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuth((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear error message for the specific field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    let validationErrors = {};
    if (!auth.username) validationErrors.username = "Please fill this field.";
    if (!auth.password) validationErrors.password = "Please fill this field.";

    // If there are errors, set them and stop the submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await PostAuth(auth); // Assuming PostAuth returns a response object
      console.log("API Response:", res); // Debug the response

      if (res.data.code === 200) {
        console.log("Login successful:", res.data);
        navigate("/Dashboard"); // Navigate to the desired page
      } else {
        console.error("Login failed:", res.data.message || "Unknown error");
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: res.data.message || "Invalid username or password.",
        }));
      }
    } catch (error) {
      console.error("Error during login:", error.message || error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "An error occurred. Please try again later.",
      }));
    }
  };

  return (
    <div>
      <div style={{ margin: "60px 0px 0px 100px" }}>
        <img src="src/assets/images/logo.png" width="18%" alt="Logo" />
      </div>
      <div style={{ margin: "100px 0px 0px 110px" }}>
        <form style={{ fontSize: "20px" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              style={{ width: "18%", height: "2.5rem" }}
              type="email"
              className="form-control"
              id="username"
              name="username"
              value={auth.username}
              onChange={handleInputChange}
              placeholder="Enter username"
            />
            {errors.username && (
              <div className="text-danger" style={{ fontSize: "14px" }}>
                {errors.username}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              style={{ width: "18%", height: "2.5rem" }}
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={auth.password}
              onChange={handleInputChange}
              placeholder="Enter password"
            />
            {errors.password && (
              <div className="text-danger" style={{ fontSize: "14px" }}>
                {errors.password}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Login
          </button>
          <br />
          <button className="btn btn-primary btn1 " type="button">
            Sign up
          </button>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};
