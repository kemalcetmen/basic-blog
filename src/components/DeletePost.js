import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { deleteOnePost } from '../features/postsSlice'
import { useAppDispatch } from '../store'
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const DeletePost = (id) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const deletePost = async (id) => {
        dispatch(deleteOnePost(id))
        navigate("/");
    }

    return (
        <>
            <Button
                onClick={ handleOpen }
                variant="contained" color="error"
                startIcon={ <DeleteIcon /> }>
                Delete
            </Button>
            <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ style }>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Do you want to delete the post
                    </Typography>
                    <Box sx={ { display: 'flex', justifyContent: 'flex-end', marginTop: 4 } }>
                        <Button
                            onClick={ () => deletePost(id) }
                            sx={ { marginRight: 2 } }
                            variant="contained"
                            color="error"
                            startIcon={ <DeleteIcon /> }>
                            Delete
                        </Button>
                        <Button
                            onClick={ handleClose }
                            variant="contained">
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default DeletePost