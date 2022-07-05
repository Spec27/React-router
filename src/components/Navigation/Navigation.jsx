import {NavLink, Outlet} from "react-router-dom"
import s from "./Navigation.module.css";

const setActive = ({ isActive }) => (isActive ? s.ActiveLink : s.Link);

const Navigation = () => {
    return (
        <>
            <nav>
            <NavLink
                className={setActive}
                to='/'>Home
            </NavLink>

            <NavLink
                className={setActive}
                to='/Author'>Author
            </NavLink>
            
            <NavLink
                className={setActive}
                to='/Books'>Boocs
            </NavLink>
        </nav>  
            <Outlet />
            <footer> 2022 </footer>
        </>
        
    )
}

export default Navigation;