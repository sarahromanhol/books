import React from "react";
import { CardContainer } from "../../../styles/home";
import Image from "next/image"
import noBook from '../../../public/assets/noBook.png'

const BookCard = ({
  onClick,
  imageUrl,
  title,
  authors,
  pageCount,
  publisher,
  published,
}) => {
  return (
    <CardContainer onClick={onClick}>

      {/* <div className="col-md-5 imageContainer"> */}
      <Image src={imageUrl || noBook} width={85} height={115} className="imageContainer" />
      {/* </div> */}

      <div className="d-flex flex-column justify-content-between  flex-grow">
        <div>
          <div className="title" title={title}>{title}</div>
          <div >
            {authors.map((item: string, index: number) => <span className="author">{item}{index !== authors.length - 1 ? ', ' : null}</span>)}
          </div>
        </div>

        <div>
          <div className="detail">{pageCount} páginas</div>
          <div className="detail">{publisher}</div>
          <div className="detail">Publicado em {published}</div>
        </div>
      </div>
    </CardContainer >
  )
}

export default BookCard