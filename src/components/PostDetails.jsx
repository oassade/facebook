import React from 'react'

function PostDetails() {
    return (
        <div className="view view-post-container smaller-margin">
            <div className="view-post">
                <div className="upper">
                    <div className="d-flex">
                        <div className="user">
                            <div className="profile">
                                <img src="img/avatar/5.jpg" alt />
                            </div>
                        </div>
                        <div className="info">
                            <h6 className="name">
                                diana barry
                            </h6>
                            <span className="time">1 hour ago</span>
                        </div>
                    </div>
                    <div className="dots">
                        <div className="dot" />
                    </div>
                </div>
                <div className="desc">
                    <p>Travellimg to the future 🌟 , it's alraedy 2020 🙋‍♂🌈🌴</p>
                </div>
                <div className="post-img">
                    <img src="img/posts/1.jpg" alt />
                </div>
                <div className="actions-container">
                    <div className="action">
                        <div className="icon">
                            <img src="img/icons/thumbs-up.svg" alt />
                        </div>
                        <span>
                            like
                        </span>
                    </div>
                    <div className="action">
                        <div className="icon">
                            <img src="img/icons/comment.svg" alt />
                        </div>
                        <span>
                            comment
                        </span>
                    </div>
                    <div className="action">
                        <div className="icon">
                            <img src="img/icons/share.svg" alt />
                        </div>
                        <span>
                            share
                        </span>
                    </div>
                </div>
                <div className="write-comment">
                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/hero.png" alt />
                        </div>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Write a comment" name id />
                        <div className="media">
                            <div className="icon">
                                <img src="img/icons/camera.svg" alt />
                            </div>
                            <div className="icon">
                                <img src="img/icons/image.svg" alt />
                            </div>
                            <div className="icon">
                                <img src="img/icons/smile-2.svg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails
