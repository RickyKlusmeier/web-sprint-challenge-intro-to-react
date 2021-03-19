import React from 'react'
import styled from 'styled-components'

    const StyledHeader = styled.h1 `
    font-size: 3rem;
    color: #282c34;
    `
    const Header = () => {
        return (
         <StyledHeader>Characters</StyledHeader>
        )
    }

    export default Header