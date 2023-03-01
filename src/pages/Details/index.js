import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import GoBack from '../../components/GoBack';
import axios from "axios"
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store'
import DeletePost from '../../components/DeletePost';
import { useNavigate } from "react-router-dom";

const Details = () => {
  const { pathname } = useLocation();
  const { posts } = useAppSelector((state) => state.posts)
  const { user } = useAppSelector((state) => state.user)

  const id = pathname.replace("/post/", "")
  const post = posts.find(post => post.id === Number(id))
  const [comments, setComments] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setComments(data)
    }
    fetchData()
  }, [id])

  return (
    <div className={ styles.container }>
      <GoBack />
      {
        posts.find(post => post.id === Number(id))
          ?
          <div className={ styles.content }>
            <div className={ styles.title }>
              <div className={ styles.post_text }>
                Post
              </div>
              {
                post?.userId === user &&
                <div className={ styles.buttons }>
                  <DeletePost id={ post?.id } />
                  <Button onClick={ () => navigate(`/update/${post?.id}`) } variant="contained" startIcon={ <CreateIcon /> }>
                    Update
                  </Button>
                </div>
              }
            </div>
            <div className={ styles.inner }>
              <div className={ styles.post }>
                <p>
                  <strong>
                    { post?.title }
                  </strong>
                  <br />
                  { post?.body }
                </p>
              </div>
              <h4>Comments</h4>
              <ul className={ styles.comments }>
                {
                  comments.map(comment =>
                    <li key={ comment.id }>
                      <div>{ comment.name }</div>
                      <div>{ comment.body }</div>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          :
          <div className={ styles.not }>
            The post doesn't exist
          </div>
      }
    </div>
  )
}

export default Details