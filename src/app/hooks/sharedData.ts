import { useSyncState } from "@robojs/sync"
import { BuyingPower, CardData, CardStashData, Color, DeckData, emptyGems, GemData, NobleData } from "../types";
import { LobbyMember, Player, PlayerMap } from "../types/gameTypes";
import { useDiscordSdk } from "../../hooks/useDiscordSdk";

export const useLobbyMembers = () => {
	return useSyncState<undefined | LobbyMember[]>(undefined, ['lobbyMembers']);
}

export const usePlayers = () => {
	return useSyncState<undefined | Record<string, Player>>(undefined, ['players']);
}

export const useGameStarted = () => {
	return useSyncState<undefined | boolean>(undefined, ['gameStarted']);
}

export const useStashGems = () => {
	const [players, setPlayers] = usePlayers();
	const { session } = useDiscordSdk();
	const setStashGems = (stashGems: GemData) => {
		if (session === null) { return; }
		setPlayers((prev) => {
			let newPlayers = {...prev};
			let currentPlayer = newPlayers[session.user.id];
			if (currentPlayer === undefined) {
				return prev;
			}
			newPlayers[session.user.id] = {...currentPlayer, gems: stashGems};
			return newPlayers;
		});
	}
	if (session === null || players === undefined || players[session.user.id] === undefined) {
		return { undefined,  setStashGems}
	}
	const stashGems = players[session.user.id].gems;
	return { stashGems, setStashGems };
}

export const useStashCards = () => {
	const [players, setPlayers] = usePlayers();
	const { session } = useDiscordSdk();
	const setStashCards = (stashCards: CardStashData) => {
		if (session === null) { return; }
		setPlayers((prev) => {
			let newPlayers = {...prev};
			let currentPlayer = newPlayers[session.user.id];
			if (currentPlayer === undefined) {
				return prev;
			}
			newPlayers[session.user.id] = {...currentPlayer, stash: stashCards};
			return newPlayers;
		});
	}
	if (session === null || players === undefined || players[session.user.id] === undefined) {
		return { undefined,  setStashCards}
	}
	const stashCards = players[session.user.id].stash;
	return { stashCards, setStashCards };
}

export const useStashNobles = () => {
	const [players, setPlayers] = usePlayers();
	const { session } = useDiscordSdk();
	const setStashNobles = (stashNobles: NobleData[]) => {
		if (session === null) { return; }
		setPlayers((prev) => {
			let newPlayers = {...prev};
			let currentPlayer = newPlayers[session.user.id];
			if (currentPlayer === undefined) {
				return prev;
			}
			newPlayers[session.user.id] = {...currentPlayer, nobles: stashNobles};
			return newPlayers;
		});
	}
	if (session === null || players === undefined || players[session.user.id] === undefined) {
		return { undefined, setStashNobles }; 
	}
	const stashNobles = players[session.user.id].nobles;
	return { stashNobles, setStashNobles };
}

export const useHand = () => {
	const [players, setPlayers] = usePlayers();
	const { session } = useDiscordSdk();
	const setHand = (hand: CardData[]) => {
		if (session === null) { return; }
		setPlayers((prev) => {
			let newPlayers = {...prev};
			let currentPlayer = newPlayers[session.user.id];
			if (currentPlayer === undefined) {
				return prev;
			}
			newPlayers[session.user.id] = {...currentPlayer, hand: hand};
			return newPlayers;
		});
	}
	if (session === null || players === undefined || players[session.user.id] === undefined) {
		return { undefined, setHand }; 
	}
	const hand = players[session.user.id].hand;
	return { hand, setHand };
}

export const useMarketGems = () => {
	return useSyncState<undefined | GemData>(undefined, ['marketGems']);
}

export const useMarketCards = () => {
	return useSyncState<undefined | DeckData>(undefined, ['marketCards']);
}

export const useBuyingPower = (): BuyingPower => {
	const {stashGems} = useStashGems();
	const {stashCards} = useStashCards();
	if (stashGems === undefined || stashCards === undefined) {
		return {
			[Color.WHITE]: 0,
			[Color.BLUE]: 0,
			[Color.BLACK]: 0,
			[Color.RED]: 0,
			[Color.GREEN]: 0,
		}
	} else {
		return {
			[Color.WHITE]: stashGems[Color.WHITE] + stashCards[Color.WHITE].length,
			[Color.BLUE]: stashGems[Color.BLUE] + stashCards[Color.BLUE].length,
			[Color.BLACK]: stashGems[Color.BLACK] + stashCards[Color.BLACK].length,
			[Color.RED]: stashGems[Color.RED] + stashCards[Color.RED].length,
			[Color.GREEN]: stashGems[Color.GREEN] + stashCards[Color.GREEN].length,
		}
	}
}

export const useNobles = () => {
	return useSyncState<undefined | NobleData[]>(undefined, ['nobles']);
}