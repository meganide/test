import React from 'react'
import Grid from './Grid'



export default function Hero() {
    return (
        <section className="hero">
            <section className="wrapper hero-container">
                <div className="hero-left">
                    <h1 className="hero-title">Innovating for <span className="color-change">Meaningful</span> Value</h1>
                    <p className="hero-para">Exploring the nature of value and how it is disclosed in knowledge-intensive businesses by bridging the gap between theory and practice.
                    </p>
                </div>
                <Grid />
            </section>
        </section>

    )
}

