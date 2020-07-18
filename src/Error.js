import React from 'react'

const Error = ({error}) => {
    if(error === 'error'){
        throw new Error('catch error')
    }
    return (
        <div>
            {error}
        </div>
    )
}

export default Error;
