import React, { useState, useEffect } from 'react'
import Avatar from '../Avatar'
import EditProfile from './EditProfile'
import FollowBtn from '../FollowBtn'
import Followers from './Followers'
import Following from './Following'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'

const Info = ({id, auth, profile, dispatch}) => {
    const [userData, setUserData] = useState([])
    const [onEdit, setOnEdit] = useState(false)

    const [showFollowers, setShowFollowers] = useState(false)
    const [showFollowing, setShowFollowing] = useState(false)

    useEffect(() => {
        if(id === auth.user._id){
            setUserData([auth.user])
        }else{
            const newData = profile.users.filter(user => user._id === id)
            setUserData(newData)
        }
    }, [id, auth, dispatch, profile.users])


    useEffect(() => {
        if(showFollowers || showFollowing || onEdit){
            dispatch({ type: GLOBALTYPES.MODAL, payload: true})
        }else{
            dispatch({ type: GLOBALTYPES.MODAL, payload: false})
        }
    },[showFollowers, showFollowing, onEdit, dispatch])
    

    return (
        <div className="info">
            {
                userData.map(user => (
                    <div className="info_container" key={user._id}>
                        <Avatar src={user.avatar} size="supper-avatar" />

                        <div className="info_content">
                            <div className="info_content_title">
                                <span>{user.username}</span>
                                <div className='info-user-edit'>
                                    {
                                        user._id === auth.user._id
                                        ?  <span className="user-edit--link"
                                        onClick={() => setOnEdit(true)}>
                                            Chỉnh sửa trang cá nhân
                                        </span>
                                        
                                        : <FollowBtn user={user} />
                                    }
                                    <i class="user-edit-icon uil uil-setting"></i>
                                </div>
                               
                            </div>

                            <div className="follow_btn">
                                <span className="user-fl-link" onClick={() => setShowFollowers(true)}>
                                    <b>{user.followers.length}</b> người theo dõi
                                </span>
                                <span className="user-fl-link" onClick={() => setShowFollowing(true)}>
                                    Đang theo dõi <b>{user.following.length}</b> người dùng
                                </span>
                            </div>

                            <div className='user-info-desc'>
                                <span>@{user.fullname} <span className="">{user.mobile}</span></span>
                                <span className="">{user.address}</span>
                                <span className="">{user.email}</span>
                                <a href={user.website} target="_blank" rel="noreferrer">
                                    {user.website}
                                </a>
                                <span>{user.story}</span>
                            </div>
                        </div>

                        {
                            onEdit && <EditProfile setOnEdit={setOnEdit} />
                        }

                        {
                            showFollowers &&
                            <Followers 
                            users={user.followers} 
                            setShowFollowers={setShowFollowers} 
                            />
                        }
                        {
                            showFollowing &&
                            <Following 
                            users={user.following} 
                            setShowFollowing={setShowFollowing} 
                            />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Info
