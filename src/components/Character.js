// // Write your Character component here
import React from 'react'
import styled from 'styled-components'

 const Character = ({ charObj }) => {
    
    const StyledChar = styled.div`
    width: 75%;
    margin: 1.5em auto;
    background-color: black;
    display: flex;
    border: 4px solid gray;
    justify-content: space-around;
    opacity: 65%;
    box-shadow: 10px 10px 5px #000;
    }
    h1 {
        color: white;
        font-size: 2.5em;
    }
    h4 {
        color: white;
        font-size: 1.5em;
    }
`

    return (
        <StyledChar>
           
                <h1>Name: {charObj.name}</h1>
               <h4>Birth Year: {charObj.mass}</h4>
          
        </StyledChar>
    )

}

export default Character
