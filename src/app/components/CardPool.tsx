import { Box } from "@mui/material";
import { CardQuality } from "../types";
import CardBase from "./pieces/CardBase";

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
						<CardBase color={quality}/>
						<CardBase color={quality}/>
						<CardBase color={quality}/>
						<CardBase color={quality}/>
						<CardBase color={quality}/>
					</Box>
				)
			})}
		</Box>
	)
}

export default CardPool;