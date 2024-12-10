import React from 'react'
import Contact from './Contact'

function Contacts() {
    return (
        <div className="online">
            <h6 className="title">
                contact
            </h6>
            <Contact profilePicture="/img/avatar/1.jpg" name="Jhon Doe" />
            <Contact profilePicture="/img/avatar/2.jpg" name="Sarah Smith" />
            <Contact profilePicture="/img/avatar/3.jpg" name="Jane Doe" />

        </div>
    )
}

export default Contacts
