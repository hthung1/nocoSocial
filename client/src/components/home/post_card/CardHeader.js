import React from 'react'
import Avatar from '../../Avatar'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
import { deletePost } from '../../../redux/actions/postAction'
import { BASE_URL } from '../../../utils/config'

const CardHeader = ({post}) => {
    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const history = useHistory()

    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: {...post, onEdit: true}})
    }

    const handleDeletePost = () => {
        if(window.confirm("Are you sure want to delete this post?")){
            dispatch(deletePost({post, auth, socket}))
            return history.push("/")
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`)
    }

    return (
        <div className="card_header">
            <div className="card_header-user">
                <div className='card_header-img'>
                    <Avatar src={post.user.avatar} size="big-avatar" />
                </div>
                <div className="card_name">
                   
                        <Link to={`/profile/${post.user._id}`} >
                            <span className="card-name-user">
                                {post.user.username}
                            </span>
                        </Link>
                  
                    <small className="card-name-time">
                        {moment(post.createdAt).fromNow()}
                    </small>
                </div>
            </div>

            <div className="nav-item dropdown">
                <span className="material-icons" id="moreLink" data-toggle="dropdown">
                    <i className="uil uil-ellipsis-h"></i>
                </span>

                <div className="dropdown-menu edit-cmt">
                    {
                        auth.user._id === post.user._id &&
                        <div>
                            <div className="dropdown-item" onClick={handleEditPost}>
                                <span><i className="uil uil-file-edit-alt"></i></span> Edit Post
                            </div>
                            <div className="dropdown-item" onClick={handleDeletePost} >
                                <span ><i className="uil uil-trash-alt"></i></span> Remove Post
                            </div>
                        </div>
                    }

                    <div className="dropdown-item" onClick={handleCopyLink}>
                        <span><i className="uil uil-copy-alt"></i></span>  Copy Link
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHeader
