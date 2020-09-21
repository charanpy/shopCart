
import styled from 'styled-components'



export const AddtoCartButton = styled.button`
                        min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  /* background-color: black;
  color: white; */
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none; 
  cursor: pointer;
  display: flex;
  justify-content: center;

  width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
   &:hover{
               background: black;
               color:white;
   }
`

export const ImageContainer = styled.div`
width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`

export const CollectionItemContainer = styled.div`
width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${ImageContainer} {
      opacity: 0.8;
    }

  ${AddtoCartButton} {
         
            opacity: 0.8;
      display: flex;
      justify-content: center;
      
    }
  }
    `