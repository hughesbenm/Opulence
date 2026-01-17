import { Box, Stack, Typography } from "@mui/material";
import { CardData, CardQuality, CardStashData, Color, DeckData, emptyCards, emptyGems, GemData, GOLD, NobleData } from "../../../types";
import Gem from "../../pieces/Gem";
import StashCard from "../../pieces/StashCard";
import BoardArea from "../../layout/BoardArea";
import BuyingPower from "../../pieces/BuyingPower";
import MarketCard from "../../pieces/MarketCard";
import Noble from "../../pieces/Noble";
import { useSyncState } from "@robojs/sync";
import { useEffect } from "react";
import { useBuyingPower, useHand, useStashCards, useStashGems, useStashNobles } from "../../../hooks/sharedData";

interface StashProps {

}

const Stash: React.FC<StashProps> = ({ }) => {
	const buyingPower = useBuyingPower();
	const { stashGems, setStashGems } = useStashGems();
	const { stashCards, setStashCards } = useStashCards();
	const { stashNobles, setStashNobles } = useStashNobles();
	const { hand, setHand } = useHand();

	if (stashGems === undefined || stashCards === undefined || stashNobles === undefined || hand === undefined) {
		return <p>Loading</p>
	}

	const currentPoints = Array.from(Object.values(Color)).reduce((pointSum, color) => {
		stashCards[color].forEach((card) => {
			if (card.points !== undefined) {
				pointSum = pointSum + card.points;
			}
		})
		return pointSum;
	}, 0);


	return (
		<BoardArea name={"Stash"}>
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
				{Object.values(Color).map((color: Color) => {
					return (
						<Stack
							key={color}
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								gap: 3,
								height: '100%',
							}}
						>
							<BuyingPower amount={buyingPower[color]} color={color} />
							<StashCard amount={stashCards[color].length} color={color} />
							<Gem
								color={color}
								amount={stashGems !== undefined ? stashGems[color] : 0}
							/>
						</Stack>
					)
				})}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'flex-end',
						height: '100%'
					}}
				>
					<Gem color={GOLD} amount={stashGems !== undefined ? stashGems[GOLD] : 0} />
				</Box>
				<Stack
					sx={{
						display: 'flex',
						height: '100%',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<Typography variant={'h4'}>Current points: {currentPoints}</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							height: '100%'
						}}
					>
						{hand.map((handCard) => {
							return (
								<MarketCard cardData={handCard} />
							)
						})}
					</Box>
					<Box
						sx={{
							display: 'flex'
						}}
					>
						{stashNobles.map((noble) => {
							return (
								<Noble nobleData={noble} />
							)
						})}
					</Box>
				</Stack>
			</Box>
		</BoardArea>
	)
}

export default Stash;