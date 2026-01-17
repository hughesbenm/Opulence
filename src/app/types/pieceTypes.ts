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

export const BUYING_POWER_HEIGHT = GEM_HEIGHT;

export interface BuyingPower {
	[Color.WHITE]: number;
	[Color.BLUE]: number;
	[Color.BLACK]: number;
	[Color.RED]: number;
	[Color.GREEN]: number;
}

export interface CardData {
	color: Color;
	points?: number;
	[Color.WHITE]?: number;
	[Color.BLUE]?: number;
	[Color.BLACK]?: number;
	[Color.RED]?: number;
	[Color.GREEN]?: number;
}

export interface CardStashData {
	[Color.WHITE]: CardData[];
	[Color.BLUE]: CardData[];
	[Color.BLACK]: CardData[];
	[Color.RED]: CardData[];
	[Color.GREEN]: CardData[];
}

export const emptyCards: CardStashData = {
	[Color.WHITE]: [],
	[Color.BLUE]: [],
	[Color.BLACK]: [],
	[Color.RED]: [],
	[Color.GREEN]: []
}

export interface DeckData {
	[CardQuality.ONE]: (CardData | undefined)[];
	[CardQuality.TWO]: (CardData | undefined)[];
	[CardQuality.THREE]: (CardData | undefined)[];
}

export interface GemData {
	[Color.WHITE]: number;
	[Color.BLUE]: number;
	[Color.BLACK]: number;
	[Color.RED]: number;
	[Color.GREEN]: number;
	[GOLD]: number
}

export const twoPlayerGems: GemData = {
	[Color.WHITE]: 4,
	[Color.BLUE]: 4,
	[Color.BLACK]: 4,
	[Color.RED]: 4,
	[Color.GREEN]: 4,
	[GOLD]: 5
}

export const threePlayerGems: GemData = {
	[Color.WHITE]: 5,
	[Color.BLUE]: 5,
	[Color.BLACK]: 5,
	[Color.RED]: 5,
	[Color.GREEN]: 5,
	[GOLD]: 5
}

export const fourPlayerGems: GemData = {
	[Color.WHITE]: 7,
	[Color.BLUE]: 7,
	[Color.BLACK]: 7,
	[Color.RED]: 7,
	[Color.GREEN]: 7,
	[GOLD]: 5
}

export const emptyGems: GemData = {
	[Color.WHITE]: 0,
	[Color.BLUE]: 0,
	[Color.BLACK]: 0,
	[Color.RED]: 0,
	[Color.GREEN]: 0,
	[GOLD]: 0
}

export interface NobleData {
	[Color.WHITE]?: number;
	[Color.BLUE]?: number;
	[Color.BLACK]?: number;
	[Color.RED]?: number;
	[Color.GREEN]?: number;
}