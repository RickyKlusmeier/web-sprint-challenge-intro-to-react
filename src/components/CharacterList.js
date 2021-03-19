import React from 'react'
import Character from './Character'
import styled from 'styled-components'

export default function CharacterList({charData}) {

    return(
        <>
        {charData.map((char) => {
            return <Character key = {char.created} charObj={char} />
        })}
        </>
  )
}


