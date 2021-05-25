import React from 'react'
import classes from './Headercomponent.module.css'
import { NavLink } from 'react-router-dom'

const Headercomponent = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            activeClassName={classes.active}
                            to='/Routers'>Routers</NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName={classes.active}
                            to='/Products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Headercomponent;
