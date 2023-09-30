"use client"
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useState, useEffect } from 'react';
import { Activity } from "lucide";
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
				<h1 className={title()}>PathShala&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>perfect&nbsp;</h1>
				<br />
				<h1 className={title()}>
					tution class
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					7th-11th
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Explore Classes
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "lg" })}
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
			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
                     2023-10-01
					</span>
				</Snippet>
			</div>
		</section>
	);
}
