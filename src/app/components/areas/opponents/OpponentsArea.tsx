import { Box, Stack } from "@mui/material";
import BoardArea from "../../layout/BoardArea"
import './Opponents.css'
import OpponentCard from "./OpponentCard";
import { Color, MINI_GEM_FONT_SIZE, MINI_GEM_HEIGHT } from "../../../types";
import Gem from "../../pieces/Gem";
import BuyingPower from "../../pieces/BuyingPower";
import Opponent from "./Opponent";

interface OpponentsAreaProps {
	
}

const OpponentsArea: React.FC<OpponentsAreaProps> = ({}) => {

	return (
		<BoardArea name="Opponents">
			<Stack
				sx={{
					paddingTop: '25px',
					flexGrow: 1,
					display: 'flex',
					gap: '22vh'
				}}
			>
				<Opponent />
				<Opponent />
				<Opponent />
			</Stack>
		</BoardArea>
	)
}

export default OpponentsArea;