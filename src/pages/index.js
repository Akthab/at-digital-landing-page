import Footer from '@/components/footer/Footer';
import NavBar from '../components/nav/NavBar';
import Image from 'next/image';
import Button from '@/components/button/Button';

export default function Home() {
	return (
		<div>
			<NavBar />
			{/* Responsive Hero Image with card on top*/}
			<div class='relative '>
				<Image
					src={'/hero-image.png'}
					width={0}
					height={0}
					sizes='100vw'
					style={{ width: '100%', height: 'auto' }}
					class='h-screen object-cover'
				/>
				<div class='bottom-0 left-0 z-10 w-full bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] pl-6 pt-6 pb-6 md:w-2/5 md:left-20 md:bottom-20 md:absolute'>
					<p class='font-bold text-4xl leading-10 tracking-wide text-white pb-6 md:text-5xl md:leading-tight'>
						We crush Your <br />
						Competitors, Goals, And
						<br />
						Sales Records - Without
						<br />
						The B.S.
					</p>
					<Button buttonText={'Get Free Consultation'} />
				</div>
			</div>

			<div class='flex flex-wrap items-center justify-center mx-auto w-full md:w-4/5'>
				<div class='basis-full md:basis-2/4 sm:basis-full flex flex-col items-center'>
					<Image src={'/monitor.png'} width={346} height={346} />
				</div>
				<div class='basis-full md:basis-2/4 justify-center sm:basis-full flex flex-col items-center sm:items-start h-full pl-6 pr-6'>
					<p class='font-poppins font-semibold text-2xl text-center leading-9 tracking-tighter text-[#6B3CC9]'>
						Web & Mobile App Development
					</p>
					<p class='text-base  text-center sm:text-start font-normal leading-6 py-6'>
						Your web and mobile Apps are pieces of the puzzle to grow your
						business. We use frameworks which tailor content and engagement
						methods to respond to different intents shown by your potential
						customers who interact with your business online.
					</p>
					<Button buttonText={'Learn More'} />
				</div>
			</div>

			<div class='flex flex-wrap-reverse items-center justify-center mx-auto w-full md:w-4/5 pb-6'>
				<div class='basis-full md:basis-2/4 flex flex-col items-center sm:items-start h-full pl-6 pr-6'>
					<p class='font-poppins font-semibold text-2xl leading-9 tracking-tighter text-[#6B3CC9]'>
						Digital Strategy Consulting
					</p>
					<p class='text-base text-center sm:text-start font-normal leading-6 py-6'>
						Your digital strategy should complement the overall marketing
						strategy of the company. In online marketing, each component will
						never work in isolation and every business needs a different mix. We
						provide a clear concept and strategic overview to find the most
						efficient model for your business.
					</p>
					<Button buttonText='Learn More' />
				</div>
				<div class='basis-full md:basis-2/4 sm:basis-full flex items-center justify-center'>
					<Image src='/search-image.png' width={346} height={346} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
