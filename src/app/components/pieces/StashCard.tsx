import CardBase from "./CardBase";
import { CardQuality, Color } from "~/app/types";

interface StashCardProps {
	color: Color | CardQuality;
}

const StashCard: React.FC<StashCardProps> = ({color}) => {
	return (
		<CardBase color={color}>
		</CardBase>
	)
}

export default StashCard;