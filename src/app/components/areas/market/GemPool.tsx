import { Box, Grid } from "@mui/material";
import Gem from "../../pieces/Gem";
import { Color, emptyGems, fourPlayerGems, GemData, GOLD, GOLD_TYPE, threePlayerGems, twoPlayerGems } from "../../../types";
import { useEffect, useState } from "react";
import { useSyncState } from "@robojs/sync";
import { useStashGems } from "../../../hooks/sharedData";

interface GemPoolProps {

}


const GemPool: React.FC<GemPoolProps> = () => {
	
	const [gems, setGems] = useSyncState<GemData>(threePlayerGems, ['gems'])
	const [stashGems, setStashGems] = useStashGems();

	const addGem = (color: Color | GOLD_TYPE) => {
		if (gems[color] !== 0 && stashGems !== undefined) {
			let newGems = {...gems};
			newGems[color] = newGems[color] - 1;
			setGems(newGems);
			let newStashGems = {...stashGems};
			newStashGems[color] = newStashGems[color] + 1;
			setStashGems(newStashGems);
		}
	}

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				flexDirection: 'column',
				flexGrow: 1,
				mindWidth: 0,
				flexBasis: 0
			}}
		>
			{Object.values(Color).map((color) => {
				return (
					<Gem key={color} color={color} amount={gems[color]} onClick={() => addGem(color)}/>
				)
			})}
			<Gem color={GOLD} amount={gems[GOLD]} onClick={() => addGem(GOLD)} />
		</Box>
	)
}

export default GemPool;