import { useSyncState } from "@robojs/sync"
import { GemData } from "../types";

export const useStashGems = () => {
	return useSyncState<undefined | GemData>(undefined, ['testPlayerId', 'stashGems']);
}