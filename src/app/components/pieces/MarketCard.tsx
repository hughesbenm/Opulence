import { CardQuality, Color, MINI_GEM_FONT_SIZE, MINI_GEM_HEIGHT } from "../../types";
import CardBase from "./CardBase";
import Gem from "./Gem";

interface MarketCardProps {
	color: Color | CardQuality;
	white?: number;
	blue?: number;
	black?: number;
	red?: number;
	green?: number;
}

const MarketCard: React.FC<MarketCardProps> = ({color, white, blue, black, red, green}) => {
	const colorMap = {
		"white": white,
		"blue": blue,
		"black": black,
		"red": red,
		"green": green
	}
	
	return (
		<CardBase color={color} className={"market_card"}>
			{Object.values(Color).filter((color) => {
				return colorMap[color] !== undefined && colorMap[color] > 0
			}).map((color) => {
				return (
					<Gem
						color={color}
						amount={colorMap[color] ?? 0}
						height={MINI_GEM_HEIGHT}
						fontSize={MINI_GEM_FONT_SIZE}
					/>
				)
			})}
		</CardBase>
	)
}

export default MarketCard;