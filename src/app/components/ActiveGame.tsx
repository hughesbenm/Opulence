import { Box } from "@mui/material";
import BoardArea from "./layout/BoardArea";
import GemPool from "./GemPool";
import CardPool from "./CardPool";
import NoblePool from "./NoblePool";

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
				<BoardArea name="Market" grow={2}>
					<GemPool/>
					<CardPool/>
					<NoblePool/>
				</BoardArea>
				<BoardArea name="Your Stuff">

				</BoardArea>
			</Box>
			<BoardArea name="Opponents">

			</BoardArea>
		</Box>
	)
}

export default ActiveGame;