import { Box } from "@mui/material";
import { BUYING_POWER_HEIGHT, Color } from "../../types";

interface BuyingPowerProps {
	amount: number;
	color: Color;
	height?: string;
}

const BuyingPower: React.FC<BuyingPowerProps> = ({amount, color, height = BUYING_POWER_HEIGHT}) => {
	return (
		<Box
			sx={{
				height: height,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: height,
				bgcolor: color,
				fontSize: 'xx-small',
			}}
		>
			<h1 className={"text"}>
				{amount}
			</h1>
		</Box>
	)
}

export default BuyingPower;