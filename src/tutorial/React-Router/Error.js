import React from 'react'
import { Link} from "react-router-dom";
function Error() {
    return (
        <div>
            <h2>error 404</h2>
            <Link to="/" className='btn'>
                Go back to homePage
            </Link>
        </div>
    )
}

export default Error
