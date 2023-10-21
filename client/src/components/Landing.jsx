import { Link } from 'react-router-dom'
import { useState } from 'react'


const Landing = () => {
    return (
        <div>
            <h1>Giuliana Marchiondelli</h1>
            <div>
                <p>Asesoría personalizada en Entrenamientos y nutrición</p>
            </div>
            <Link to='/home'>
                <button>Empezá ahora</button>
            </Link>
        </div>
    )
}

export default Landing;