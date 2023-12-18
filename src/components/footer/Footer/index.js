import React from 'react';
import Image from 'next/image';

export default function Footer() {
	return (
		<>
			<div class='w-full bg-[#6B3CC9] text-white p-4 text-center'>
				<div class='flex flex-row flex-wrap'>
					<div class='basis-full md:basis-1/2 sm:basis-full p-4'>
						<div class='md:w-3/5 w-438px md:pl-6 space-y-8'>
							<Image src='/logo.svg' width={239} height={37} alt='logo' />
							<p class='text-left font-lato font-normal text-base leading-6'>
								Your goal is our target. Not anything in between. We use online
								marketing platforms and tools to achieve single objective - your
								business results.
							</p>
						</div>
					</div>
					<div class='basis-full md:basis-1/4 sm:basis-1/2 space-y-3 pt-4'>
						<p class='text-left text-lg font-semibold leading-6'>
							Our Technologies
						</p>
						<ul class='text-left space-y-3'>
							<li class='font-normal text-sm leading-5'>ReactJS</li>
							<li class='font-normal text-sm leading-5'>Gatsby</li>
							<li class='font-normal text-sm leading-5'>NextJS</li>
							<li class='font-normal text-sm leading-5'>NodeJS</li>
							<li class='font-normal text-sm leading-5'>GraphQL</li>
							<li class='font-normal text-sm leading-5'>Laravel</li>
						</ul>
					</div>
					<div class='basis-full md:basis-1/4 sm:basis-1/2 space-y-3 pt-4'>
						<p class='text-left text-lg font-semibold leading-6'>
							Our Services
						</p>
						<ul class='text-left space-y-3'>
							<li class='font-normal text-sm leading-5'>
								Social Media Marketing
							</li>
							<li class='font-normal text-sm leading-5'>
								Web and Mobile App Development
							</li>
							<li class='font-normal text-sm leading-5'>Data and Analytics</li>
							<li class='font-normal text-sm leading-5'>
								Google Marketing Solutions
							</li>
							<li class='font-normal text-sm leading-5'>
								Search Engine Optimizations
							</li>
						</ul>
					</div>
				</div>
				<div class='flex items-center justify-center mx-auto w-full border-t-2 border-white mt-8 pt-2 md:w-2/3'></div>
				<p class='font-normal text-sm leading-5 whitespace-pre'>
					Privacy Policy {'   '} | {'   '} Terms and Conditions
				</p>
			</div>
		</>
	);
}
