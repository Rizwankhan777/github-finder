import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/getProfile";
import styles from "../UserCard/userCard.module.css";
import UserNotFound from "../NotFound/UserNotFound";
import Loader from "../Loader"

const UserCard = ({ inputValue }) => {
  const { userData, userDataLoading, userDataError } = useSelector(
    (state) => state.getProfileReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(inputValue));
  }, [inputValue]);

  return (
    <div className={styles.mainBox}>
      {userDataLoading ? (  <Loader /> ) : userDataError ? ( <UserNotFound />) : (
        <section className={`${styles.cardBox}`}>
          <div className={styles.img}>
            <img src={userData.avatar_url} alt="" />
          </div>
          <div className={styles.userDetails}>
            <li>Name :  <span> {userData.name}</span>   <a href={userData.html_url} target=""></a></li>
            <li>Followers : <span> {userData.followers} </span>   </li>
            <li>Following : <span> {userData.following}</span>    </li>
            <li>Respostiory : <span> {userData.public_repos} </span> </li>
            <li>View Account : <span> <a href={userData.html_url} target="_blank">Visit Now</a> </span> </li>
          </div>
        </section>
      )}
    </div>
  );
};

export default UserCard;
