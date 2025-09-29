import CardBase from "../../pieces/CardBase";
import { CardQuality, Color, MINI_CARD_HEIGHT, MINI_CARD_WIDTH } from '../../../types';

interface OpponentCardProps {
	color: Color | CardQuality;
}

const OpponentCard: React.FC<OpponentCardProps> = ({color}) => {
	return (
		<CardBase
			color={color}
			width={MINI_CARD_WIDTH}
			height={MINI_CARD_HEIGHT}
		/>
	)
}

export default OpponentCard;