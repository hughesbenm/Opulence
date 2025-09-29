import { Box, Stack } from "@mui/material";
import { Color } from "../../../types";
import Gem from "../../pieces/Gem";
import StashCard from "../../pieces/StashCard";
import BoardArea from "../../layout/BoardArea";
import BuyingPower from "../../pieces/BuyingPower";

interface StashProps {

}

const Stash: React.FC<StashProps> = ({}) => {
	
	return (
		<BoardArea name={"Stash"}>
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
						<Stack
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 3
							}}
						>
							<BuyingPower amount={0} color={color} />
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<StashCard color={color}/>
								<Gem
									color={color}
									amount={5}
								/>
							</Box>
						</Stack>
					)
				})}				
			</Box>
		</BoardArea>
	)
}

export default Stash;