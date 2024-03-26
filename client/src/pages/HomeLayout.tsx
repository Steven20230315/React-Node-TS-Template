import { Outlet } from 'react-router-dom';
import GlobalStyles from '../components/styles/GlobalStyles';
export default function HomeLayout() {
	return (
		<>
			<GlobalStyles />
			<Outlet />
		</>
	);
}
