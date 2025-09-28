import BoardArea from "../../layout/BoardArea"
import CardPool from "./CardPool"
import GemPool from "./GemPool"
import NoblePool from "./NoblePool"

interface MarketProps {

}

const Market: React.FC<MarketProps> = ({}) => {
	return (
		<BoardArea name="Market" grow={2}>
			<GemPool/>
			<CardPool/>
			<NoblePool/>
		</BoardArea>
	)
}

export default Market;