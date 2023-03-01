import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

const CreatePost = () => {
    return <Link to={ `/create` } style={{alignSelf: 'flex-end'}}>
        <Button
            variant="contained"
            sx={ {
                width: '150px',
                marginY: 2,
                alignSelf: 'flex-end'
            } }
            startIcon={ <AddIcon /> }>
            New Post
        </Button>
    </Link>
}

export default CreatePost