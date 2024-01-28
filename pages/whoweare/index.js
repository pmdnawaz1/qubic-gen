import Image from 'next/image';
import '../../app/globals.css';
import whowearebanner from '../../public/images/whowearebanner.png';
import Header from '../../components/component/Header';
import Footer from '@/components/component/Footer';
import About from '@/components/component/About';
import Awards from '../../components/component/awards';
import bulb from '../../public/images/bulb.png';
import target from '../../public/images/target.png';

const WhoWeAre = () => {
	return (
		<div>
			<Header />
			<div className="container mx-auto">
				<Image
					src={whowearebanner}
					alt="QubicGen Banner"
					width={1900}
					height={500}
				/>
				<About />
				<div className="flex justify-center flex-wrap items-center p-4 bg-slate-100">
					<div className="flex flex-col items-center p-8">
						<div className="h-40 w-40 bg-white">
							<Image src={bulb} alt="QubicGen Logo" width={150} height={150} />
						</div>
						<div className="mt-4 text-center">
							<p className="text-gray-600">
								QubicGen, situated in the dynamic and thriving city of <br />
								Anantapur, Andhra Pradesh, India, <br /> stands as a beacon of
								knowledge and a catalyst for success...
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="h-40 w-40 bg-white">
							<Image
								src={target}
								alt="Lightbulb Idea"
								width={150}
								height={150}
							/>
						</div>
						<div className="mt-4 text-center">
							<p className="text-gray-600">
								Our mission is to bridge the gap between learning and
								achievement, <br /> fostering an environment where ideas <br />{' '}
								flourish and ambitions are realized..
							</p>
						</div>
					</div>
				</div>
			</div>
			<Awards />
			<Footer />
		</div>
	);
};

export default WhoWeAre;
