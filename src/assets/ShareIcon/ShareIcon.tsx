import { FC, memo } from 'react';
import { TIconProps } from '../types.ts';

export const ShareIcon: FC<TIconProps> = memo(({ width = 22, height = 22 }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11.3636 2C11.3636 1.5853 11.6196 1.21363 12.007 1.06575C12.3945 0.91786 12.833 1.02445 13.1093 1.33367L20.7457 9.87912C21.0848 10.2586 21.0848 10.8323 20.7457 11.2118L13.1093 19.7572C12.833 20.0665 12.3945 20.173 12.007 20.0252C11.6196 19.8773 11.3636 19.5056 11.3636 19.0909L11.3636 15.0804C11.1692 15.0768 10.98 15.0726 10.7961 15.0685C10.3061 15.0576 9.85884 15.0476 9.43237 15.0497C8.58022 15.0538 7.86307 15.1064 7.18736 15.2765C5.88994 15.6032 4.56121 16.4101 2.77937 18.6266C2.51356 18.9572 2.06803 19.0841 1.66787 18.9432C1.2677 18.8023 0.999999 18.4242 0.999999 18C0.999999 14.55 2.1446 11.5449 4.16965 9.39405C5.9912 7.45936 8.482 6.26307 11.3636 6.03855L11.3636 2Z"
				stroke="white"
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
});