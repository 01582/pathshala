'use client'
import React from "react";
import { toast, Toaster } from "sonner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Dashboard() {

    const router = useRouter();

	useEffect(() => {
		axios.get('/api/regdit').then(async response => {
			console.log(response.data.login);
		
		    if(response.data.login =="false"){
				router.push("/register")
				toast.success("Fill up the form and continue 🎉")
			}
	
			
		});
		
		


		
	  }, []); 


	return (
		<div>
			<Toaster/>
			<p>Page is building</p>

    		</div>
	);
}
