import React from 'react';

function Message({isCorrect, count}){
    if (!isCorrect){

        return <>
    <p className='message2'> Invalid username or password </p>
        
        </>
    }
}

export default Message;