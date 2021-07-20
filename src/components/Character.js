import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Modal from './layout/Modal'
import { useSelector } from 'react-redux'
import Comments from './Comments'

export default function Character(props) {
    const selected_id = props.location.state.id
    const [ character, setCharacter] = useState(null) 
    const [imgUrl, setImgUrl] = useState(null)
    const isMember = useSelector(state => state.member)

    useEffect(() => {
        fetch(`https://one-piece-encyclo-api.herokuapp.com/api/character?_id=${selected_id}`)
        .then(res => res.json())
        .then(({_doc, gallery}) => {
            setCharacter({..._doc, gallery})
        })
    }, [ selected_id ])

    return (
         <main>
            { character && <><div className="mt-2 position-absolut">
                <Link className='text-white' to="/characters">
                    <i className="fas fa-chevron-left p-1 h1"></i>
                </Link>
            </div>
            <div className="container bg-primary text-white mt-0 ml-1 mb-4 mx-auto py-3">
                <h1 className="pt-1">{character.name}</h1>
                <hr/>
                <img className="float-right m-1 mb-4 border border-dark img" onClick={()=>{setImgUrl(character.gallery[1])}} width="200" src={character.gallery[1]} alt={character.name}/>
                <p style={pStyle}>{character.intro}</p>
                <hr style={clearStyle}/>
                <h2>Appearance</h2>
                <img className="float-left m-1 mb-4 border border-dark img" onClick={()=>{setImgUrl(character.gallery[3])}} width="200" src={character.gallery[3]} alt={character.name}/>
                <p style={pStyle}>{character.appearance}</p>
                <hr style={clearStyle}/>
                <h2>Personality</h2>
                <img className="float-right m-1 mb-4 border border-dark img" onClick={()=>{setImgUrl(character.gallery[2])}} width="200" src={character.gallery[2]} alt={character.name}/>
                <p style={pStyle}>{character.personality}</p>
                <hr style={clearStyle}/>
                <h2>Abilities</h2>
                <img className="float-left m-1 mb-4 border border-dark img" onClick={()=>{setImgUrl(character.gallery[4])}} width="200" src={character.gallery[4]} alt={character.name}/>
                <p style={pStyle}>{character.abilities}</p>
                <hr style={{clear: 'both', margin: 0}}/>
                { isMember && <Comments comments={character.comments} contentType='characters' contentId={character._id}/> }
            </div>
            { imgUrl && <Modal imgUrl={imgUrl} setImgUrl={setImgUrl}/>}</> }
        </main>
    )
}

const pStyle = {fontSize: '1.1rem',  textIndent:'30px'}
const clearStyle= {clear: 'both'}