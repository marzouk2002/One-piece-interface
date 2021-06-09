import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
import Character from './Character'
import Login from './Login'
import Register from './Register'

class Characters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: []
        }
        this.setLink = this.setLink.bind(this)
    }

    componentDidMount() {
        fetch('https://one-piece-encyclo-api.herokuapp.com/api/characters')
            .then(res=>res.json())
            .then(data=>{
                let arr=[]
                data.forEach(char => {
                    arr.push({
                        ...char._doc,
                        gallery:char.gallery
                    })
                });
                this.setState({characters : arr})
            })

    }

    setLink = (char) => {
        if(this.props.login) {
            return {
                pathname:'/characters/character',
                state:char
            }
        } else {
            return {
                pathname:'/login',
                state: {
                    msg:'Please, log in to gain access to that content',
                    type: 'warning'
                }
            }
        }
    }

    render() {
        return (
            <Router>
            <Route exact path='/characters' render={()=>(
            <main>
                <div className="container text-white">
                <section className="text-center pt-5 pb-3">
                    <h1 className="display-4">Characters</h1>
                    <p className="h4">The One Piece manga and anime series features an extensive cast of characters created by Eiichiro Oda.<br/> Here is a collection of some of the most important ones:</p>
                </section>
                <section className="text-white my-4 row" style={{ backgroundColor: "rgb(0, 90, 250)"}}>
                    {this.state.characters.map((char, i)=>{
                        return (
                        <motion.div className="col-lg-4" key={char._id}
                        initial={{opacity:0, scale:0.8}}
                        animate={{opacity: 1, scale:1}}
                        transition={{delay: 0.2+(i*0.1)}}>
                            <Link to={this.setLink(char)}>
                                <div className="well text-center m-4 py-3 bg-primary rounded">
                                    <img src={char.gallery[0]} alt={char.name}/>
                                    <p className="d-block h5 mt-1 text-white">{char.name}</p>
                                </div>
                            </Link>
                        </motion.div>)
                    })}
                </section>
                </div>
            </main>)
            }/>
            <Route exact path='/login' component={ Login } />
            <Route exact path='/register' component={ Register } />
            <Route path="/characters/character" component={Character}/>
            </Router>
        )
    }
}

Characters.protoType = {
    login: PropTypes.bool
}

const mapStatetoProps = state => {
    return {
        login : state.login
    }
}

export default connect(mapStatetoProps)(Characters)

