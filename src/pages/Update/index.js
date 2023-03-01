import React, { useState } from 'react'
import styles from './index.module.css'
import CreatePost from '../../components/CreatePost.js'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import GoBack from '../../components/GoBack';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store'
import { updateOnePost } from '../../features/postsSlice'

const Update = () => {
  const { posts } = useAppSelector((state) => state.posts)
  const { user } = useAppSelector((state) => state.user)
  const { pathname } = useLocation()
  const id = pathname.replace("/update/", "")
  const post = posts.find(post => post.id === Number(id))
  const [title, setTitle] = useState(post?.title)
  const [detail, setDetail] = useState(post?.body)

  const dispatch = useAppDispatch()

  const updatePost = () => {
    const newPost = {
      id: post.id,
      title: title,
      body: detail,
      userId: user
    }
    dispatch(updateOnePost(newPost))
  }
  return (
    <>
      { post?.userId === user
        ?
        <div className={ styles.container }>
          <GoBack />
          <div className={ styles.content }>
            <div className={ styles.title }>
              <div className={ styles.post_text }>
                Update Post
              </div>
              <CreatePost />
            </div>
            <div className={ styles.post }>
              <label>
                Title:
                <textarea placeholder='Can not be empty' name="Text1" value={ title } onChange={ e => setTitle(e.target.value) } ></textarea>
              </label>
              <label>
                Detail:
                <textarea placeholder='Can not be empty' name="Text1" value={ detail } onChange={ e => setDetail(e.target.value) } ></textarea>
              </label>
            </div>
            <div className={ styles.buttons }>
              <Button variant="contained" color="error" startIcon={ <DeleteIcon /> }>
                Delete
              </Button>
              <Button onClick={ updatePost } variant="contained" disabled={ !title || !detail || (title === post.title && detail === post.body) } startIcon={ <CreateIcon /> }>
                Update
              </Button>
            </div>
          </div>
        </div>
        :
        <div className={ styles.container }>
          You are not the post owner
        </div> }
    </>

  )
}

export default Update