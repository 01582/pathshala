import React from "react";
import { toast, Toaster } from "sonner";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Dashboard() {


	const [Token, setToken] = useState('')
	useEffect(() => {
		axios.get('/api/verify').then(response => {
			console.log(response.data.token);
			setToken(response.data.token)


		});
		
		


		
	  }, []); 
	return (
		<div>
			<Toaster/>

    		</div>
	);
}
