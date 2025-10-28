import { useSyncState } from "@robojs/sync"
import { BuyingPower, CardStashData, Color, DeckData, GemData } from "../types";

export const useStashGems = () => {
	return useSyncState<undefined | GemData>(undefined, ['testPlayerId', 'stashGems']);
}

export const useStashCards = () => {
	return useSyncState<undefined | CardStashData>(undefined, ['testPlayerId', 'stashCards']);
}

export const useMarketGems = () => {
	return useSyncState<undefined | GemData>(undefined, ['testPlayerId', 'marketGems']);
}

export const useMarketCards = () => {
	return useSyncState<undefined | DeckData>(undefined, ['testPlayerId', 'marketCards']);
}

export const useBuyingPower = (): BuyingPower => {
	const [stashGems] = useStashGems();
	const [stashCards] = useStashCards();
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