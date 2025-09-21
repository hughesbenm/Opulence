import { Box } from "@mui/material";
import BoardArea from "./layout/BoardArea";
import GemPool from "./GemPool";
import CardPool from "./CardPool";

const ActiveGame = () => {
	return (
		<Box
			className={"board"}
			sx={{
				display: 'flex',
				flexGrow: 1,
				// '& > *': { flexBasis: 0, minWidth: 0 }
				flexBasis: 0,
				minWidth: 0
			}}
		>
			<Box
				sx={{
					flexGrow: 4,
					display: 'flex',
					flexDirection: 'column',
					flexBasis: 0,
					// minWidth: 0
				}}
			>
				<BoardArea name="Market" grow={2}>
					<GemPool/>
					<CardPool/>
					<Box
						sx={{
							bgcolor: 'orange',
							flexGrow: 2,
							display: 'flex',
							mindWidth: 0,
							flexBasis: 0
						}}
					>
						
					</Box>
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