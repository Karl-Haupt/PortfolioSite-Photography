// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from 'react-router-dom';

// export function RequireAuth() {
//   const { isAuthenticated } = useSelector(
//     (state) => state.auth
//   );


//     if (!isAuthenticated) {
//       return <Navigate to="/" />;
//     } else return <Navigate to="/dashboard"/>;
//   }

//   import React, { Fragment } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const RequireAuth = ({ isAdmin, component: Component, ...rest}) => {

//     const { isAuthenticated, loading, user} = useSelector(state => state.auth);

//     return (
//         <Fragment>
//             {loading === false && (
//                 <Route 
//                     {...rest} 
//                     render={props => {
//                         if(isAuthenticated === false) {
//                             return <Navigate to='/login' />
//                         }

//                         if(isAdmin === true && user.role !== 'admin') {
//                             return <Navigate to='/' />
//                         } 
//                         return <Component {...props} />
//                     }}
//                 />
//             )}
//         </Fragment>
//     )
// }

// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const RequireAuth = ({ component: Component, ...rest }) => {
//   const { isAuthenticated, loading, user} = useSelector(state => state.auth);
  
//     render() {
//         return isAuthenticated ? (
//                 <Component/>
//             ): (
//           <Navigate to={{ pathname: "/" }} />
//         );
//       }

// };


// export default RequireAuth;