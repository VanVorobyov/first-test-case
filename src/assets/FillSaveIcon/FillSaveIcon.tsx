import { FC, memo } from 'react';
import { TIconProps } from '../types.ts';

export const FillSaveIcon: FC<TIconProps> = memo(
	({ width = 22, height = 20 }) => {
		return (
			<svg
				width={width}
				height={height}
				viewBox="0 0 16 20"
				fill="orange"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 3C1 1.89543 1.89543 1 3 1H13.1176C14.2222 1 15.1176 1.89543 15.1176 3V17.1324C15.1176 18.7556 13.2861 19.7027 11.9616 18.7645L9.21486 16.8189C8.52224 16.3283 7.5954 16.3283 6.90279 16.8189L4.15604 18.7645C2.83152 19.7027 1 18.7556 1 17.1324V3Z"
					stroke="orange"
					strokeWidth="1.5"
				/>
			</svg>
		);
	}
);
