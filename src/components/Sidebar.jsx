import React from 'react'

export const Sidebar = ({loading, locations, setLocation, getLocations, setCoordinates}) => {
    const changeHandler = (event) =>{
        setLocation(event.target.value)

    }

    return (
        <div className="sidebar">
            <form className="sidebar_form">
                <input type="text" placeholder="Location" onChange={changeHandler} />
                <button onClick={(event) => {event.preventDefault(); getLocations()}}>Search</button>
            </form>
            <div className="sidebar_block">
                {
                    loading ?
                    <div className="loading_block">
                        <div className="loading"></div>
                    </div> :
                    locations.map(({display_name, type, lat, lon}, i) =>{
                        return (
                            <div key={ i } className="sidebar_item" onClick={() => setCoordinates([lat, lon])}>
                                <h2>{ display_name }</h2>
                                <p>type: {type}</p>
                            </div>
                        )
                    })

                }
            </div>
            
        </div>
    )
}
