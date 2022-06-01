import Image from 'next/image'
import { useState } from "react"
import { useRouter } from "next/router"
import { useForm } from 'react-hook-form'

import logo from '../../public/assets/Logo.svg'
import { Loader } from "../components/utils/Loader";
import bgImage from '../../public/assets/bg-image.png'
import InputText from "../components/utils/InputText";
import { LoginPage, PopoverBodyStyled, PopoverContent, PopoverStyled, SubmitButton } from "../../styles/login";
import { useUnprotectedPage } from "../hooks/useUnprotectedPage"
import SinginRequest from '../api/auth/Authentication'
import { Popover, PopoverBody } from 'reactstrap'

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  useUnprotectedPage()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const {
    handleSubmit,
    control,
  } = useForm({

  })

  const onSubmit = (values: Inputs) => {
    setIsLoading(true)
    SinginRequest(values, setIsLoading, router, toggle);
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }



  return (
    <LoginPage image={bgImage}>
      <div className="container d-flex flex-column position-relative">
        <div className="row">
          <div className="col-sm-4 position-absolute contentContainer" >
            <div className="d-flex align-items-center mb-5">
              <Image src={logo} width={104} height={36} />
              <span>Books</span>
            </div>
            <div className="d-flex flex-column">
              <form onSubmit={handleSubmit(onSubmit)} >
                <InputText
                  name="email"
                  id="email"
                  control={control}
                  placeholder={'Email'}
                  type={'text'}
                  title={'Email'}
                />
                <InputText
                  name="password"
                  id="password"
                  control={control}
                  placeholder={'Senha'}
                  type={'password'}
                  title={'Senha'}
                />
                <SubmitButton type="submit" >
                  {isLoading ? <Loader /> : 'Enviar'}
                </SubmitButton>
              </form>
              <div id="Popover"></div>
              <PopoverStyled
                target="Popover"
                isOpen={isOpen}
                toggle={toggle}
                placement='bottom-start'
                delay={1}
                
              >
                <PopoverBodyStyled>
                  <PopoverContent>
                    Email e/ou senha incorretos
                  </PopoverContent>
                </PopoverBodyStyled>
              </PopoverStyled>

            </div>
          </div>
        </div>
      </div>
    </LoginPage >
  )
}

