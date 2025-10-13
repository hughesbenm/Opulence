import { Stack } from "@mui/material";
import BoardArea from "../../layout/BoardArea"
import './Opponents.css'
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
					justifyContent: 'space-between'
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