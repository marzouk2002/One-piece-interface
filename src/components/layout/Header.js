import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/one-piece-logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { setInfo, isLogged } from '../../actions'

function Header() {
    
    const login = useSelector( state => state.login )
    const info = useSelector( state => state.info )
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(isLogged(false))
        dispatch(setInfo(false))
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0 h5 mb-0">
                <Link className="navbar-brand" to="/"><img src={logo} width='120px'alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home
                            <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/characters">Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/arcs">Arcs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/episodes">Episodes</Link>
                        </li>
                    </ul>
                    {   login ?
                        <div className="d-flex justify-content-center align-center my-lg-0">
                            <Link to='/' onClick={handleLogout} className="h5 text-warning p-2 px-3 my-1">Logout</Link>
                            <div className='card bg-success text-white h4 p-2 px-3 my-1'>
                                <p className="m-auto">{info.user_name}</p>
                            </div>
                        </div>
                            :
                        <div className="form-inline justify-content-center my-2 my-lg-0">
                            <Link to="/login" className="btn btn-warning my-2 mx-1 py-2">Login</Link>
                            <Link to="/register" className="btn btn-success my-2 mx-1 py-2">Register</Link>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header