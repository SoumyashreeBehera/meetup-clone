import { useState } from 'react';
import './SliderWrapper.css';

const SliderWrapper = ({ arr, limit }) => {
	const [ position, setPosition ] = useState(0);

	const handleNext = () => {
		if (position >= 0 && position < arr.length) {
			setPosition(position + 1);
		}
	};
	const handlePrev = () => {
		if (position >= 1) {
			setPosition(position - 1);
		}
	};

	return (
		<div className='slider'>
			<div className='slide' style={{ left: `${position * -(85*(8-limit))}px` }}>
				{arr.map((el, indx) => (
					<div key={indx} className='item'>
						{el}
					</div>
				))}
			</div>
			<button
				className='ctrl-btn pro-prev'
				onClick={handlePrev}
				style={{ visibility: position === 0 && 'hidden' }}
			>
				<i className='ion-ios7-arrow-back' />
			</button>
			<button
				className='ctrl-btn pro-next'
				onClick={handleNext}
				style={{ visibility: position +  limit  >= arr.length - 1 && 'hidden' }}
			>
				<i className='ion-ios7-arrow-forward' />
			</button>
		</div>
	);
};

export default SliderWrapper;
