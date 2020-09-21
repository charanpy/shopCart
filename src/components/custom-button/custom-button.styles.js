import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background:black;
  color:white;
  border:none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`





export const invertedButtonStyles = css`
  background: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background: black;
    color: white;
    border: none;
  }
`



const googleButtonStyles = css`
  background: #4285f4;
  color: white;

  &:hover {
    background: #357ae8;
    border: none;
  }
`

export const invertedCollection = css`
            ${invertedButtonStyles}
            width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`


export const getButtonStyles = props => {
            if (props.isGoogleSignin) {
                        return googleButtonStyles
            }
            else if (props.invertedAndCollection) {
                        return invertedCollection;
            }
            return props.inverted ? invertedButtonStyles : ButtonStyles;
}


export const CustomButtonContainer = styled.button`
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

  ${getButtonStyles !== null && getButtonStyles !== undefined && getButtonStyles}

`