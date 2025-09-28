import CardBase from "../../pieces/CardBase";
import { CardQuality, Color, OPPONENT_CARD_HEIGHT, OPPONENT_CARD_WIDTH } from '../../../types';

interface OpponentCardProps {
	color: Color | CardQuality;
}

const OpponentCard: React.FC<OpponentCardProps> = ({color}) => {
	return (
		<CardBase
			color={color}
			width={OPPONENT_CARD_WIDTH}
			height={OPPONENT_CARD_HEIGHT}
		/>
	)
}

export default OpponentCard;