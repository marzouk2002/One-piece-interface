import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { setInfo, isMember, isLogged } from '../actions'
import Message from './layout/Message'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state= {
            msgObj: [],
            email: '',
            password: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleGuests=this.handleGuests.bind(this)
    }

    componentDidMount() {
        if(this.props.location.state) {
            this.setState(state => {
                return  {
                    ...state,
                    msgObj: [ this.props.location.state ]
                  }
              })
        }
    }

    handleChange = (e) => {
        this.setState(state => {
          return  {
              ...state,
              [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit= (e) => {
        e.preventDefault()
        
        const { email, password } = this.state
        let errors = []

        if(!email || !password) {
            errors.push({msg : 'Please fill in all fields', type: 'warning'})
        }

        if(errors.length>0) {
            this.setState(state => {
                return  {
                    ...state,
                    msgObj: [ ...state.msgObj, ...errors]
                  }
              })
        } else {
            fetch('https://one-piece-encyclo-api.herokuapp.com/community/members/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'}
            }).then(res=>res.json())
                .then(data=>{
                    this.setState(state => {
                        return {
                            ...state,
                            msgObj: [...state.msgObj, data.msgObj]
                        }
                    })
                    if(data.status) {
                        this.props.disInfo(data.memData)
                        this.props.disLogged(true)
                        this.props.disMember(true)
                    }
                })
                .catch(err=> console.log(err))
        }
    }

    handleGuests= (e) => {
        e.preventDefault()
        this.props.disLogged(true)
        this.props.disInfo({user_name: 'Guest'})
        this.setState(state => {
            return  {
                ...state,
                msgObj: [ ...state.msgObj,
                   {
                msg:'Welcome, you are logged in as a Guest. Enjoy the content!',
                type: 'success'
            }]
              }
          })
    }

    render() {
        return (
            <main>
                <div className="mt-5">
                    <div className="col-md-6 m-auto">
                        <div className="card card-body bg-white font-weight-bold">
                        <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>  Login</h1>
                        { this.state.msgObj.length>0 && this.state.msgObj.map((Msg, i)=> {
                            return <Message msg={Msg.msg} type={Msg.type} key={i}/> })
                        } 
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            </div>
                            <button type="submit"className="btn btn-primary btn-block">Login</button>
                        </form>
                        <p className="lead mt-4">
                            No Account? <Link to="/register">Register</Link> or <Link to='/' className="link-success" onClick={this.handleGuests}>Login as a Guest</Link>
                        </p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

Login.protoType = {
    disLogged: PropTypes.func,
    disMember: PropTypes.func,
    disInfo: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
    return {
        disLogged: (bool) => {dispatch(isLogged(bool))},
        disMember: (bool) => {dispatch(isMember(bool))},
        disInfo: (data) => {dispatch(setInfo(data))}
    }
}

export default connect(null, mapDispatchToProps)(Login)