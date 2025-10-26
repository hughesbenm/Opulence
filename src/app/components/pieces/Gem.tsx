import { Box } from "@mui/material"
import { Color, GEM_FONT_SIZE, GEM_HEIGHT, GOLD_TYPE } from "../../types";

export interface GemProps {
	color: Color | GOLD_TYPE;
	amount: number;
	noBorder?: boolean;
	height?: string;
	fontSize?: string;
	onClick?: () => void;
	highlighted?: boolean;
}

const Gem: React.FC<GemProps> = ({
	onClick,
	color,
	amount,
	noBorder = false,
	height = GEM_HEIGHT,
	fontSize = GEM_FONT_SIZE,
	highlighted = false
}) => {

	const getBorderColor = () => {
		if (highlighted) {
			if (color === Color.WHITE) {
				return 'black';
			} else {
				return 'white';
			}
		} else {
			return `color-mix(in srgb, ${color}, ${color === Color.BLACK ? 'white 25%' : 'black 20%'})`
		}
	}

	return (
		<Box
			className="gem"
			onClick={onClick}
			sx={{
				borderColor: getBorderColor(),
				bgcolor: color,
				borderStyle: noBorder ? 'hidden' : 'solid',
				height: height,
				width: height,
				fontSize: fontSize,
				visibility: (amount === 0 ? 'hidden' : 'visible')
			}}
		>
			<h1 className={"text"}>
				{amount}
			</h1>
		</Box>
	)
}

export default Gem;