import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";

import backgroundImage from "./assets/background-image.jpg";
import DetailsPage from "./pages/DetailsPage";
import MainPage from "./pages/MainPage";

const MainWrapper = styled.div`
	background: url(${backgroundImage});
    height: 100%;
    width: 100%;
    display: block;
    position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

const App = () => {
	return (
		<MainWrapper>
			<Router>
				<Switch>
					<Route path="/" exact component={MainPage} />
					<Route
						path="/pokemon/details"
						exact
						component={DetailsPage}
					/>
					<Redirect to="/" />
				</Switch>
			</Router>
		</MainWrapper>
	);
};

export default App;
