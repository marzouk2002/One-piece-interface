import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Comments(props) {
    const { contentType, contentId } = props
    const [comment, setComment] = useState('')
    const memberId = useSelector(status => status.info.id)
    const memberName = useSelector(status => status.info.user_name)
    const [comments, setComments] = useState(props.comments) 

    const handleChange = (e) => {
        const str = e.target.value
        setComment(str)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const payload = {
            memberName,
            memberId,
            contentId,
            comment,
            contentType
        }

        fetch('https://one-piece-encyclo-api.herokuapp.com/community/comments', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setComments(data)
        })
        setComment('')
    }

    const hoverEffect = (e, bool) => {
        bool ? e.target.classList.add('text-danger') : e.target.classList.remove('text-danger')
    }

    const deleteComment = (e) => {
        const commentId = e.target.dataset.id

        const payload = {
            commentId,
            contentId,
            contentType
        }

        fetch('https://one-piece-encyclo-api.herokuapp.com/community/comments', {
            method: 'DELETE',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            setComments(data)
        })
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Comments</h1>
            <form className="row mx-4" onSubmit={handleSubmit}>
                <div className="form-group mb-3 px-0 col-md-10 ">
                    <input type="text" className="form-control bg-secondary rounded text-dark px-3" value={comment} onChange={handleChange} placeholder="Add Comment..."/>
                </div>
                <button type="submit" className="btn btn-success mb-3 col-md-2" disabled={comment ? false : true}>add</button>
            </form>
            <div>
                {
                    comments.map(commentObj => {
                        return (
                            <div className="card text-dark mb-3 mx-4" key={commentObj.id}>
                                <div className="d-flex">
                                    <div className='card-body p-2'>
                                    <h5 className="card-title mb-1">{commentObj.memberName}</h5>
                                    <p className="card-text ml-1">{commentObj.comment}</p>
                                    </div>
                                    { memberId===commentObj.memberId &&
                                        <div className='m-auto pr-3 text-secondary'>
                                        <i className="fas fa-trash-alt h4" style={{cursor: 'pointer'}}
                                        onMouseEnter={(e)=>{hoverEffect(e, true)}}
                                        onMouseLeave={(e)=>{hoverEffect(e, false)}}
                                        onClick={deleteComment}
                                        data-id={commentObj.id}></i>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Comments