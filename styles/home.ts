import styled from 'styled-components'
import { DialogContent } from '@mui/material'
import { Modal } from 'reactstrap';
import Image from 'next/image';

type PropTypeHomePage = {
  image: {
    src: string
  };
};

export const HomePage = styled.div.attrs((props: PropTypeHomePage) => ({
  src: props.image.src,
}))<PropTypeHomePage>`
  background-image: url(${props => props.image.src});
  background-size: cover;
  height: 100vh;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 7vh 5vw 90px 6vw; */
  padding: 40px 80px 90px 105px;

  @media only screen and (max-width: 500px) {
    padding: 40px 25px 40px 25px;
  }

  span {
      font-weight: 300;
      font-size: 28px;
      margin-left: 10px;
    }

    a {
      cursor: pointer;
      margin-left: 20px;
      align-self: center;
    }

    p {
      margin-bottom: 8px;
      @media only screen and (max-width: 690px) {
        display: none;
      }
    }
  
`

export const BooksContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-flow: row wrap;
  justify-content: center;
`

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  align-items: center;
  align-self: flex-end;
  margin-top: 10px;

  div {
    font-weight: 400;
    font-size: 12px;
    color: #333333;
    margin-left: 0px !important;
  }

  .prev-button{
    border: none;
    background: transparent;
  }

  .next-button{
    border: none;
    background: transparent;
  }

`

export const CardContainer = styled.div`
  width: 272px;
  height: 160px;
  background-color: #FFFFFF;
  padding: 15px 10px;
  display: grid;
  grid-template-columns: 4fr 7fr;
  column-gap: 8px;
  border-radius: 4px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);

  @media only screen and (max-width: 500px) {
    width: 310px;
    height: 180px;
  }

  .imageContainer {
    box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.15);
  }

  .title {
    font-weight: 500;
    font-size: 14px;
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 23px;
  }

  .author{
    font-weight: 400;
    font-size: 12px !important;
    color: #AB2680;
    text-align: justify;
    padding: 0;
    margin: 0;
  }

  .detail {
    font-weight: 400;
    font-size: 12px;
    color: #999999;
    text-overflow: ellipsis;
    /* text-align: justify; */
  }
`

export const ModalContainer = styled.div`
  /* max-height: 100%; */
  background-color: #FFFFFF;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  gap: 2rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title{
    color: '#333333';
    font-weight: 500;
    font-size: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .author {
    color: '#AB2680';
    font-weight: 400;
    font-size: 12px;
  }

  .titleColumn {
    color: '#333333';
    font-weight: 500;
    font-size: 12px;
  }

  .answerColumn {
    color: '#999999';
    font-weight: 400;
    font-size: 12px;
    text-align: right;
    margin-top: 20px;
  }
`

export const Author = styled.span`
    color: '#AB2680';
    font-weight: 400;
    font-size: 12px;
`

export const CloseModalButton = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid grey;
  background: '#FFFFFF';
  border-radius: 50px;
  position: absolute;
  top: 15px;
  right: 15px;
`


