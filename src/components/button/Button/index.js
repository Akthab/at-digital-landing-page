const Button = ({ buttonText }) => {
	return (
		<>
			<button
				class='bg-[#F28D35] text-white text-lg font-bold leading-normal pt-4 pr-8 pb-4 pl-8 rounded uppercase'
				style={{ 'letter-spacing': '-0.02em' }}
			>
				{buttonText}
			</button>
		</>
	);
};

export default Button;
