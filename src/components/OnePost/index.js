import React from 'react'
import styles from './index.module.css'
import { Link } from "react-router-dom";

const OnePosts = ({ title, detail, id, owner }) => {
  return (
    <div className={`${styles.container} ${owner && styles.owner}`}>
      <Link to={ `/post/${id}` }>
        <div className={ styles.title }>
          { title }
        </div>
        <div className={ styles.detail }>
          { detail }
        </div>
      </Link>
    </div>
  )
}

export default OnePosts