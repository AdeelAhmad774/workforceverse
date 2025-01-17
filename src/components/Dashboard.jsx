import { NavLink } from "react-router-dom";
import { HandleDropdown } from "./HandleDropdown";

// export const Dashboard = () => {
//   return (
//     <div>
//       <div>
//         <div style={{ margin: "30px", width: "14%" }}>
//           <img src="src/assets/images/logo.png" width="100%" alt="Logo" />
//         </div>

//         <div
//           style={{
//             margin: "100px 0px 0px 25px",
//             fontSize: "20px",
//             width: "14%",
//           }}
//         >
//           <nav
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "15px",
//               listStyle: "none",
//               background: "rgb(214, 244, 253)",
//             }}
//           >
//             <NavLink
//               to="/"
//               style={{
//                 color: "black",
//                 textDecoration: "none",
//               }}
//             >
//               + Home
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Check In/Out
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Attendence
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Leave Management
//             </NavLink>

//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Employee Management
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Loan Management
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Office Holiday
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Reports
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Task Management
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Visitor Management
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Admin
//             </NavLink>
//             <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
//               Upgrade to Premium
//             </NavLink>
//           </nav>
//         </div>
//       </div>
//       <div>
//         <h1>heelo</h1>
//       </div>
//     </div>
//   );
// };
export const Dashboard = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        {/* Left-side content: Image and Navigation Links */}
        <div style={{ width: "16%", marginTop: "30px" }}>
          <div style={{ margin: "5px 0px 0px 30px" }}>
            <img src="src/assets/images/logo.png" width="100%" alt="Logo" />
          </div>

          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              listStyle: "none",
              background: "rgb(214, 244, 253)",
              padding: "10px",
              margin: "100px 0px 0px 40px",
            }}
          >
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              + Home
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Check In/Out
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Attendence
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Leave Management
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Employee Management
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Loan Management
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Office Holiday
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Reports
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Task Management
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Visitor Management
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Admin
            </NavLink>
            <NavLink to="/" style={{ color: "black", textDecoration: "none" }}>
              Upgrade to Premium
            </NavLink>
          </nav>
        </div>
        <div
          className="container"
          style={{
            marginTop: "12vh",
            border: "2px solid red",
            padding: "0px",
          }}
        >
          <div
            style={{
              display: "flex",

              paddingTop: "0px",
            }}
          >
            <p
              style={{
                paddingTop: "8px",
                marginRight: "60%",
                alignItemss: "center",
              }}
            >
              Total Employee:
            </p>

            <div
              style={{
                width: "31.5%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <HandleDropdown></HandleDropdown>
              <input type="date"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
