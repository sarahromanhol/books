import { parseCookies } from 'nookies'
import React, { useState } from "react"
import { useQuery } from "react-query";

import Home from "../components/home/index"
import { getBooks } from "../api/books/getBooks"
import { Loader } from "../components/utils/Loader";
import { useProtectedPage } from "../hooks/useProtectedPage"

export default function home() {
  useProtectedPage()
  const [pageNumber, setPageNumber] = useState(1)

  const { userName, userGender } = parseCookies()

  const { data: books, isLoading } = useQuery("books", () => getBooks(pageNumber, 24), { retry: false });

  return (
    <>
      {isLoading ? <Loader /> :
        <Home
          books={books}
          userName={userName}
          userGender={userGender}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
        />
      }
    </>

  )
}
