import { FC, memo } from 'react';
import { TIconProps } from '../types.ts';

export const FillLikeIcon: FC<TIconProps> = memo(
	({ width = 20, height = 18 }) => {
		return (
			<svg
				width={width}
				height={height}
				viewBox="0 0 20 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17.0715 0.734694C16.2656 0.272548 15.3348 0 14.3473 0C12.5993 0 11.0329 0.829493 10 2.13298C8.95573 0.829493 7.38933 0 5.64132 0C4.6538 0 3.72304 0.272548 2.91714 0.734694C1.18048 1.74194 0 3.67347 0 5.90125C0 6.54115 0.102157 7.14549 0.283768 7.71429C1.24858 12.2646 10 18 10 18C10 18 18.7401 12.2646 19.7162 7.71429C19.8978 7.14549 20 6.5293 20 5.90125C19.9886 3.67347 18.8082 1.74194 17.0715 0.734694Z"
					fill="#188BF5"
				/>
			</svg>
		);
	}
);
