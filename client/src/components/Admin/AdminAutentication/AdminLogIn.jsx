import { useState } from "react";
import axios from "axios";

const AdminLogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginAdmin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/admin/login', {
                email: email,
                password: password,
            });
            if (response.status === 200){
                alert()
                console.log('Successful login')
            }else{
                console.log('Icorrect credentials')
            }

        } catch (error) {
            console.error('Failed to login', error);
        }
    }

    return (
        <div>
            <div>Hola, soy el adiministrador</div>
            <text>Ingresa el e-mail con el que te has regustrado</text>
            <input placeholder="E-mail" />
            <text>Contraseña</text>
            <input type="password" placeholder="Contraseña" />
            <button onClick={handleLoginAdmin}>Ingresar</button>
        </div>
    )
}

export default AdminLogIn;