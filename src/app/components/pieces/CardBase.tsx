import { Box } from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH, CardQuality, Color } from "../../types";

interface CardBaseProps {
	color: Color | CardQuality;
	height?: string;
	width?: string;
}

const CardBase: React.FC<CardBaseProps> = ({color, width = CARD_WIDTH, height = CARD_HEIGHT}) => {
	return (
		<Box
			className={'card_base'}
			sx={{
				width: width,
				height: height,
				bgcolor: color,
				padding: 0,
				margin: 0
			}}
		>

		</Box>
	)
}

export default CardBase;