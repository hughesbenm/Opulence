import { Box } from "@mui/material";
import { CardQuality } from "../../../types";
import MarketCard from "../../pieces/MarketCard";

interface CardPoolProps {

}

const CardPool: React.FC<CardPoolProps> = () => {	
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				flexGrow: 6,
				flexBasis: 0,
				minWidth: 0
			}}
		>
			{Object.values(CardQuality).map((quality) => {
				return (
					<Box
						key={quality}
						sx={{
							display: 'flex',
							flexGrow: 1,
							justifyContent: 'space-evenly',
							alignItems: 'center',
							minWidth: 0,
							flexBasis: 0,
							alignSelf: 'stretch'
						}}
					>
						<MarketCard points={1} white={1} color={quality}/>
						<MarketCard blue={2} green={3} color={quality}/>
						<MarketCard red={1} white={3} black={3} color={quality}/>
						<MarketCard color={quality}/>
						<MarketCard color={quality}/>
					</Box>
				)
			})}
		</Box>
	)
}

export default CardPool;