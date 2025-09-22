import { Box } from "@mui/material";

interface CardPoolProps {

}

const CardPool: React.FC<CardPoolProps> = () => {
	const CARD_HEIGHT = "12vh";
	const CARD_WIDTH = "7vw";
	
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				flexGrow: 6,
				bgcolor: 'green',
				flexBasis: 0,
				minWidth: 0
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexGrow: 1,
					bgcolor: 'blue',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					minWidth: 0,
					flexBasis: 0,
					alignSelf: 'stretch'
				}}
			>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexGrow: 1,
					bgcolor: 'blue',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					minWidth: 0,
					flexBasis: 0,
					alignSelf: 'stretch'
				}}
			>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexGrow: 1,
					bgcolor: 'blue',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					minWidth: 0,
					flexBasis: 0,
					alignSelf: 'stretch'
				}}
			>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
				<Box
					sx={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						bgcolor: 'red',
						padding: 0,
						margin: 0
					}}
				>

				</Box>
			</Box>
		</Box>
	)
}

export default CardPool;