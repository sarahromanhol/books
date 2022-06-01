import React from "react";
import { Modal, ModalBody } from 'reactstrap'
import { Loader } from "../utils/Loader";
import { Author, CloseModalButton, ContentContainer, ModalContainer } from "../../../styles/home";
import Image from 'next/image'
import noBook from '../../../public/assets/noBook.png'

const BookModal = ({ toggle, isOpen, book, isLoading }) => {
  const externalCloseBtn = () => {
    return (
      <CloseModalButton onClick={toggle}>&times;</CloseModalButton>
    )
  }

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      external={externalCloseBtn()}
      size="lg"
      contentClassName='custom-modal-style'
      centered
    >
      <ModalBody >
        {isLoading ? <Loader /> :
          <>
            {book &&
              <ModalContainer>

                <Image src={book?.imageUrl ? book.imageUrl : noBook} width={700} height={700} />

                <ContentContainer>
                  <div>
                    <div className="title" title={book.title}>{book.title}</div>
                    <div>
                      {book.authors.map((item: string, index: number) => <Author>{item}{index !== book.authors.length - 1 ? ', ' : null}</Author>)}
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div >
                      <div className="titleColumn">INFORMAÇÕES</div>
                      <div className="titleColumn">Páginas</div>
                      <div className="titleColumn">Editora</div>
                      <div className="titleColumn">Publicação</div>
                      <div className="titleColumn">Idioma</div>
                      <div className="titleColumn">Título original</div>
                      <div className="titleColumn">ISBN-10</div>
                      <div className="titleColumn">ISBN-13</div>
                    </div>

                    <div className="answerColumn">
                      <div>{book.pageCount} páginas</div>
                      <div>Editora {book.publisher}</div>
                      <div>{book.published}</div>
                      <div>{book.language}</div>
                      <div>{book.title}</div>
                      <div>{book.isbn10}</div>
                      <div>{book.isbn13}</div>
                    </div>
                  </div>

                  <div>RESENHA DA EDITORA</div>
                  <div>{book.description}</div>

                </ContentContainer>
              </ModalContainer >
            }
          </>
        }
      </ModalBody>
    </Modal>
  );
};

export default BookModal

