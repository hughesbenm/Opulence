import { Box, Grid } from "@mui/material";
import Gem from "../../pieces/Gem";
import { Color, GOLD } from "../../../types";

interface GemPoolProps {

}

const GemPool: React.FC<GemPoolProps> = () => {
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
					<Gem color={color} amount={5} />
				)
			})}
			<Gem color={GOLD} amount={5} />
		</Box>
	)
}

export default GemPool;