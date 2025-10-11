import CardBase from "./CardBase";
import { CardQuality, Color, MINI_CARD_HEIGHT, MINI_CARD_WIDTH } from '../../types';

interface OpponentCardProps {
	color: Color | CardQuality;
	amount?: number;
}

const OpponentCard: React.FC<OpponentCardProps> = ({color, amount}) => {
	return (
		<CardBase
			color={color}
			width={MINI_CARD_WIDTH}
			height={MINI_CARD_HEIGHT}
			className={'opponent_card'}
			invisible={amount === 0}
		>
			{amount !== undefined && (
				<h1 className={"text"}>
					{amount}
				</h1>
			)}
		</CardBase>
	)
}

export default OpponentCard;