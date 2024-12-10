import React from 'react'

function Rooms() {
    return (
        <div className="create-post view smaller-margin">
            <div className="upper">
                <div className="title">
                    <div className="icon">
                        <img src="img/icons/video-room.svg" alt />
                    </div>
                    <span>Rooms</span>
                </div>
                <a href>
                    create
                </a>
            </div>
            <div className="owl-carousel owl-theme rooms">
                <div className="item">
                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/hero.png" alt />
                        </div>
                    </div>
                </div>
                {/**/}
                <div className="item">
                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/1.jpg" alt />
                        </div>
                    </div>
                </div>
                {/**/}
                <div className="item">
                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/3.jpg" alt />
                        </div>
                    </div>
                </div>
                {/**/}
                <div className="item">
                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/4.jpg" alt />
                        </div>
                    </div>
                </div>
                {/**/}
                <div className="item">
                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/2.jpg" alt />
                        </div>
                    </div>
                </div>
                {/**/}
                <div className="item">
                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/4.jpg" alt />
                        </div>
                    </div>
                </div>
                {/**/}
                <div className="item">
                    <div className="user">
                        <div className="profile">
                            <img src="img/avatar/5.jpg" alt />
                        </div>
                    </div>
                </div>
                {/**/}
            </div>
        </div>
    )
}

export default Rooms
