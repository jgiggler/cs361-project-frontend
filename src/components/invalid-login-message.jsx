import React from 'react';

function Message({isCorrect, count}){
    if (isCorrect === false){

        return <>
    <p className='message2'> Invalid username or password </p>
        
        </>
    }
}

export default Message;