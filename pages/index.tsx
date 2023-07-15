import type { NextPage } from "next";
import styled from "@emotion/styled"

import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";

if (typeof window !== 'undefined') {
  window.addEventListener('error', function (event) {
    console.log('Caught via addEventListener', event);
    // Here you could send the error information to an error tracking service
  });
}

const Home: NextPage = () => {
	const AppContainer = styled.div`
		background-color: grey;
		padding: 20px;
		height: 100%;
	`

  return (
		<AppContainer>
			<Header />
			<Videos />
			<Footer />
		</AppContainer>
  );
};

export default Home;
