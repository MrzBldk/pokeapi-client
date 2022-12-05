import React from 'react'

import styles from './Footer.module.css'

export const Footer = () => {

    const date = new Date()

    return (
        <footer>
            <section className={styles.footerSection}>
                <p className={styles.footerText}>
                    {date.getFullYear()} - MrzBldk
                </p>
            </section>
        </footer>
    )
}