import React from 'react';
import {
    useLocation
} from "react-router-dom";

function HomeComponent() {
    let location = useLocation()

    return <div>
        HOME
    </div>
}


export default HomeComponent;
