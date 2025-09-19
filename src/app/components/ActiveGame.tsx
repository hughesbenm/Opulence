import { Box } from "@mui/material";

const ActiveGame = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				margin: 2,
				display: 'flex'
			}}
		>
			<Box
				sx={{
					flexGrow: 4,
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				<Box
					sx={{
						flexGrow: 2,
						display: 'flex',
						flexDirection: 'column'
					}}
				>
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
				</Box>
				<Box
					sx={{
						bgcolor: 'yellow',
						flexGrow: 1,
						display: 'flex'
					}}
				>

				</Box>
			</Box>
			<Box
				sx={{
					bgcolor: 'blue',
					flexGrow: 1,
					display: 'flex'
				}}
			>

			</Box>	
		</Box>
	)
}

export default ActiveGame;