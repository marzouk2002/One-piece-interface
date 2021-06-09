import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PropTypes } from 'prop-types'
import Episode from './Episode'
import Login from './Login'

class Episodes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            episodes: []
        }
        this.setLink = this.setLink.bind(this)
    }

    componentDidMount() {
        fetch('https://one-piece-encyclo-api.herokuapp.com/api/ep')
            .then(res=>res.json())
            .then(data=>{
                let arr=[]
                data.forEach(episode => {
                    arr.push({
                        ...episode._doc,
                        poster:episode.poster
                    })
                });
                this.setState({episodes : arr})
            })

    }

    setLink = (episode) => {
        if(this.props.login) {
            return {
                pathname: '/episodes/episode',
                state: episode
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
                <Route exact path='/episodes' render={()=>(
                <main>
                    <div className="container text-white">
                        <section className="container text-center pt-5 pb-3">
                            <h1 className="display-4">Episodes
                            </h1>
                            <p className="h4">The One Piece anime series features an extensive cast of episodes.<br/> Here is a collection of some of the most important ones:</p>
                        </section>
                        <section className='text-white my-4' style={{ backgroundColor: "rgb(0, 90, 250)" }}>
                            <div className="h4 pt-3 well row">
                                <div className="col-sm-2  text-center"><p>Number</p></div>
                                <div className="col-sm-10 text-center">Title</div>
                            </div>
                            <hr/>
                            {this.state.episodes.map((episode, i) => {
                                return (
                                <motion.div key={episode._id}
                                initial={{opacity:0, scale:0.8}}
                                animate={{opacity: 1, scale:1}}
                                transition={{delay: 0.2+(i*0.1)}}>
                                    <div className="h5 well row" >
                                        <div className="col-sm-2  text-center"><p>{episode.number}</p></div>
                                        <Link className="col-sm-10 text-center text-white" to={this.setLink(episode)}>{episode.title}</Link>
                                    </div>
                                    <hr/>
                                </motion.div>)
                            })}
                        </section>
                    </div>
                </main>)}/>
                <Route exact path='/login' component={ Login } />
                <Route path="/episodes/episode" component={Episode}/>
            </Router>
        )
    }
}

Episodes.protoType = {
    login: PropTypes.bool
}

const mapStatetoProps = state => {
    return {
        login : state.login
    }
}

export default connect(mapStatetoProps)(Episodes)