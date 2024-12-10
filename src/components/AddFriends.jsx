import React from 'react'

function AddFriends() {
  return (
    <div className="view friends smaller-margin">
                    <div className="upper">
                        <h6>people you may know</h6>
                        <div className="dots">
                            <div className="dot" />
                        </div>
                    </div>
                    <div className="owl-carousel owl-theme people">
                        <div className="item">
                            <div className="person-img">
                                <div className="icon">
                                    ×
                                </div>
                                <img src="img/avatar/1.jpg" alt />
                            </div>
                            <div className="info">
                                <h4>
                                    rosie pie
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>
                        {/**/}
                        <div className="item">
                            <div className="person-img">
                                <div className="icon">
                                    ×
                                </div>
                                <img src="img/avatar/4.jpg" alt />
                            </div>
                            <div className="info">
                                <h4>
                                    sarah jones
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>
                        {/**/}
                        <div className="item">
                            <div className="person-img">
                                <div className="icon">
                                    ×
                                </div>
                                <img src="img/avatar/3.jpg" alt />
                            </div>
                            <div className="info">
                                <h4>
                                    chris doe
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>
                        {/**/}
                        <div className="item">
                            <div className="person-img">
                                <div className="icon">
                                    ×
                                </div>
                                <img src="img/avatar/2.jpg" alt />
                            </div>
                            <div className="info">
                                <h4>
                                    katie adam
                                </h4>
                                <span>4 mutual friend</span>
                                <button>
                                    add friend
                                </button>
                            </div>
                        </div>
                        {/**/}
                    </div>
                </div>
  )
}

export default AddFriends
