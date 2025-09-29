import { CardQuality, Color } from "../../types";
import CardBase from "./CardBase";
import Gem from "./Gem";

interface StashCardProps {
	color: Color | CardQuality;
}

const StashCard: React.FC<StashCardProps> = ({color}) => {
	
	return (
		<CardBase color={color} />
	)
}

export default StashCard;