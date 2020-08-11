import React from 'react';
import "./Post.css"
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    timestamp,
    image,
    avatar
    }) {
    
        return (
            <div className="post">
                <div className="post__avatar">
                    <Avatar src="https://picsum.photos/200"/>
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                Abhijeet Vhotkar {" "} <span><VerifiedUserIcon className="post__badge"/></span>
                            </h3>
                        </div>
                        <div className="post_headerDescription">
                            <p>This is a Twitter Clone</p>
                        </div>
                    </div>
                    <img src="https://picsum.photos/200/200"/>
                    <div className="post_footer">
                        <ChatBubbleOutlineIcon fontSize="small"/>
                        <RepeatIcon fontSize="small"/>
                        <FavoriteBorderIcon fontSize="small"/>
                        <PublishIcon fontSize="small"/>
                    </div>
                </div>
            </div>
    )
}

export default Post;
