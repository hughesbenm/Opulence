import { Box } from "@mui/material";
import { CardData, CardQuality, Color, DeckData, GOLD } from "../../../types";
import MarketCard from "../../pieces/MarketCard";
import { useBuyingPower, useMarketCards, useMarketGems, useStashCards, useStashGems } from "../../../hooks/sharedData";

interface CardPoolProps {

}

const CardPool: React.FC<CardPoolProps> = () => {
	const buyingPower = useBuyingPower();
	const { stashGems, setStashGems } = useStashGems();
	const { stashCards, setStashCards } = useStashCards();
	const [marketGems, setMarketGems] = useMarketGems();
	const [marketCards, setMarketCards] = useMarketCards();

	if (marketCards === undefined || marketGems === undefined || stashGems === undefined || stashCards === undefined) {
		return <p>Loading</p>
	}

	const buyCard = (cardQuality: CardQuality, index: number) => {
		let card: CardData | undefined = undefined;
		for (const quality of Array.from(Object.values(CardQuality))) {
			if (cardQuality === quality) {
				card = marketCards[quality as CardQuality][index];
				break;
			}
		}
		if (card === undefined) {
			return;
		}
		const golds: number = stashGems![GOLD];
		let canBuy: boolean = true;
		let gemCosts = {
			[Color.WHITE]: 0,
			[Color.BLUE]: 0,
			[Color.BLACK]: 0,
			[Color.RED]: 0,
			[Color.GREEN]: 0,
			[GOLD]: 0
		}
		Array.from(Object.values(Color)).forEach((color: Color) => {
			if (!canBuy || card === undefined) {
				return;
			}
			if (card[color] !== undefined) {
				if (buyingPower[color] !== undefined && card[color] > buyingPower[color]) {
					if (golds >= card[color] - buyingPower[color]) {
						gemCosts[GOLD] += card[color] - buyingPower[color];
						gemCosts[color] = buyingPower[color] - stashCards[color].length;
					} else {
						canBuy = false;
					}
				} else {
					gemCosts[color] = card[color] - stashCards[color].length;
				}
			}
		})
		if (!canBuy || gemCosts[GOLD] > golds) {
			return;
		}
		let newStashCards = { ...stashCards };
		newStashCards[card.color].push(card);
		setStashCards(newStashCards);
		let newMarketCards: DeckData = { ...marketCards };
		newMarketCards[cardQuality].splice(index, 1, newMarketCards[cardQuality][4]);
		newMarketCards[cardQuality].splice(4, 1);
		setMarketCards(newMarketCards);
		setStashGems({
			[Color.WHITE]: stashGems[Color.WHITE] - gemCosts[Color.WHITE],
			[Color.BLUE]: stashGems[Color.BLUE] - gemCosts[Color.BLUE],
			[Color.BLACK]: stashGems[Color.BLACK] - gemCosts[Color.BLACK],
			[Color.RED]: stashGems[Color.RED] - gemCosts[Color.RED],
			[Color.GREEN]: stashGems[Color.GREEN] - gemCosts[Color.GREEN],
			[GOLD]: stashGems[GOLD] - gemCosts[GOLD],
		});
		setMarketGems({
			[Color.WHITE]: marketGems[Color.WHITE] + gemCosts[Color.WHITE],
			[Color.BLUE]: marketGems[Color.BLUE] + gemCosts[Color.BLUE],
			[Color.BLACK]: marketGems[Color.BLACK] + gemCosts[Color.BLACK],
			[Color.RED]: marketGems[Color.RED] + gemCosts[Color.RED],
			[Color.GREEN]: marketGems[Color.GREEN] + gemCosts[Color.GREEN],
			[GOLD]: marketGems[GOLD] + gemCosts[GOLD],
		})
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
			{marketCards !== undefined && Array.from(Object.values(CardQuality)).map((quality: CardQuality) => {
				return <Box
					key={quality}
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
					<MarketCard color={quality} />
					<MarketCard cardData={marketCards[quality][0]} onClick={() => { buyCard(quality, 0) }} />
					<MarketCard cardData={marketCards[quality][1]} onClick={() => { buyCard(quality, 1) }} />
					<MarketCard cardData={marketCards[quality][2]} onClick={() => { buyCard(quality, 2) }} />
					<MarketCard cardData={marketCards[quality][3]} onClick={() => { buyCard(quality, 3) }} />
				</Box>
			})}
		</Box>
	)
}

export default CardPool;