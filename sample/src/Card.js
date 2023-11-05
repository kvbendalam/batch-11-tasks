import React from 'react'

function Card(props) {
    return (
        <div class="card" style={{ width: "100%", top:"5%", backgroundColor: "red", marginTop: "5%" }}>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.desc}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card