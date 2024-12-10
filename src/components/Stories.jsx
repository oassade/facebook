import React from 'react'
import Story from './Story'

function Stories() {
    return (
        <div className="stories">
            <div className="owl-controls">
                <div className="owl-nav">
                    <div className="controllers nxtBtn">
                        <img src="img/icons/arrow-right.svg" alt />
                    </div>
                </div>
            </div>
            <div className="owl-carousel owl-theme slider">
                <div className="item">
                    <div className="overlay first">
                        <div className="create">
                            <div className="icon">
                                <img src="img/icons/plus.svg" alt />
                            </div>
                            <span>Create a Story</span>
                        </div>
                    </div>
                    <div className="story-image">
                        <img src="img/avatar/hero.png" alt />
                    </div>
                </div>
                <Story title="Script House" image="img/stories/st-1.jpeg" profilePicture="img/avatar/1.jpg" />
                <Story title="Storie two" image="img/stories/st-2.jpeg" profilePicture="img/avatar/2.jpg" />
                <Story title="Storie  three" image="img/stories/st-3.jpeg" profilePicture="img/avatar/3.jpg" />
                <Story title="Storie  four" image="img/stories/st-4.jpg" profilePicture="img/avatar/4.jpg" />
            </div>
        </div>
    )
}

export default Stories
