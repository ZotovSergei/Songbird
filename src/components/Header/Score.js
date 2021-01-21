import React from 'react'

export default function Score(props) {
    const { count } = props;
    return (
        <section className="score">
            Score: {count}
        </section>
    )
}
