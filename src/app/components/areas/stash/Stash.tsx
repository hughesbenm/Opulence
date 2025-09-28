import { Box } from "@mui/material";
import { Color } from "../../../types";
import Gem from "../../pieces/Gem";
import StashCard from "../../pieces/StashCard";
import BoardArea from "../../layout/BoardArea";

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
					)
				})}				
			</Box>
		</BoardArea>
	)
}

export default Stash;