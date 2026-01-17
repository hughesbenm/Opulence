import { Box } from "@mui/material";
import { CARD_HEIGHT, CARD_WIDTH, CardQuality, Color, MINI_GEM_FONT_SIZE } from "../../types";

interface CardBaseProps {
	color: Color | CardQuality;
	height?: string;
	width?: string;
	children?: any;
	className?: string;
	fontSize?: string;
	invisible?: boolean;
	amount?: number;
	onClick?: () => void;
}

const CardBase: React.FC<CardBaseProps> = ({
	color,
	width = CARD_WIDTH,
	height = CARD_HEIGHT,
	children,
	className = "",
	fontSize = MINI_GEM_FONT_SIZE,
	invisible = false,
	amount,
	onClick
}) => {
	return (
		<Box
			className={`card_base ${className}`}
			sx={{
				width: width,
				height: height,
				bgcolor: color,
				fontSize: fontSize,
				visibility: invisible ? 'hidden' : 'visible'
			}}
			onClick={onClick}
		>
			{amount !== undefined && (
				<p className="text">{amount}</p>
			)}
			{children}
		</Box>
	)
}

export default CardBase;