import React from 'react'


const Err = ({error}) => {
    if(error === 'error'){
      throw new Error('catch error')
    }
    return (
        <div>
            {error}
        </div>
    )
}

export default Err;
