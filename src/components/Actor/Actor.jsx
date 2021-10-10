import React from "react";
import './Actor.css';

const Actor = ({name, as}) => {
    return (
        <>
            <div className="cast">
                <div className="cast__actor">{name}</div>
                <div className="cast__as">{`as ${as}`}</div>
            </div>
        </>
    )
}

export default Actor;