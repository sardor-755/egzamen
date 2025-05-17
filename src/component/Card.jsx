import './card.css'
import data from "../../public/data.js"

function Card() {
    return (
        <div className='body'>
            <div className="header">
                <h1>Exclusive</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
            <div className="main">

                {data.map((e, i) => {
             return       <div className="card" key={i}>
                        <img src={e.img} alt="" />
                        <h3> {e.name}</h3>
                        <p>${e.price}</p>
                        <p>rating: {e.reting}</p>
                    </div>
                })}

            </div>
        </div>

    )
}

export default Card
