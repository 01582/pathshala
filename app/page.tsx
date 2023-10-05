"use client"
import NextLink from "next/link";
import React from "react";
import { Link } from "@nextui-org/link";
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
import {Skeleton} from "@nextui-org/skeleton";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/pagination";
// Font files can be colocated inside of `app`
const Pixel = localFont({
  src: './pixel.ttf',
  display: 'swap',
})
const OneSans = localFont({
	src: './OneSans.ttf',
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
export default function Home() {
	const [currentTime, setCurrentTime] = useState(new Date());
	const [currentPage, setCurrentPage] = React.useState(1);

	const texts = ['Light', 'Spectrum', 'Quantization'];
  const [currentText, setCurrentText] = useState(texts[0]);

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
        <p className="animate-appearance-in text-tiny text-white/60 uppercase font-bold">Science</p>
        <h4   style={LibreFranklin.style} className="text-white animate-appearance-in font-medium text-large">Behind the {currentText} </h4>
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
        <p className="text-tiny text-white/60 uppercase font-bold">MATHEMETICS</p>
        <h4 style={OneSans.style} className="text-white font-medium text-large">22/6</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Mathemetic"
        className="z-0 w-full h-full object-cover "
        src="/maths.jpg"
      />
    </Card>

			</div>
			</div>);
		  case 2:
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


	return (
	 
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
         
			<div className="inline-block max-w-lg text-center justify-center ">
				<h1  style={Pixel.style} className={title({className:"after:blur"})}>PathShala&nbsp;</h1>
				<h1  className={title({ className:"animate-appearance-in duration-1000  ", color: "violet" })}>perfect&nbsp;</h1>
				<br />
				<h1  className={title()}>
					tution class
				</h1>
				<h2 style={WorkSans.style} className={subtitle({ class: "mt-4" })}>
					7th-11th
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
				<Link
					
		
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "lg",  })}
					href="/join"
				>
					<GithubIcon size={20} />
					Join
				</Link>
			</div>
			<br></br>
  <div className="grid gap-8 itmes-start justify-center">
   <div className="relative">
	<div className="absolute insert-0 bg-pink-600 rounded-lg blur">
	{sequence}
	</div>
   <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
	<span className="pr-6  text-gray-100">Comming Soon</span>
	<span className=" pl-6 text-indigo-400">{formattedTime} </span>
  </button>

  
</div>

  </div>
  <div className="mt-8 ">
				<Snippet color="secondary" hideCopyButton variant="flat">
					<span className="mt-4 select-none"
        >
                                  ed init the-pathshala.
					</span>
				</Snippet>
			</div>
			<br></br>
<div>
{renderPageContent()}

</div>
<Pagination loop showControls color="primary" total={3} page={currentPage} onChange={setCurrentPage} initialPage={1} />

		</section>

	);
}
