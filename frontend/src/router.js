import {Route} from 'react-router'
import AboutPage from './components/aboutpage'
import App from './App'

export default (
	<Route path="/" component={App}>
		<Route path="about" component={AboutPage} />		 
	</Route>
);