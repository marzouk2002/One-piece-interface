import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import { PropTypes } from 'prop-types'
import Arc from './Arc'
import Login from './Login'

class Arcs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arcs: []
        }
        this.setLink = this.setLink.bind(this)
    }

    componentWillMount() {
        fetch('https://one-piece-encyclo-api.herokuapp.com/api/arcs')
            .then(res => res.json())
            .then(data => {
                let arr = []
                data.forEach(arc => {
                    arr.push({
                        ...arc._doc,
                        poster: arc.poster
                    })
                });
                this.setState({ arcs: arr })
            })

    }

    setLink = (id) => {
        if(this.props.login) {
            return {
                pathname: '/arcs/arc',
                state: {id}
            }
        } else {
            return {
                pathname:'/login',
                state: {
                    msg: 'Please, log in to gain access to that content',
                    type: 'warning'
                }
            }
        }
    }

    render() {
        return (
            <Router>
                <Route exact path='/arcs' render={() => (
                    <main>
                        <div className="container text-white">
                            <section className="text-center pt-5 pb-4">
                                <h1 className="display-4">Arcs</h1>
                                <p className="h4">The One Piece manga and anime series by Eiichiro Oda can be broken down into several arcs. Each one features its own story. Here we got a few of them:</p>
                            </section>
                            <section className="text-white my-4 row" style={{ backgroundColor: "rgb(0, 90, 250)" }}>
                                {this.state.arcs.map((arc, i) => {
                                    return (
                                    <motion.div className="col-lg-4" key={arc._id}
                                    initial={{opacity:0, scale:0.8}}
                                    animate={{opacity: 1, scale:1}}
                                    transition={{delay: 0.2+(i*0.1)}}>
                                        <Link to={this.setLink(arc._id)}>
                                            <div className="well text-center m-4 py-3 bg-primary rounded">
                                                <img src={arc.poster} alt={arc.title} height='250' width='200'  style={{objectFit: 'cover'}}/>
                                                <p className="d-block h5 mt-1 text-white">{arc.title}</p>
                                            </div>
                                        </Link>
                                    </motion.div>)
                                })}
                            </section>
                        </div>
                    </main>)}/>
                    <Route exact path='/login' component={Login} />
                    <Route path="/arcs/arc" component={Arc}/>
            </Router>
        )
    }
}

Arcs.protoType = {
    login: PropTypes.bool
}

const mapStatetoProps = state => {
    return {
        login : state.login
    }
}

export default connect(mapStatetoProps)(Arcs)