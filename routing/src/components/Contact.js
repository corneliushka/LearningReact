import React from 'react'

const Contact = (props) => {
    console.log(props)
    // setTimeout(() => {
    //    props.history.push('/about')
    // }, 2000) 
    // This is programmatic redirects : after 2 seconds, the user is redirected on the path (object 'history', mathod 'push' + location)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dicta odit quibusdam maiores, nostrum labore eum aperiam quaerat voluptatem natus itaque sint enim sequi quidem eos ratione ex ipsum reiciendis!</p>
        </div>
    )
}

export default Contact;