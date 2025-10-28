import { Box, Grid } from "@mui/material";
import Gem from "../../pieces/Gem";
import { Color, emptyGems, fourPlayerGems, GemData, GOLD, GOLD_TYPE, threePlayerGems, twoPlayerGems } from "../../../types";
import { useEffect, useState } from "react";
import { useSyncState } from "@robojs/sync";
import { useMarketGems, useStashGems } from "../../../hooks/sharedData";

interface GemPoolProps {

}


const GemPool: React.FC<GemPoolProps> = () => {
	const [marketGems, setMarketGems] = useMarketGems();
	const [stashGems, setStashGems] = useStashGems();

	useEffect(() => {
		if (marketGems === undefined) {
			setMarketGems(fourPlayerGems);
		}
		console.log("gems", marketGems)
	}, [marketGems]);

	if (marketGems === undefined || stashGems === undefined) {
		return <p>Loading</p>
	}

	const addGem = (color: Color | GOLD_TYPE) => {
		if (marketGems[color] !== 0 && stashGems !== undefined) {
			let newGems = {...marketGems};
			newGems[color] = newGems[color] - 1;
			setMarketGems(newGems);
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
					<Gem key={color} color={color} amount={marketGems[color]} onClick={() => addGem(color)}/>
				)
			})}
			<Gem color={GOLD} amount={marketGems[GOLD]} onClick={() => addGem(GOLD)} />
		</Box>
	)
}

export default GemPool;