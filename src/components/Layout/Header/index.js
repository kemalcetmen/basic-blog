import React from 'react'
import styles from './index.module.css'
import { SiYoutubemusic } from 'react-icons/si';
import { HiBell } from 'react-icons/hi';
import { GrAppsRounded } from 'react-icons/gr';
import { Link } from "react-router-dom";
import { useAppSelector } from '../../../store'

const Layout = () => {
    const { posts } = useAppSelector((state) => state.posts)
    const { user } = useAppSelector((state) => state.user)

    const number = posts.filter(post => post.userId === user).length
    return (
        <div className={ styles.container }>
            <Link to={ `/` }>
                <div className={ styles.left }>
                    <div className={ styles.logo }>
                        <SiYoutubemusic />
                    </div>
                    <h1>
                        Arbit Logo
                    </h1>
                </div>
            </Link>
            <div className={ styles.right }>
                <div className={ styles.posts }>
                    <Link to={ `/myposts` }>
                        <div className={ styles.number_container }>
                            <div className={ styles.number }>
                                { number }
                            </div>
                        </div>
                        Posts
                    </Link>
                </div>
                <div>
                    <HiBell size="25" />
                </div>
                <div>
                    <GrAppsRounded size="25" />
                </div>
                <img alt="my name is elon musk" src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
                loading="lazy" />
            </div>
        </div>
    )
}

export default Layout