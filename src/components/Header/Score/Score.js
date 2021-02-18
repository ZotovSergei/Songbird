import React from 'react'
import styles from './Score.module.css'

export default function Score(props) {
    const { count } = props;
    return (
        <section id={styles.scoreId} className="score">
            <span className={styles.score__label}>Score: {count}</span>
        </section>
    )
}
