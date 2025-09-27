import { Box } from "@mui/material";
import { Color } from "../types";
import Gem from "./pieces/Gem";

interface StashProps {

}

const Stash: React.FC<StashProps> = () => {
	const CARD_HEIGHT = "12vh";
	const CARD_WIDTH = "7vw";
	
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				flexGrow: 6,
				flexBasis: 0,
				minWidth: 0
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexGrow: 1,
					justifyContent: 'space-evenly',
					alignItems: 'center',
					minWidth: 0,
					flexBasis: 0,
					alignSelf: 'stretch'
				}}
			>
				{Object.values(Color).map((color: Color) => {
					return (
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Box
								sx={{
									width: CARD_WIDTH,
									height: CARD_HEIGHT,
									bgcolor: color,
									padding: 0,
									margin: 0
								}}
							>

							</Box>
							<Gem
								color={color}
								amount={5}
							/>
						</Box>
					)
				})}				
			</Box>
		</Box>
	)
}

export default Stash;