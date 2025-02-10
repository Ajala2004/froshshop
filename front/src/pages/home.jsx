import React, { useState } from 'react'
import Card from './card'

const home = () => {
    const [searchQuery, setsearchQuery] = useState("")
    return (
        <div>

            <div>
                <input
                    type="text"
                    placeholder="search for products..."
                    value={searchQuery}
                    className="search"
                    
                    onChange={(e) => setsearchQuery(e.target.value)}
                />
                <img src="/public/menbanner.jpg" alt="" width={"100%"} />
            </div>
            <div>
                <h4 className='popular'>products</h4>

                <div className="card-div">
                    <p>laptop</p><br />
                    <div className="cardd">
                        <Card category="laptop" searchQuery={searchQuery} />
                    </div>
                </div>
                <div className="card-div">
                    <p>watch</p><br />
                    <div className="cardd">
                        <Card category="watch" searchQuery={searchQuery} />
                    </div>
                </div>
                <div className="card-div">
                    <p>television</p><br />
                    <div className="cardd">
                        <Card category="television" searchQuery={searchQuery} />
                    </div>
                </div>
                <div className="card-div">
                    <p>game</p><br />
                    <div className="cardd">
                        <Card category="game" searchQuery={searchQuery} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default home
