import type { NextPage } from "next";
import styled from "@emotion/styled";
import Videos from '../components/Videos';
import "react-toastify/dist/ReactToastify.css";

if (typeof window !== 'undefined') {
  window.addEventListener('error', function (event) {
    console.log('Caught via addEventListener', event);
  });
}

const AppContainer = styled.div`
background-color: grey;
padding: 20px;
height: 100%;
`

const Home: NextPage = () => {

  return (
		<AppContainer>
			<Videos />
		</AppContainer>
  );
};

export default Home;
