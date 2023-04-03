import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assest/person/2.png" alt="" />
          <span className="birthdayText">
            <b>Ved </b>and <b>3 other friend</b> have birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assest/6.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information </h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">NewYoRK</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Medrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friend</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assest/person/1.jpg"
              alt=" "
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assest/person/9.jpg"
              alt=" "
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assest/person/10.jpg"
              alt=" "
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assest/person/8.jpg"
              alt=" "
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assest/person/12.jpg"
              alt=" "
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assest/person/13.jpg"
              alt=" "
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Jhon Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       { profile ? <ProfileRightbar />:<HomeRightbar/>}
      </div>
    </div>
  );
};
