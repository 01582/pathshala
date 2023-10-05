"use client"
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useState, useEffect } from 'react';
import localFont from 'next/font/local'
import { Work_Sans } from "next/font/google";

  import {Kbd} from "@nextui-org/kbd";
  
// Font files can be colocated inside of `app`
const Pixel = localFont({
  src: './pixel.ttf',
  display: 'swap',
})

const WorkSans = Work_Sans({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
  })
export default function Home() {
	const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current time every second
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

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



	return (
	 
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
         
			<div className="inline-block max-w-lg text-center justify-center ">
				<h1  style={Pixel.style} className={title({className:"duration-1000 animate-appearance-in"})}>ThePathShala&nbsp;</h1>
						<br />
				<h1  className={title()}>
					tution classes
				</h1>
				<h2 style={WorkSans.style} className={subtitle({ class: "mt-4" })}>
					KG-PG
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
<div className="rounded-lg ">

 <Snippet color="primary" hideCopyButton variant="bordered">
	<span className="mt-2 select-none">
		
		Landing page will posted on 23:59 <Kbd keys={["option"]}>S</Kbd>
	</span>
 </Snippet>
 

</div>

		</section>

	);
}
