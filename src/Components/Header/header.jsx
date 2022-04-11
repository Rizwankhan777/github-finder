import React from 'react'
import styles from './header.module.css'
const Header = () => {

  return (
    <div className={`container ${styles.header_main}` }>
        <div className="row">
            <div className="col-lg-8 col-12  mx-auto">
                <h2 className={styles.heading_two}>Github User Finder Application </h2>
            </div>
        </div>
    </div>
  )
}

export default Header