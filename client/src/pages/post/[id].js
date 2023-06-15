import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../redux/actions/postAction";
import LoadIcon from "../../images/loading.gif";
import PostCard from "../../components/PostCard";
import { Link } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const { auth, detailPost } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost({ detailPost, id, auth }));

    if (detailPost.length > 0) {
      const newArr = detailPost.filter((post) => post._id === id);
      setPost(newArr);
    }
  }, [detailPost, dispatch, id, auth]);

  return (
    <div className="posts detail-po">
      <div className="left-de">
        <div className="home_left">
          <div className="profile-con">
            <div className="profile-photo1">
              <img
                src="https://res.cloudinary.com/dw1sniewf/image/upload/v1669720008/noko-social/audefto1as6m8gg17nu1.jpg"
                alt="img"
              ></img>
            </div>
            <div className="handle">
              <span>Diana Ayi</span>
              <p className="text-muted1">@dayi</p>
            </div>
          </div>

          <div className="sidebar">
            <div className="menu-item">
              <span>
                <i className="uil uil-home"></i>
              </span>{" "}
              <span className="menu-item-name">
                <Link to="/" className="logo">
                  Home
                </Link>{" "}
              </span>
            </div>
            <div className="menu-item active">
              <span>
                <i className="uil uil-compass"></i>
              </span>
              <span className="menu-item-name">Explore</span>
            </div>
            <div className="menu-item " id="notifications">
              <span>
                <i className="uil uil-bell">
                  <small className="notification-count">9+</small>
                </i>
              </span>
              <span className="menu-item-name">Notifications</span>

              <div className="notifications-popups">
                <div>
                  <div className="profile-photo">
                    {/* <img src="./images/profile-2.jpg" alt=""> */}
                  </div>
                  <div className="notification-body">
                    <b>Keko Benjamin</b> accepted your friend request
                    <small className="text-muted">2 DAYS AGO </small>
                  </div>
                </div>
                <div>
                  <div className="profile-photo">
                    {/* <img src="./images/profile-3.jpg" alt=""> */}
                  </div>
                  <div className="notification-body">
                    <b>John Doe</b> commented on your post
                    <small className="text-muted">1 HOUR AGO </small>
                  </div>
                </div>
                <div>
                  <div className="profile-photo">
                    {/* <img src="./images/profile-4.jpg" alt=""> */}
                  </div>
                  <div className="notification-body">
                    <b>Keko Benjamin</b> accepted your friend request
                    <small className="text-muted">2 DAYS AGO </small>
                  </div>
                </div>
                <div>
                  <div className="profile-photo">
                    {/* <img src="./images/profile-5.jpg" alt=""> */}
                  </div>
                  <div className="notification-body">
                    <b>Keko Benjamin</b> accepted your friend request
                    <small className="text-muted">2 DAYS AGO </small>
                  </div>
                </div>
                <div>
                  <div className="profile-photo">
                    {/* <img src="./images/profile-6.jpg" alt=""> */}
                  </div>
                  <div className="notification-body">
                    <b>Keko Benjamin</b> accepted your friend request
                    <small className="text-muted">2 DAYS AGO </small>
                  </div>
                </div>
                <div>
                  <div className="profile-photo">
                    {/* <img src="./images/profile-7.jpg" alt=""> */}
                  </div>
                  <div className="notification-body">
                    <b>Keko Benjamin</b> accepted your friend request
                    <small className="text-muted">2 DAYS AGO </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-item" id="messages-notifications">
              <span>
                <i className="uil uil-envelope-alt">
                  <small className="notification-count">6+</small>{" "}
                </i>
              </span>
              <span className="menu-item-name">Messagse</span>
            </div>
            <div className="menu-item">
              <span>
                <i className="uil uil-bookmark"></i>
              </span>
              <span className="menu-item-name">Bookmarks</span>
            </div>
            <div className="menu-item">
              <span>
                <i className="uil uil-chart-line"></i>
              </span>
              <span className="menu-item-name">Analytics</span>
            </div>
            <div className="menu-item">
              <span>
                <i className="uil uil-palette"></i>
              </span>
              <span className="menu-item-name">Theme</span>
            </div>
            <div className="menu-item">
              <span>
                <i className="uil uil-setting"></i>
              </span>
              <span className="menu-item-name">Settings</span>
            </div>
          </div>

          <label for="create-post" className="btn btn-primary">
            Create Post
          </label>
        </div>
      </div>
      <div className="post-detail">
        {post.length === 0 && (
          <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
        )}

        {post.map((item) => (
          <PostCard key={item._id} post={item} />
        ))}
      </div>
    </div>
  );
};

export default Post;
