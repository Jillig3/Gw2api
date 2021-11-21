// import React from "react";

// export default function User(props) {

//     const displayProfile = (props) => {
//         const {info} = props;

//         if (info.length > 0) {
//             return(
//                 info.map((info) => {
//                     console.log(info);
//                     return(
//                         <div className='info' key={info.id}>
//                             <h3 className='info_name'>{info.name}</h3>
//                         </div>
//                     )
//                 })
//             )
//         } else {
//             return (<h3>No Info yet</h3>)
//         }
//     }
//     return(
//         <>
//             {displayProfile(props)}
//         </>
//     )
// }