import { Link } from "react-router-dom";


// display: flex;
//     justify-content: space-around;
//     align-items: center;
//     list-style: none;

const AdminNavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href='/all'>Ver Todo</a></li>
                <Link to="/productos">
                    <li><a href='/productos'>Lista de productos</a></li>
                </Link>
                <li><a href='/vlog'>Vlog</a></li>
                <li><a href='/usuarios'>Usuarios</a></li>
                <li><a href='/ventas'>Ventas</a></li>
                <li><a href='/mensajes'>Mensajes</a></li>
            </ul>
        </nav>
    )
}
export default AdminNavBar;