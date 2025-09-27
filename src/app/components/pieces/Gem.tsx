import { Box } from "@mui/material"
import { Color } from "~/app/types";

interface GemProps {
	color: Color;
	amount: number;
}

const Gem: React.FC<GemProps> =({color, amount}) => {
	return (
		<Box
			className="gem"
			sx={{
				borderColor: `color-mix(in srgb, ${color}, black 20%)`,
				bgcolor: color
			}}
		>
			<h1 className={"gem_text"}>
				{amount}
			</h1>
		</Box>
	)
}

export default Gem;