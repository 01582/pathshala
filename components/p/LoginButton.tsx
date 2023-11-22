'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/modal";
import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/modal';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { button as buttonStyles } from "@nextui-org/theme";
import { useState, useEffect } from 'react';
import { GithubIcon } from '../icons';
import {Checkbox} from "@nextui-org/checkbox";
import { Toaster, toast } from 'sonner'
import axios from 'axios'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/server';
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/dist/components';
const Satoshi = localFont({
  src: './Satoshi.otf',
  display: 'swap',
  })

  const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    })
  
  

export const  LoginButton = () => {
 
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isSelected, setIsSelected] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter()
  const [authStatus, setAuthStatus] =  useState(false)
  function checkAuth() {
  axios.get('/api/verify').then(response => {
    console.log(response.data.auth);
    setAuthStatus(response.data.auth)
  });
  
  }

  const forMobile = "inside"
  const forPc = "outside"

  function Login(){
    if (isSelected == false){
        toast.error('You need to agree the terms and conditions')
        router.refresh();

    }
    else {
        toast.success('Login wih the Kinde')
    }
  }

  function Register(){
    if (isSelected == false){
      toast.error('You need to agree the terms and conditions')
      router.refresh();

    }
    else {
        toast.success('Register with Kinde')
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    handleResize(); // Set initial value on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(authStatus)
  const renderUI = () => {
     if (authStatus === true) {
      // Display UI for authenticated response
      
        toast.error("Sorry the dashboard page is not ready.")
      return (
        <>
        
        <LogoutLink className={buttonStyles({ color: "warning", radius: "sm", variant: "bordered" })}  >Log out</LogoutLink>;
        </>
      )
    } else {
      // Display UI for unauthenticated response
      return (
        <> <LoginLink className={buttonStyles({ color: "warning", radius: "sm", variant: "bordered" })} onClick={Login}>
        Login
      </LoginLink>
      <RegisterLink className={buttonStyles({ color: "secondary",  variant: "ghost" })} onClick={Register}>
        Create account
      </RegisterLink></>
      )
    }
  };


  return (
    <div>
      <Toaster richColors  />
      <Button onClick={checkAuth}>try</Button>
            <Button  className={buttonStyles({ color: "secondary", radius: "full", variant: "ghost" })} onPress={onOpen}> <GithubIcon/> Join</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='auto'  scrollBehavior={isMobile ? 'inside' : 'outside'}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader style={Satoshi.style} className="flex flex-col gap-1 antialiased "><h1 className='anio'>Authentication </h1></ModalHeader>
              <ModalBody>
                  <h1 className='m-4 text-sm'>Privacy Policy</h1>
                  <p style={inter.style} className='m-2 text-sm'>1. Information we collect:
                  Information you provide directly to us: This includes information you provide when you create an account, register for a class, make a payment, or contact us for support. This information may include your name, email address, phone number, mailing address, payment information, and academic information.
                <br></br>  Information we collect automatically: This includes information about your device and browser, your IP address, and your activity on the Services. This information may be collected using cookies, web beacons, and other tracking technologies.

                    </p>            
                    <p className='m-1 text-sm text-gray-400'>2. Your choices:
                    Access and update your information. <br></br>You can access and update your account information by logging into your account on the Services.
Opt out of marketing communications. <br></br> You can opt out of receiving marketing emails from us by clicking on the unsubscribe link at the bottom of any marketing email you receive from us.
Delete your account. You can delete your account by contacting us
                    </p>    

                    <p style={Satoshi.style} className='m-1 text-sm'>3. Data Security:

We take reasonable steps to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee the absolute security of your personal information.

</p>
<Checkbox className='m-3' color='secondary'  isSelected={isSelected} onValueChange={setIsSelected} defaultSelected>I agree with terms and conditions</Checkbox>

              </ModalBody>
              <ModalFooter>
              {renderUI()}
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

