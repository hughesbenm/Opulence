import { CardQuality, Color } from "../../types";
import CardBase from "./CardBase";
import Gem from "./Gem";

interface StashCardProps {
	color: Color | CardQuality;
	amount?: number;
}

const StashCard: React.FC<StashCardProps> = ({color, amount}) => {
	
	return (
		<CardBase invisible={amount === 0} color={color} amount={amount}/>
	)
}

export default StashCard;