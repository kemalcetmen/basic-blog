import React from 'react'
import styles from './index.module.css'
import OnePost from '../OnePost'
import { useAppSelector } from '../../store'

const Posts = ({posts}) => {
  const { user } = useAppSelector((state) => state.user)

  return (
    <div className={ styles.container }>
      <ul>
        { posts?.length > 0 ?
          posts.map((post, i) => (
            <li key={ i }>
              <OnePost
                title={ post.title }
                detail={ post.body }
                id={ post.id }
                owner={post.userId === user}
              />
            </li>
          ))
          :
          <div>
            no post
          </div> }
      </ul>
    </div>
  )
}

export default Posts