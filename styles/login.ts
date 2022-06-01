import styled from "styled-components";
import { Popover, PopoverBody } from 'reactstrap'

type PropTypeLoginPage = {
  image: {
    src: string
  };
};

export const LoginPage = styled.div.attrs((props: PropTypeLoginPage) => ({
  src: props.image.src,
}))<PropTypeLoginPage>`
  background-image: url(${props => props.image.src});
  background-size: cover;
  height: 100vh;

  @media only screen and (max-width: 790px){
    background-position: 45%;
  }

  .contentContainer {
    top: 37vh;

    @media only screen and (max-width: 500px) {
      padding: 0px 20px;
    }
    
    span {
      font-weight: 300;
      font-size: 28px;
      color: #FFFFFF;
      margin-left: 10px;
    }
  }

`

export const PopoverStyled = styled(Popover)`
  background: 'rgba(255, 255, 255, 0.4)';
`

export const PopoverBodyStyled = styled(PopoverBody)`
  color: '#FFFFFF' !important;
  font-weight: 500 !important;
  font-size: 16px !important;
  font-family: Heebo, 'sans-serif';
`

export const PopoverContent = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: '#FFFFFF' !important;
`

export const SubmitButton = styled.button`
  color: #B22E6F;
  border-radius: 44px;
  width: 85px;
  height: 36px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  right: 25px;
  top: 172px;
`


