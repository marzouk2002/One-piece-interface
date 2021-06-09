import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from './layout/Message'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msgObj: [],
            user_name: '',
            email: '',
            password: '',
            password2: '',
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState(state => {
            return {
                ...state,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { user_name, email, password, password2 } = this.state
        let errors = []

        //Check required fields
        if (!user_name || !email || !password || !password2) {
            errors.push({ msg: 'Please fill in all fields', type: 'warning' })
        }

        //Check for password validation
        if (password2 !== password) {
            errors.push({ msg: 'Sorry, passwords do not match', type: 'warning' })
        }

        //Check for password length
        if (password.length < 6) {
            errors.push({ msg: 'Passwords should be at least 6 characters', type: 'warning' })
        }

        if (errors.length > 0) {
            this.setState(state => {
                return {
                    ...state,
                    msgObj: [...state.msgObj, ...errors]
                }
            })
        } else {
            const toSend = { user_name, email, password }
            fetch('https://one-piece-encyclo-api.herokuapp.com/community/members/register', {
                method: 'POST',
                body: JSON.stringify(toSend),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(data => {
                    this.setState(state => {
                        return {
                            ...state,
                            msgObj: [...state.msgObj, data.msgObj]
                        }
                    })
                })
                .catch(err => console.log(err))

        }
    }

    render() {
        return (
            <main>
                <div className="my-4">
                    <div className="col-md-6 m-auto">
                        <div className="card card-body">
                            <h1 className="text-center mb-3">
                                <i className="fas fa-user-plus"></i> Register
                        </h1>
                            {this.state.msgObj[0] && this.state.msgObj.map((Msg, i) => {
                                return <Message msg={Msg.msg} type={Msg.type} key={i} />
                            })
                            }
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="name"
                                        name="user_name"
                                        className="form-control"
                                        placeholder="Enter User Name"
                                        value={this.state.user_name}
                                        onChange={this.handleChange}
                                    />
                                </div>
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
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Create Password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password2">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="password2"
                                        name="password2"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        value={this.state.password2}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Register
                        </button>
                            </form>
                            <p className="lead mt-4">Have An Account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Register