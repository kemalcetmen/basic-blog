import React, { useState } from 'react'
import styles from './index.module.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import GoBack from '../../components/GoBack';
import { useAppSelector, useAppDispatch } from '../../store'
import { createOnePost } from '../../features/postsSlice'

const Create = () => {
  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const { user } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const createPost = async () => {
    const newPost = {
      title: title,
      body: detail,
      userId: user
    }
    dispatch(createOnePost(newPost))
  }
  return (
    <div className={ styles.container }>
      <GoBack />
      <div className={ styles.content }>
        <div className={ styles.title }>
          <div className={ styles.post_text }>
            Create Post
          </div>
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
          <Button onClick={createPost}variant="contained" disabled={ !title || !detail } startIcon={ <AddIcon /> }>
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Create