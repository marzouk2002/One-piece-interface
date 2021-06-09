import React from 'react'

export default function Modal({ imgUrl, setImgUrl }) {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) {
            setImgUrl(null)
        }
    }

    return (
        <div onClick={handleClick} className="backdrop">
            <img src={ imgUrl } alt="enlarged img"/>
        </div>
    )
}
