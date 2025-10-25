import { Box } from "@mui/material";
import { CardData, CardQuality } from "../../../types";
import MarketCard from "../../pieces/MarketCard";
import { useSyncState } from "@robojs/sync";
import { useEffect } from "react";
import { cardsData } from "../../../../../data/cards";
import { shuffle } from "../../../utils/shuffle";

interface CardPoolProps {

}

const CardPool: React.FC<CardPoolProps> = () => {	
	const [ones, setOnes] = useSyncState<CardData[] | null>(null, ["one"]);
	const [twos, setTwos] = useSyncState<CardData[] | null>(null, ["two"]);
	const [threes, setThrees] = useSyncState<CardData[] | null>(null, ["three"]);
	
	useEffect(() => {
		if (ones === null) {
			setOnes(shuffle(cardsData.one));
		}
		if (twos === null) {
			setTwos(shuffle(cardsData.two));
		}
		if (threes === null) {
			setThrees(shuffle(cardsData.three));
		}
	}, [])

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
			{threes != null && (
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
					<MarketCard color={CardQuality.THREE}/>
					<MarketCard cardData={threes[0]} />
					<MarketCard cardData={threes[1]} />
					<MarketCard cardData={threes[2]} />
					<MarketCard cardData={threes[3]} />
				</Box>
			)}
			{twos != null && (
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
					<MarketCard color={CardQuality.TWO}/>
					<MarketCard cardData={twos[0]} />
					<MarketCard cardData={twos[1]} />
					<MarketCard cardData={twos[2]} />
					<MarketCard cardData={twos[3]} />
				</Box>
			)}
			{ones != null && (
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
					<MarketCard color={CardQuality.ONE}/>
					<MarketCard cardData={ones[0]} />
					<MarketCard cardData={ones[1]} />
					<MarketCard cardData={ones[2]} />
					<MarketCard cardData={ones[3]} />
				</Box>
			)}
		</Box>
	)
}

export default CardPool;