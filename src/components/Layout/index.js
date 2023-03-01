import React, { useEffect } from 'react'
import styles from './index.module.css'
import Header from "./Header"
import { fetchPosts } from '../../features/postsSlice'
import { useAppDispatch, useAppSelector } from '../../store'
import { Loading, Error } from "./WaitingScreens"

const Layout = ({ children }) => {
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector((state) => state.posts)
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className={ styles.container }>
      <Header />
      <main>
        { !error ?
          !loading
            ?
            children
            :
            <Loading />
          :
          <Error /> }
      </main>
    </div>
  )
}

export default Layout