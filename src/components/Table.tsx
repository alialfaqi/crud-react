// import DelBtn from "./DelBtn";
// import { Link } from "react-router-dom";

// const Table = ({ data }) => {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>NO</th>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Music Genre</th>
//           <th>Programming Language</th>
//           <th>Frontend Framework</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data?.map((user, index) => (
//           <tr key={user.id}>
//             <td>{index + 1}</td>
//             <td>{user.username}</td>
//             <td>{user.age}</td>
//             <td>{user.favourite_music_genre}</td>
//             <td>{user.preferred_programming_language}</td>
//             <td>{user.best_frontend_framework}</td>
//             <td className="d-flex gap-2">
//               <Link to={`/edit/${user.id}`} className="btn btn-warning">
//                 Edit
//               </Link>
//               <DelBtn userID={user.id} />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;
import { Link } from "react-router-dom";
import DelBtn from "./DelBtn";

interface User {
  id: string;
  username: string;
  age: number;
  favourite_music_genre: string;
  preferred_programming_language: string;
  best_frontend_framework: string;
  // Add other properties of a user object as needed
}

interface TableProps {
  data: User[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>NO</th>
          <th>Name</th>
          <th>Age</th>
          <th>Music Genre</th>
          <th>Programming Language</th>
          <th>Frontend Framework</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.age}</td>
            <td>{user.favourite_music_genre}</td>
            <td>{user.preferred_programming_language}</td>
            <td>{user.best_frontend_framework}</td>
            <td className="d-flex gap-2">
              <Link to={`/edit/${user.id}`} className="btn btn-warning">
                Edit
              </Link>
              <DelBtn userID={user.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
