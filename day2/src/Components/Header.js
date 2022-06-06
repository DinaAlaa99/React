import {
    NavLink
} from "react-router-dom";

let Header = () => {
    return (
        <div class=""> 
        <ul>
        <li> < NavLink to = {'/'} > Home </NavLink></li >
        <li> < NavLink to = {'/students/'} > Students </NavLink></li >
        <li > < NavLink to = { '/students/5'} > Students Details </NavLink></li >
        <li > < NavLink to = {  '/about'} > About </NavLink></li >
        <li > < NavLink to = {  '/404'} > Error </NavLink></li >
                </ul>
        </div>
    )
}

export default Header;