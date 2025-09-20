import { Box } from "@mui/material";
import BoardArea from "./layout/BoardArea";

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
				<BoardArea name="Market" grow={2} column>
					<Box
						sx={{
							bgcolor: 'white',
							flexGrow: 1,
							display: 'flex'
						}}
					>

					</Box>
					<Box
						sx={{
							flexGrow: 4,
							display: 'flex'
						}}
					>
						<Box
							sx={{
								bgcolor: 'green',
								flexGrow: 5,
								display: 'flex'
							}}
						>
							
						</Box>
						<Box
							sx={{
								bgcolor: 'orange',
								flexGrow: 1,
								display: 'flex'
							}}
						>
							
						</Box>
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