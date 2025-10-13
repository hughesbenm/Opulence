export enum Color {
	WHITE = 'white',
	BLUE = 'blue',
	BLACK = 'black',
	RED = 'red',
	GREEN = 'green'
}

export const GOLD = '#ffb219';

export type GOLD_TYPE = typeof GOLD;

export enum CardQuality {
	THREE = 'darkblue',
	TWO = 'goldenrod',
	ONE = 'darkgreen'
}

export const CARD_HEIGHT = "12vh";
export const CARD_WIDTH = `calc(${CARD_HEIGHT} / 4 * 3)`;
export const MINI_CARD_HEIGHT = '3.25vh';
export const MINI_CARD_WIDTH = `calc(${MINI_CARD_HEIGHT} / 4 * 3)`;

export const GEM_HEIGHT = '5vh';
export const GEM_FONT_SIZE = 'small';
export const MINI_GEM_HEIGHT = '2vh';
export const MINI_GEM_FONT_SIZE = 'xx-small';

export const BUYING_POWER_HEIGHT = GEM_HEIGHT