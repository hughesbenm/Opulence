import { Box } from "@mui/material";
import Stash from "./areas/stash/Stash";
import "./pieces/Pieces.css"
import Market from "./areas/market/Market";
import Opponents from "./areas/opponents/Opponents";

const ActiveGame = () => {
	return (
		<Box
			className={"board"}
			sx={{
				display: 'flex',
				flexGrow: 1,
				'& > *': { flexBasis: 0, minWidth: 0, minHeight: 0 },
				flexBasis: 0,
				minWidth: 0,
				minHeight: 0
			}}
		>
			<Box
				sx={{
					flexGrow: 4,
					display: 'flex',
					flexDirection: 'column',
					flexBasis: 0,
					minWidth: 0,
					minHeight: 0
				}}
			>
				<Market/>
				<Stash />
			</Box>
			<Opponents />
		</Box>
	)
}

export default ActiveGame;