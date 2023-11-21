"use client"


import React from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { LoginButton } from "@/components/p/LoginButton";
import { Toaster, toast } from 'sonner'
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useState, useEffect } from 'react';
import localFont from 'next/font/local'
import { Work_Sans } from "next/font/google";
import {Image} from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { TinYBird } from "@/components/icons";
import {Skeleton} from "@nextui-org/skeleton";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {Textarea} from "@nextui-org/input";
import { EditDocumentIcon } from "@/components/EditIcon";
import { DeleteDocumentIcon } from "@/components/DeleteIcon";

import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/dropdown";
import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/pagination";
import { FramerMagicMotion } from "@/components/home/FramerMagicMotion";
// Font files can be colocated inside of `app`
const Pixel = localFont({
  src: './pixel.ttf',
  display: 'swap',
})
const TiltNeon = localFont({
  src: 'TiltNeon.ttf',
  display: 'swap'
})
const OneSans = localFont({
	src: './OneSans.ttf',
	display: 'swap',
  })
  const Satoshi = localFont({
    src: './Satoshi.otf',
    display: 'swap',
    })
const WorkSans = Work_Sans({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
  })
  const LibreFranklin = localFont({
	src: "franklin.ttf",
	display: 'auto'
  })

  const Caveat = localFont({
    src: 'Caveat.ttf',
    display: 'swap'
  })
export default function Home() {

  const [currentSVG, setCurrentSVG] = useState(0);
  const svgs = [
  (  <svg key="1" className="w-[109px] text-yankeesBlue" height="26" viewBox="0 0 109 26" width="109">
      <g clip-path="url(#clip0_1924_9289)">
        <path d="M40.385 8.92997H38.145V6.20997H35.465V8.92997H33.85V11H35.465V17.32C35.45 19.46 37.005 20.51 39.015 20.45C39.775 20.43 40.3 20.28 40.59 20.185L40.14 18.09C39.99 18.125 39.69 18.195 39.355 18.195C38.68 18.195 38.14 17.96 38.14 16.88V11H40.38V8.92997H40.385ZM42.62 20.29H45.3V8.92997H42.62V20.29ZM43.97 7.31497C44.82 7.31497 45.515 6.66497 45.515 5.86497C45.515 5.05997 44.82 4.40997 43.97 4.40997C43.11 4.40997 42.415 5.05997 42.415 5.86497C42.415 6.66497 43.11 7.31497 43.97 7.31497ZM50.73 13.635C50.73 11.995 51.72 11.045 53.135 11.045C54.52 11.045 55.345 11.955 55.345 13.47V20.29H58.025V13.055C58.03 10.33 56.48 8.77997 54.135 8.77997C52.435 8.77997 51.265 9.59497 50.745 10.86H50.61V8.92997H48.05V20.295H50.73V13.635ZM62.005 24.55C64.09 24.55 65.295 23.475 65.94 21.665L70.505 8.93997L67.64 8.92497L65.015 17.505H64.895L62.275 8.92497H59.435L63.555 20.525L63.325 21.14C62.83 22.435 62.045 22.525 60.875 22.185L60.255 24.27C60.625 24.42 61.275 24.55 62.005 24.55ZM72.485 20.29H75.12V18.5H75.275C75.695 19.33 76.575 20.49 78.53 20.49C81.21 20.49 83.215 18.365 83.215 14.625C83.215 10.835 81.15 8.77997 78.525 8.77997C76.52 8.77997 75.685 9.98497 75.275 10.805H75.165V5.13997H72.485V20.29ZM75.11 14.61C75.11 12.405 76.055 10.975 77.78 10.975C79.565 10.975 80.48 12.49 80.48 14.61C80.48 16.74 79.55 18.295 77.78 18.295C76.075 18.295 75.11 16.815 75.11 14.61ZM85.49 20.29H88.17V8.92997H85.49V20.29ZM86.835 7.31497C87.685 7.31497 88.38 6.66497 88.38 5.86497C88.38 5.05997 87.685 4.40997 86.835 4.40997C85.975 4.40997 85.28 5.05997 85.28 5.86497C85.28 6.66497 85.975 7.31497 86.835 7.31497ZM90.92 20.29H93.6V13.61C93.6 12.165 94.685 11.145 96.16 11.145C96.61 11.145 97.175 11.225 97.405 11.3V8.83497C97.16 8.78997 96.74 8.75997 96.445 8.75997C95.145 8.75997 94.055 9.49997 93.64 10.815H93.52V8.91997H90.925L90.92 20.29ZM102.93 20.49C104.885 20.49 105.765 19.33 106.185 18.5H106.345V20.29H108.98V5.13997H106.295V10.805H106.185C105.78 9.98497 104.94 8.77997 102.935 8.77997C100.31 8.77997 98.245 10.835 98.245 14.625C98.245 18.37 100.25 20.49 102.93 20.49ZM103.675 18.295C101.905 18.295 100.975 16.74 100.975 14.61C100.975 12.495 101.89 10.975 103.675 10.975C105.4 10.975 106.345 12.405 106.345 14.61C106.345 16.815 105.385 18.295 103.675 18.295Z" fill="currentColor"></path>
        <path opacity="0.6" d="M24.9999 2.64L17.1949 0.5L14.4499 6.635L24.9999 2.64ZM17.5349 17.77L10.3899 15.215L6.19495 25.5L17.5349 17.77Z" fill="currentColor"></path>
        <path d="M0 11.495L17.535 17.77L20.41 4.35999L0 11.495Z" fill="currentColor"></path>
      </g>
      <defs>
        <clipPath id="clip0_1924_9289">
          <rect width="108.98" height="25" fill="white" transform="translate(0 0.5)"></rect>
        </clipPath>
      </defs>
    </svg>),
    (
          <svg  key="2" viewBox="0 0 86 28" width="64" height="21" aria-hidden="true" focusable="false" className="  astro-YJGYUGEE" astro-icon="kinde"><path fill="currentColor" fill-rule="evenodd" d="M20.472 27.722c-1.742 0-3.324.011-4.905-.016-.18-.003-.392-.193-.527-.349-3.457-4.01-6.906-8.026-10.356-12.04-.112-.13-.227-.257-.434-.49v12.856H0V.038h4.207V12.72c.23-.255.356-.384.468-.523C7.818 8.29 10.963 4.382 14.095.465c.26-.326.522-.474.955-.465 1.462.029 2.925.011 4.55.011L8.223 13.661l12.248 14.06m41.909-9.585c-.01-1.28-.213-2.265-.635-3.207-1.708-3.81-6.626-4.617-9.343-1.533-1.934 2.196-2.174 5.803-.546 8.233 1.692 2.526 4.8 3.372 7.35 1.937 2.207-1.242 3.08-3.26 3.173-5.43m-.445-8.32V.08h3.97v27.666c-.911 0-1.826.01-2.74-.014-.097-.003-.216-.196-.278-.323-.247-.508-.475-1.025-.734-1.59-1.19 1.145-2.578 1.756-4.14 2.033-4.68.83-9.29-1.881-10.669-6.383-1.15-3.751-.743-7.312 1.817-10.431 2.64-3.217 7.465-4.233 11.02-2.385.603.314 1.14.753 1.754 1.164m20.182 6.486c.014-2.515-2.464-4.752-5.276-4.797-2.801-.045-5.216 2.137-5.278 4.797h10.554Zm-10.576 3.34c.099 1.978 1.762 3.888 3.83 4.397 2.237.55 4.16.02 5.712-1.711.114-.127.3-.27.454-.272 1.303-.022 2.606-.013 3.98-.013-.503 1.327-1.212 2.454-2.173 3.418-1.835 1.841-4.11 2.557-6.679 2.51-4.803-.087-8.703-3.621-9.285-8.37-.333-2.723.015-5.309 1.553-7.626C70.974 8.9 73.91 7.44 77.613 7.83c3.646.383 6.127 2.455 7.532 5.755.79 1.853 1.09 3.801.657 5.81-.014.064-.039.127-.075.247H71.54Zm-26.29 8.085h-3.983v-.598c-.001-3.634.012-7.268-.01-10.902-.01-2.01-1.443-3.913-3.324-4.509-2.724-.863-5.697.973-6.176 3.825a7.26 7.26 0 0 0-.09 1.182c-.006 3.445-.004 6.89-.004 10.335v.653h-3.956V7.992c.9 0 1.8-.012 2.698.015.112.004.253.201.32.338.249.505.473 1.022.724 1.575 1.977-1.847 4.321-2.366 6.862-2.09 3.297.36 6.053 2.945 6.704 6.221.15.755.24 1.534.244 2.303.026 3.652.012 7.303.012 10.954 0 .12-.012.24-.022.42m-23.752 0h3.943V8.005h-3.943zM25.914 2.48c-.003 1.327-1.124 2.425-2.465 2.415-1.303-.01-2.428-1.117-2.444-2.403C20.99 1.198 22.144.049 23.463.046c1.335-.004 2.454 1.108 2.451 2.433"></path></svg>
    )
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSVG((prev) => (prev + 1) % svgs.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);



    
	const [currentTime, setCurrentTime] = useState(new Date());
	const [currentPage, setCurrentPage] = React.useState(1);
 
	const texts = ['Light', 'Spectrum', 'Quantization'];
  const [currentText, setCurrentText] = useState(texts[0]);

  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the text every 5 seconds
      const currentIndex = texts.indexOf(currentText);
      const nextIndex = (currentIndex + 1) % texts.length;

      if (nextIndex === 3) {
        // Stop changing after reaching the third text
        clearInterval(intervalId);
      } else {
        setCurrentText(texts[nextIndex]);
      }
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentText, texts]);
  // Format the time as HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString();
	const [sequence, setSequence] = useState('');

	useEffect(() => {
	  const interval = setInterval(() => {
		// Generate a random number between 0 and 9
		const newRandomNumber = Math.floor(Math.random() * 10);
  
		// Concatenate the new random number to the existing sequence
		setSequence((prevSequence) => {
		  // Keep only the last 15 characters
		  const truncatedSequence = prevSequence.slice(-15);
		  return truncatedSequence + newRandomNumber;
		});
	  }, 1000); // Change the interval (in milliseconds) as needed
  
	  // Clear the interval when the component unmounts to prevent memory leaks
	  return () => clearInterval(interval);
	}, []);

	const renderPageContent = () => {
		switch (currentPage) {
		  case 1:
			return (<div>
						
       
			<Divider className="my-4" />
			<div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
			<Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="animate-appearance-in text-tiny text-white/60 uppercase font-bold animate-tpe">Science</p>
        <h4   style={LibreFranklin.style} className="text-white animate-appearance-in hover:animate-type-reverse font-medium text-large">Behind the {currentText} </h4>
      </CardHeader>
	  <Image
	    isBlurred
        removeWrapper
        alt="Science"
        className="z-0 w-full h-full object-cover"
        src="/science.jpg"
      />
	
	  </Card>
	  <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Economics</p>
        <h4 style={Pixel.style} className="text-white font-medium text-large">Finacial</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Economy"
        className="z-0 w-full h-full object-cover"
        src="/Finacial.jpg"
      />
	  <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p style={WorkSans.style}className=" text-tiny">JOIN NOW</p>

        </div>
        <Button isIconOnly  radius="full" size="sm">
          <GithubIcon/>
        </Button>
      </CardFooter>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">1-13th</p>
        <h4 style={OneSans.style} className="text-white font-medium text-large">Mathemetic</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Mathemetic"
        className="z-0 w-full h-full object-cover "
        src="/maths.jpg"
      />
   
    </Card>

			</div>
      <div className=""  onClick={() => toast.success(<div><p style={Pixel.style}>G E O M E T R Y</p></div>
    
      )}>
        <FramerMagicMotion/>
      </div>
			</div>);
		  case 2:
			return (
        
        <div className="flex flex-col gap-3">
          <div aria-hidden className="verticalFade" data-side={top} style={{
          height: 300,
        }}/>
         <Card className="w-[200px] space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-lg">
          <div className="h-24 w-full rounded-lg ">
          <Image
            src="/dd.jpg"
            className="w-64 float-left aspect-[1/1]  rounded-lg shadow-lg object-cover object-center mb-0 mr-6 "
            />
          </div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton className="rounded-md ">
            
              <div className="antialiased bg-transparent">
                <h1 style={Caveat.style}  className="selection-none">ThePathShala -2022</h1>
                
              </div>
        
          </Skeleton>
          
          <Skeleton className=" bg-stone-50">
            <div className=" w-full ">
            <Textarea
      isReadOnly
      variant="bordered"
      labelPlacement="outside"
  
      defaultValue="ThePathShala is tution classes started in December 2022 for science & maths."
      className="max-w-xs"
    />
            </div>
          </Skeleton>

     </div>
 
        <Button 
          variant="bordered" 
          startContent={  <EditDocumentIcon className={iconClasses}/>}
        >

          Edit

        </Button>
    

    
     
     </Card>

    <Divider className="my-4"/>
  
      
          
          

    <div className="  cointain  leading-5     items-center justify-center  ">
     <div className="">   <h1 style={TiltNeon.style} className=" text-lg text-center">SECURED BY <span style={OneSans.style} className="magic-text ">
       VERCEL

        </span> WITH </h1></div>
        <br></br>
       <div className="overflow-hidden whitespace-nowrap flex-wrap items-center justify-center gap-x-10 gap-y-6 md:flex">
          <h1  className="hover:backdrop-blur-md" style={Satoshi.style}>1. Kinde</h1>
          <h1 style={Satoshi.style}>2. Apace Kafka</h1>
          <h3 style={Pixel.style}>3. Redis</h3>
          <h4>  </h4>
       </div>


        
        
    <br></br>




       
    </div>
    

			</div>);
		  case 3:
			return (<div>
				 <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">  
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
			</div>);
		  // Add more cases for other pages if needed
		  default:
			return <p>No content available for this page</p>;
		}
	  };
    interface VerticalFadeProps{
      side:any,
      variant: any,
      direction: any
      style?: React.CSSProperties;
    }

    function VerticalFade({ side, style, ...props }: VerticalFadeProps) {
      return (
        <div aria-hidden className="verticalFade" data-side={side} {...props} />
      );
    }
    
    function HorizontalFade({ side, style,  ...props }: VerticalFadeProps) {
      return (
        <div aria-hidden className="horizontalFade" data-side={side} {...props} />
      );
    }
    function Line({ variant, direction, ...props }: VerticalFadeProps) {
      return (
        <div
          aria-hidden
          className="line"
          data-variant={variant}
          data-direction={direction}
          {...props}
        />
      );
    }
	return (
   <main>
       <Toaster  richColors/>
		<section className="scroll-smooth flex flex-col items-center justify-center gap-4 py-8 md:py-10">
         

    
			<div className="inline-block max-w-lg text-center justify-center select-none ">
      
      
        <h1  style={Pixel.style} className={title({className:"after:blur"})}
        
        
        >ThePathShala&nbsp;</h1>
				
				<br />
				<h1 style={OneSans.style}  className={title({	className:"hover:animate-appearance-in"})}>
					tution class
				</h1>
				<h2 style={WorkSans.style} className={subtitle({ class: "mt-4" })}>
				Kindergarten to Post Graduation
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
			
					as={NextLink}
					href="/join"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Explore Classes
				</Link>

        <LoginButton/>
				
      

			</div>
			<br></br>
  <div className="grid gap-8 itmes-start justify-center">
   <div className="relative">
	<div className="absolute insert-0 bg-pink-600 rounded-lg blur">
	{sequence}
	</div>
   <button className="select-none  relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
	<span className="pr-6  text-gray-100">Comming Soon</span>
	<span className=" pl-6 text-indigo-400">{formattedTime} </span>
  </button>

  
</div>

  </div>
  <div className="mt-8 ">
				<Snippet color="secondary" hideCopyButton variant="flat">
					<span className="mt-4 select-none"
        >
                 ed init pathshala;
					</span>
				</Snippet>
			</div>
			<div>
				{renderPageContent()}
    



     
			</div>
	
			<Pagination loop showControls color="primary" total={3} page={currentPage} onChange={setCurrentPage} initialPage={1} />

		</section>


</main>
	);
}