import React from 'react'
import {  Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import Comments from './Comments'

export default function Episode(props) {
    const episode = props.location.state
    const isMember = useSelector(state => state.member)
    return (
        <main>
            <div className="mt-2 position-absolut">
                <Link className='text-white' to="/episodes">
                    <i clasName="fas fa-chevron-left ml-1 p-1 h1"></i>
                </Link>
            </div>
            <div className="container bg-primary text-white mt-0 mb-4 mx-auto py-3">
                <h1 className="pt-1">Episode {episode.number}</h1>
                <hr/>
                <img className="float-right m-1 mb-4 border border-dark" width="300" src={episode.poster} alt={episode.title}/>
                <p style={pStyle}>{episode.intro}</p>
                <hr style={clearStyle}/>
                <h2>Resume</h2>
                <p style={pStyle}>{episode.resume}</p>
                <hr/>
                { isMember && <Comments comments={episode.comments} contentType='episodes' contentId={episode._id}/> }
            </div>
        </main>
    )
}

const pStyle = {fontSize: '1.1rem',  textIndent:'30px'}
const clearStyle= {clear: 'both'}
