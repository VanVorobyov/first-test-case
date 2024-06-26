import { FC, memo } from 'react';
import { TIconProps } from '../types.ts';

export const LikeIcon: FC<TIconProps> = memo(({ width = 22, height = 20 }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 22 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18.0715 1.73469C17.2656 1.27255 16.3348 1 15.3473 1C13.5993 1 12.0329 1.82949 11 3.13298C9.95573 1.82949 8.38933 1 6.64132 1C5.6538 1 4.72304 1.27255 3.91714 1.73469C2.18048 2.74194 1 4.67347 1 6.90125C1 7.54115 1.10216 8.14549 1.28377 8.71429C2.24858 13.2646 11 19 11 19C11 19 19.7401 13.2646 20.7162 8.71429C20.8978 8.14549 21 7.5293 21 6.90125C20.9886 4.67347 19.8082 2.74194 18.0715 1.73469Z"
				stroke="white"
				strokeWidth="1.5"
			/>
		</svg>
	);
});
