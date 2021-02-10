import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import DetailsPage from "./pages/DetailsPage";
import MainPage from "./pages/MainPage";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={MainPage} />
				<Route path="/pokemon/details" exact component={DetailsPage} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
};

export default App;
