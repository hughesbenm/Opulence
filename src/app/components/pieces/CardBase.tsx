import { Box } from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH, CardQuality, Color } from "../../types";
import "../Market.css"

interface CardBaseProps {
	color: Color | CardQuality;
}

const CardBase: React.FC<CardBaseProps> = ({color}) => {
	return (
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
	)
}

export default CardBase;