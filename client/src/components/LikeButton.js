import React from 'react'
import { useSelector } from 'react-redux'

const LikeButton = ({isLike, handleLike, handleUnLike}) => {
    const { theme } = useSelector(state => state)

    return (
        <>
            {
                isLike
                ? <i className="uil uil-heart text-danger" onClick={handleUnLike}
                style={{filter: theme ? 'invert(1)' : 'invert(0)'}} />
                : <i className="uil uil-heart" onClick={handleLike} />
            }
        </>
    )
}

export default LikeButton
