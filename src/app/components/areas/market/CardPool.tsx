import { Box, Card } from "@mui/material";
import { CardData, CardQuality, Color, GOLD } from "../../../types";
import MarketCard from "../../pieces/MarketCard";
import { useSyncState } from "@robojs/sync";
import { useEffect } from "react";
import { cardsData } from "../../../../../data/cards";
import { shuffle } from "../../../utils/shuffle";
import { useBuyingPower, useStashCards, useStashGems } from "../../../hooks/sharedData";
import { color } from "robo.js";

interface CardPoolProps {

}

const CardPool: React.FC<CardPoolProps> = () => {	
	const [ones, setOnes] = useSyncState<CardData[] | undefined>(undefined, ["one"]);
	const [twos, setTwos] = useSyncState<CardData[] | undefined>(undefined, ["two"]);
	const [threes, setThrees] = useSyncState<CardData[] | undefined>(undefined, ["three"]);
	const buyingPower = useBuyingPower();
	const [stashGems, setStashGems] = useStashGems();
	const [stashCards, setStashCards] = useStashCards();
	
	useEffect(() => {
		console.log("ones", ones)
	}, [ones])

	useEffect(() => {
		if (ones === undefined) {
			setOnes(shuffle(cardsData.one));
		}
		if (twos === undefined) {
			setTwos(shuffle(cardsData.two));
		}
		if (threes === undefined) {
			setThrees(shuffle(cardsData.three));
		}
	}, [])

	if (ones === undefined || twos == undefined || threes == undefined || stashGems === undefined || stashCards === undefined) {
		return <p>Loading</p>
	}

	const buyCard = (cardQuality: CardQuality, index: number) => {
		let card = undefined;
		if (cardQuality === CardQuality.ONE) {
			card = ones[index];
		} else if (cardQuality === CardQuality.TWO) {
			card = twos[index];
		} else if (cardQuality === CardQuality.THREE) {
			card = threes[index];
		}
		if (card === undefined) {
			return;
		}
		const golds: number = stashGems![GOLD];
		let goldsNeeded: number = 0;
		let canBuy: boolean = true;
		Array.from(Object.values(Color)).forEach((color: Color) => {
			if (!canBuy) {
				return;
			}
			if (card[color] !== undefined && buyingPower[color] !== undefined && card[color] > buyingPower[color]) {
				if (golds > card[color] - buyingPower[color]) {
					goldsNeeded += card[color] - buyingPower[color];
				} else {
					canBuy = false;
				}
			}
		})
		if (!canBuy || goldsNeeded > golds) {
			return;
		}
		console.log("You can buy it!")
		let newStashCards = {...stashCards};
		newStashCards[card.color].push(card);
		setStashCards(newStashCards);
		if (cardQuality === CardQuality.ONE) {
			setOnes(ones.splice(index))
		} else if (cardQuality === CardQuality.TWO) {
			setOnes(twos.splice(index))
		} else if (cardQuality === CardQuality.THREE) {
			setOnes(threes.splice(index))
		}
	}

	const killFirst = () => {
		console.log("test?")
		let newOnes = [...ones];
		console.log(ones);
		newOnes.splice(0, 1);
		console.log(newOnes)
		setOnes(newOnes);
	}

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
			{threes != undefined && (
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
					<MarketCard cardData={threes[0]} onClick={() => {buyCard(CardQuality.THREE, 0)}}/>
					<MarketCard cardData={threes[1]} onClick={() => {buyCard(CardQuality.THREE, 1)}}/>
					<MarketCard cardData={threes[2]} onClick={() => {buyCard(CardQuality.THREE, 2)}}/>
					<MarketCard cardData={threes[3]} onClick={() => {buyCard(CardQuality.THREE, 3)}}/>
				</Box>
			)}
			{twos != undefined && (
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
					<MarketCard cardData={twos[0]} onClick={() => {buyCard(CardQuality.TWO, 0)}}/>
					<MarketCard cardData={twos[1]} onClick={() => {buyCard(CardQuality.TWO, 1)}}/>
					<MarketCard cardData={twos[2]} onClick={() => {buyCard(CardQuality.TWO, 2)}}/>
					<MarketCard cardData={twos[3]} onClick={() => {buyCard(CardQuality.TWO, 3)}}/>
				</Box>
			)}
			{ones != undefined && (
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
					<MarketCard cardData={ones[0]} onClick={() => {killFirst()}}/>
					<MarketCard cardData={ones[1]} onClick={() => {buyCard(CardQuality.ONE, 1)}}/>
					<MarketCard cardData={ones[2]} onClick={() => {buyCard(CardQuality.ONE, 2)}}/>
					<MarketCard cardData={ones[3]} onClick={() => {buyCard(CardQuality.ONE, 3)}}/>
				</Box>
			)}
		</Box>
	)
}

export default CardPool;