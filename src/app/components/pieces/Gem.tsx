import { Box } from "@mui/material"
import { Color, GEM_FONT_SIZE, GEM_HEIGHT, GOLD_TYPE } from "../../types";

export interface GemProps {
	color: Color | GOLD_TYPE;
	amount: number;
	noBorder?: boolean;
	height?: string;
	fontSize?: string;
	onClick?: () => void;
}

const Gem: React.FC<GemProps> = ({onClick, color, amount, noBorder = false, height = GEM_HEIGHT, fontSize = GEM_FONT_SIZE}) => {
	return (
		<Box
			className="gem"
			onClick={onClick}
			sx={{
				borderColor: `color-mix(in srgb, ${color}, ${color === Color.BLACK ? 'white 25%' : 'black 20%'})`,
				bgcolor: color,
				borderStyle: noBorder ? 'hidden' : 'solid',
				height: height,
				width: height,
				fontSize: fontSize
			}}
		>
			<h1 className={"text"}>
				{amount}
			</h1>
		</Box>
	)
}

export default Gem;