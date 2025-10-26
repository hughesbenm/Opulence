import { Box, Stack } from "@mui/material";
import { CardData, CardQuality, Color, MINI_GEM_FONT_SIZE, MINI_GEM_HEIGHT } from "../../types";
import CardBase from "./CardBase";
import Gem from "./Gem";

type MarketCardProps =
{
	color: CardQuality | Color;
	cardData?: never;
	onClick?: never;
} | {
	color?: never;
	cardData: CardData;
	onClick?: () => void;
}

const MarketCard: React.FC<MarketCardProps> = ({
	color,
	cardData,
	onClick
}) => {	
	if (cardData === undefined && color === undefined) {
		return <p>Loading</p>
	}

	return (
		<CardBase color={color ?? cardData.color} className={"market_card"} onClick={onClick}>
			{cardData !== undefined && (
				<>
					<Stack>
						{Object.values(Color).filter((color) => {
							return cardData[color] !== undefined && cardData[color] > 0
						}).map((color) => {
							return (
								<Gem
									key={color}
									color={color}
									amount={cardData[color] ?? 0}
									height={MINI_GEM_HEIGHT}
									fontSize={MINI_GEM_FONT_SIZE}
								/>
							)
						})}
					</Stack>
					{cardData?.points !== undefined &&
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '4vh',
								fontSize: 'small',
								paddingRight: '7px'
							}}
						>
							<h1 className="text">
								{cardData.points}
							</h1>
						</Box>
					}
				</>
			)}
		</CardBase>
	)
}

export default MarketCard;