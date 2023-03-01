import React from 'react'
import styles from './index.module.css'
import Posts from '../../components/Posts'
import { useAppSelector } from '../../store'
import CreatePost from '../../components/CreatePost.js'

const MyPosts = () => {
  const { posts } = useAppSelector((state) => state.posts)
  const { user } = useAppSelector((state) => state.user)

  return (
    <div className={ styles.container }>
      <CreatePost />
      <Posts
        posts={ posts.filter(post => post.userId === user) }
      />
    </div>
  )
}

export default MyPosts