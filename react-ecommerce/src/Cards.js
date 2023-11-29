import React from 'react'

function Cards(props) {
    return (
        <div class="row">
            {
                props.data.map((row) => {
                    return (
                        <div class="col-3" style={{ margin: "2%" }}>
                            <div class="card" >
                                <img src={row.img} class="card-img-top" alt="..." style={{ height: "200px" }} />
                                <div class="card-body">
                                    <p class="card-text">{row.name}</p>
                                    <p class="card-text">{row.desc}</p>
                                    <p class="card-text">{row.price}</p>
                                    <button class="btn btn-primary" onClick={() => props.handleCartData(row)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Cards