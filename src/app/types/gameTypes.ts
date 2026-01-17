import { CardData, CardStashData, GemData, NobleData } from "./pieceTypes"

export type Player = {
	id: string,
	name: string,
	icon: string,
	gems: GemData,
	hand: CardData[],
	stash: CardStashData
	nobles: NobleData[];
}

export type LobbyMember = {
	id: string,
	name: string,
	icon: string,
	ready: boolean
}

export type PlayerMap = Map<string, Player>;