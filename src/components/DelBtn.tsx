import { useDispatch } from "react-redux";
import { deleteUser } from "../store/userSlice";

const DelBtn = ({ userID }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(userID));
  };
  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DelBtn;
