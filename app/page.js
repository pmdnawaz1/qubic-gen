
import { Metadata } from 'next';
import Landing from '../components/component/landing';

export const metadata = {
	title: "Home"
}

export default function Home() {
	return (
		<>		
			<Landing />
		</>
	);
}
