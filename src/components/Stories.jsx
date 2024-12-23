import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Story from './Story'
import axios from 'axios';

const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 5
        }
    }
}
function Stories() {
    const [stories, setStories] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      axios.get("/data/stories.json").then(res => {
        setStories(res.data)
        setIsLoaded(true)
      })  
    }, []);


    return (
        <div className="stories">
            <div className="owl-controls">
                <div className="owl-nav">
                    <div className="controllers nxtBtn">
                        <img src="img/icons/arrow-right.svg" alt />
                    </div>
                </div>
            </div>
            { isLoaded ? (
                <OwlCarousel className='owl-theme owl-carousel slider' {...options}>
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
                     {stories.map(story => (
                         <Story title={story.title} image={story.image} profilePicture={story.profilePicture} />
                     ))}
                </OwlCarousel>
            ) : <>No data yet</> }
            
           
        </div>
    )
}

export default Stories
