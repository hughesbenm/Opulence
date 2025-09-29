import { Box } from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH, CardQuality, Color } from "../../types";
import { ReactElement } from "react";
import { GemProps } from "./Gem"

interface CardBaseProps {
	color: Color | CardQuality;
	height?: string;
	width?: string;
	children?: ReactElement<GemProps> | ReactElement<GemProps>[];
	className?: string;
}

const CardBase: React.FC<CardBaseProps> = ({
	color,
	width = CARD_WIDTH,
	height = CARD_HEIGHT,
	children,
	className = ""
}) => {
	return (
		<Box
			className={`card_base ${className}`}
			sx={{
				width: width,
				height: height,
				bgcolor: color,
				padding: 0,
				margin: 0
			}}
		>
			{children}
		</Box>
	)
}

export default CardBase;