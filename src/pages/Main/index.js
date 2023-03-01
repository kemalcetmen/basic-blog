import React from 'react'
import styles from './index.module.css'
import Posts from '../../components/Posts'
import { useAppSelector } from '../../store'
import CreatePost from '../../components/CreatePost.js'

const Main = () => {
  const { posts } = useAppSelector((state) => state.posts)

  return (
    <div className={ styles.container }>
      <CreatePost />
      <Posts
        posts={ posts }
      />
    </div>
  )
}

export default Main