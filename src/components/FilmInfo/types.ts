export interface IFilmInfo {
	id: number;
	title: string;
	image: string;
	genre: string[];
	production: {
		year: string;
		country: string;
	};
	labels: {
		fullhd: boolean;
		subtitles: boolean;
		age_restrictions: string;
	};
}
