import React from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div onClick={ goBack } className="bg-[#f5f5f5] rounded-full w-16 h-16 flex justify-center items-center cursor-pointer">
            <HiArrowNarrowLeft size="30" />
        </div>
    )
}

export default GoBack