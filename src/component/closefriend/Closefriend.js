import "./Closefriend.css";

const Closefriend = ({user}) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img className="sideFriendImg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default Closefriend;
