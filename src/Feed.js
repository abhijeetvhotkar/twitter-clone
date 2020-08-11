import React from 'react';
import "./Feed.css";
import TweetBox from './TweetBox.js'
import Post from './Post.js'

function Feed() {
    return (
        <div className="feed">
        
        {/* Header */}
        <div className="feed__header">
            <h2>Home</h2>
        </div>

        {/* Tweet box */}
        <TweetBox/>


        {/* Post */}
        <Post/>

        </div>
    )
}

export default Feed
