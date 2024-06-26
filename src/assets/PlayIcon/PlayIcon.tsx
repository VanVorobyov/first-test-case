import { FC, memo } from 'react';
import { TIconProps } from '../types.ts';

export const PlayIcon: FC<TIconProps> = memo(({ width = 14, height = 16 }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 14 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.3519 15.7524C1.36679 16.2858 0 15.9529 0 14.7971V1.25792C0 0.146661 1.45635 -0.331171 2.3519 0.246682L13.4394 7C14.1869 7.33333 14.1869 8.66667 13.4394 9L2.3519 15.7524Z"
				fill="white"
			/>
		</svg>
	);
});
