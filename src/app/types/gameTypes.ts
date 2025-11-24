import { CardData, CardStashData, GemData } from "./pieceTypes"

export type Player = {
	id: string,
	name: string,
	icon: string,
	gems: GemData,
	hand: CardData[],
	stash: CardStashData
}

export type LobbyMember = {
	id: string,
	name: string,
	icon: string,
	ready: boolean
}