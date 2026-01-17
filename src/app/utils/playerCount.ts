import { fourPlayerGems, threePlayerGems, twoPlayerGems } from "../types"

export const getStartingGems = (playerCount: number) => {
	if (playerCount <= 2) { return twoPlayerGems; }
	else if (playerCount === 3) { return threePlayerGems; }
	else if (playerCount >= 4) { return fourPlayerGems; }
}

export const getStartingNobleNumber = (playerCount: number) => playerCount + 1;