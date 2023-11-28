'use client'
import React from "react";
import { toast, Toaster } from "sonner";
import { useEffect, useState } from "react";
import axios from "axios";
import checkTokenInDb from "@/components/p/CheckToken";

export default function Dashboard() {


	const [Token, setToken] = useState('')
	useEffect(() => {
		axios.get('/api/verify').then(async response => {
			console.log(response.data.token);
			setToken(response.data.token)
		
			try {
				const user = await checkTokenInDb(Token);
			  
				if (user) {
				  console.log('User found:', user);
				  // Proceed with your logic using user.id and user.name
				} else {
				  console.log('User not found');
				  // Handle the case where the user doesn't exist
				}
			  } catch (error) {
				console.error('Error:', error);
				// Handle other errors
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
