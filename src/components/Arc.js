import React, { useState, useEffect } from 'react'
import {  Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import Comments from './Comments'

export default function Arc(props) {
    const selected_id = props.location.state.id
    const [ arc, setArc] = useState(null) 
    const isMember = useSelector(state => state.member)

    useEffect(() => {
        fetch(`https://one-piece-encyclo-api.herokuapp.com/api/arc?_id=${selected_id}`)
        .then(res => res.json())
        .then(({_doc, poster}) => {
            setArc({..._doc, poster})
        })
    }, [ selected_id ])

    return (
        <main>
            { arc && <>
                <div className="mt-2 position-absolut">
                    <Link className='text-white' to="/arcs">
                        <i className="fas fa-chevron-left p-1 h1"></i>
                    </Link>
                </div>
                <div className="container bg-primary text-white mt-0 ml-1 mb-4 mx-auto py-3">
                    <h1 className="pt-1">{arc.title}</h1>
                    <hr/>
                    <img className="float-right m-1 mb-4 border border-dark" width="250" src={arc.poster} alt={arc.title}/>
                    <p style={pStyle}>{arc.intro}</p>
                    <hr style={clearStyle}/>
                    <h2>Resume</h2>
                    <p style={pStyle}>{arc.resume}</p>
                    <hr/>
                    <h2>Impact</h2>
                    <p style={pStyle}>{arc.impact}</p>
                    <hr/>
                    { isMember && <Comments comments={arc.comments} contentType='arcs' contentId={arc._id}/> }
                </div>
            </>}
        </main>
    )
}

const pStyle = {fontSize: '1.1rem',  textIndent:'30px'}
const clearStyle= {clear: 'both'}