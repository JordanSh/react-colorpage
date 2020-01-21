import React from "react"
import styled from "styled-components"

const ColorPage = ({colorsFile, importObjectName}) => {
    const colorsObj = {...colorsFile}
    console.log(Object.keys(colorsObj))

    const mapColors = Object.keys(colorsObj).map((key,index)=>{
        const colorCode = colorsObj[key]
            return(
            <ColorDiv colorCode={colorCode} key={index}>
                <KeyName >
                {`\$\{${importObjectName}.${key}\}`}
                </KeyName>
                <ColorName>
                {colorsObj[key]}
                </ColorName>
            </ColorDiv>
            )
    })

    return(
        <Wrapper>
            {mapColors}
        </Wrapper>
    )
}

export default ColorPage

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
background: white;
margin: auto;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
`

const ColorDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: space-evenly;
padding: 5px;
height: calc(25% - 10px);
width: calc(25% - 10px);
margin: 5px;
background: ${({colorCode})=>colorCode};
box-shadow: ${({colorCode})=>colorCode};
overflow-y: auto;

@media (max-width:767px) {
    height: calc(50% - 10px);
    width: calc(50% - 10px);
}
`

const KeyName = styled.div`
flex-basis: 15%;
height: 15%;
width: 100%;
text-align: center;
`

const ColorName = styled.div`
flex-basis: 35%;
height: 35%;
width: 100%;
text-align: center;
`