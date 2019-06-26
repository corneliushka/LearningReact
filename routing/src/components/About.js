import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dicta odit quibusdam maiores, nostrum labore eum aperiam quaerat voluptatem natus itaque sint enim sequi quidem eos ratione ex ipsum reiciendis!</p>
        </div>
    )
}

export default Rainbow(About);