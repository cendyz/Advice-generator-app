import { useState } from "react";
import { useEffect } from "react";
import Box from "./components/main/Box";
const url = "https://api.adviceslip.com/advice";

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [checkError, setCheckError] = useState(false);
	const [advices, setAdvices] = useState([]);

	const fetchData = async () => {
		setIsLoading(true);
		setCheckError(false);
		try {
			const response = await fetch(url);
			const data = await response.json();
			setAdvices(data.slip);
		} catch (error) {
			console.log(error);
			setCheckError(true);
		}
		setIsLoading(false);
	};

	const fetchAgain = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setAdvices(data.slip);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		return <div className='loading'></div>;
	}

	if (checkError) {
		return (
			<div className='error'>
				<h1 className='error-text'>There was a connectivity problem with the server, we will be back soon</h1>
			</div>
		);
	}

	return (
		<main className='main'>
			<Box advices={advices} fetchAgain={fetchAgain} />
		</main>
	);
};
export default App;
