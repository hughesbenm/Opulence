import { Box, Stack, Typography } from "@mui/material";
import { CardData, CardQuality, CardStashData, Color, DeckData, emptyCards, emptyGems, GemData, GOLD } from "../../../types";
import Gem from "../../pieces/Gem";
import StashCard from "../../pieces/StashCard";
import BoardArea from "../../layout/BoardArea";
import BuyingPower from "../../pieces/BuyingPower";
import MarketCard from "../../pieces/MarketCard";
import Noble from "../../pieces/Noble";
import { useSyncState } from "@robojs/sync";
import { useEffect } from "react";
import { useStashGems } from "../../../hooks/sharedData";

interface StashProps {

}

const Stash: React.FC<StashProps> = ({}) => {
	
	const [stashGems, setStashGems] = useStashGems();
	const [stashCards, setStashCards] = useSyncState<CardStashData>(emptyCards, ["testPlayerId", "stashCards"])

	useEffect(() => {
		if (stashGems === undefined) {
			setStashGems(emptyGems);
		}
	}, [stashGems]);

	useEffect(() => {
		if (stashGems === undefined) {
			setStashCards(emptyCards);
		}
	}, [stashGems]);

	if (stashGems === undefined || stashCards === undefined) {
		return <p>Loading</p>
	}

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
							<BuyingPower amount={0} color={color} />
							<StashCard amount={stashCards[color].length} color={color}/>
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
					<Typography variant={'h4'}>Current points: {5}</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							height: '100%'
						}}
					>
						<MarketCard color={Color.BLUE} />
						<MarketCard color={Color.BLACK} />
						<MarketCard color={Color.RED} />
					</Box>
					<Box
						sx={{
							display: 'flex'
						}}
					>
						<Noble/>
						<Noble/>
						<Noble/>
						<Noble/>
						<Noble/>
					</Box>
				</Stack>
			</Box>
		</BoardArea>
	)
}

export default Stash;