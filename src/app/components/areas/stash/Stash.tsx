import { Box, Stack, Typography } from "@mui/material";
import { CardQuality, Color, GOLD } from "../../../types";
import Gem from "../../pieces/Gem";
import StashCard from "../../pieces/StashCard";
import BoardArea from "../../layout/BoardArea";
import BuyingPower from "../../pieces/BuyingPower";
import MarketCard from "../../pieces/MarketCard";
import Noble from "../../pieces/Noble";

interface StashProps {

}

const Stash: React.FC<StashProps> = ({}) => {
	
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
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								gap: 3,
								height: '100%',
							}}
						>
							<BuyingPower amount={0} color={color} />
							<StashCard color={color}/>
							<Gem
								color={color}
								amount={5}
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
					<Gem color={GOLD} amount={0} />
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
						<MarketCard color={Color.BLUE} white={1}/>
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