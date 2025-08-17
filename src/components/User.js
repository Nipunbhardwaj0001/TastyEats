import { useEffect, useState } from "react";

const User = ({name}) => {
    useEffect(() => {

    }, []);
    
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Ghaziabad</h3>
            <h4>Contact: Nipunbhardwaj0001(github)</h4>
        </div>
    )
}

export default User;