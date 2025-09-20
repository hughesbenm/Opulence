import { Box } from "@mui/material";
import BoardArea from "./layout/BoardArea";
import GemPool from "./GemPool";

const ActiveGame = () => {
	return (
		<Box
			className={"board"}
			sx={{
				display: 'flex',
				flexGrow: 1
			}}
		>
			<Box
				sx={{
					flexGrow: 4,
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				<BoardArea name="Market" grow={2}>
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex'
						}}
					>
						<GemPool/>
					</Box>
					<Box
						sx={{
							bgcolor: 'green',
							flexGrow: 6,
							display: 'flex'
						}}
					>

					</Box>
					<Box
						sx={{
							bgcolor: 'orange',
							flexGrow: 2,
							display: 'flex'
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