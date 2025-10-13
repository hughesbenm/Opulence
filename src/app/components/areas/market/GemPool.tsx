import { Box, Grid } from "@mui/material";
import Gem from "../../pieces/Gem";
import { Color, GOLD, GOLD_TYPE } from "../../../types";
import { useState } from "react";
import { useSyncState } from "@robojs/sync";

interface GemPoolProps {

}

const GemPool: React.FC<GemPoolProps> = () => {
	interface AvailableGems {
		[key: string]: number;
	}
	
	const [gems, setGems] = useSyncState<AvailableGems>({
		"white": 0,
		"blue": 0,
		"black": 0,
		"red": 0,
		"green": 0,
		"gold": 0
	}, ['test'])

	const addGem = (color: Color | GOLD_TYPE) => {
		let newGems = {...gems};
		newGems[color] = newGems[color] + 1;
		console.log(newGems)
		setGems(newGems);
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
			<Gem color={GOLD} amount={5} />
		</Box>
	)
}

export default GemPool;