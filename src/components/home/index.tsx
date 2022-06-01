import nookies from 'nookies'
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "../../../node_modules/next/image"
import { useQuery, useQueryClient } from 'react-query'

import logout from '../../../public/assets/logout.svg'
import BookCard from "../../components/home/BookCard"
import prevIcon from '../../../public/assets/Prev.svg'
import nextIcon from '../../../public/assets/Next.svg'
import BookModal from "../../components/home/BookModal"
import bgImage2 from '../../../public/assets/bg-image2.png'
import logoBlack from '../../../public/assets/logoBlack.svg'
import { BooksContainer, Content, Header, HomePage, Pagination } from "../../../styles/home"
import { Loader } from '../utils/Loader'
import { getBookById } from '../../api/books/getBookById'



const Home = ({
  books,
  userName,
  userGender,
  setPageNumber,
  pageNumber,
}) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  const [currentBook, setCurrentBook] = useState('')
  const [open, setOpen] = useState(false);
  const { data: book, isLoading } = useQuery(
    ['book', currentBook],
    () => getBookById(currentBook),
    { retry: 3 }
  )

  const handleOnClick = (id: string) => {
    setCurrentBook(id)
    toggleModal()
  }

  const toggleModal = () => {
    setOpen(!open)
  }

  const Logout = () => {
    nookies.destroy(undefined, 'token')
    nookies.destroy(undefined, 'userName')
    nookies.destroy(undefined, 'userGender')
    router.push('/')
  }

  const handlePagination = (func) => {
    if (func === 'add') {
      setPageNumber(pageNumber + 1)
    } else {
      setPageNumber(pageNumber - 1)
    }
    queryClient.invalidateQueries('books')
  }

  return (
    <HomePage image={bgImage2}>
      <Content >

        <Header>
          <div className="d-flex align-items-center mb-4">
            <Image src={logoBlack} width={104} height={36} />
            <span>Books</span>
          </div>
          <div className="d-flex align-items-center">
            <p>Bem vind{userGender === 'M' ? 'o' : 'a'}, <b>{userName}</b></p>
            <a onClick={Logout}>
              <Image src={logout} width={32} height={32} quality={100} />
            </a>
          </div>
        </Header>

        {books ?
          <BooksContainer>
            {books.map((item, index: number) => {
              return (
                <BookCard
                  key={index}
                  onClick={() => handleOnClick(item.id)}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  authors={item.authors}
                  pageCount={item.pageCount}
                  publisher={item.publisher}
                  published={item.published}
                />
              )
            })}
          </BooksContainer>
          :
          <Loader />
        }



        <Pagination>
          <div>Página <b>{pageNumber}</b> de <b>100</b></div>
          <div className="d-flex gap-2">
            <Image src={prevIcon} width={32} height={32} onClick={() => handlePagination('subtract')} />
            <Image src={nextIcon} width={32} height={32} onClick={() => handlePagination('add')} />
          </div>
        </Pagination>
      </Content>

      <BookModal toggle={toggleModal} isOpen={open} book={book} isLoading={isLoading} />
    </HomePage>
  )
}

export default Home