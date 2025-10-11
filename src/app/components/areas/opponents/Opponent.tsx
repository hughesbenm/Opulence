import { Box, Stack } from "@mui/material"
import { CardQuality, Color, GOLD, MINI_GEM_FONT_SIZE, MINI_GEM_HEIGHT } from "../../../types"
import BuyingPower from "../../pieces/BuyingPower"
import OpponentCard from "./OpponentCard"
import Gem from "../../pieces/Gem"

interface OpponentProps {

}

const Opponent: React.FC<OpponentProps> = ({}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			{Object.values(Color).map((color) => {
				return (
					<Stack
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 1
						}}
					>
						<BuyingPower amount={6} color={color} height={MINI_GEM_HEIGHT} />
						<OpponentCard color={color} />
						<Gem color={color} amount={5} height={MINI_GEM_HEIGHT} fontSize={MINI_GEM_FONT_SIZE}/>
					</Stack>
				)
			})}
			<Stack
				sx={{
					display: 'flex',
					flexBasis: 1,
					justifyContent: 'flex-end',
					gap: 3
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexBasis: 1,
						justifyContent: 'flex-end'
					}}
				>
					<OpponentCard color={CardQuality.THREE} />
					<OpponentCard color={CardQuality.THREE} />
					<OpponentCard color={CardQuality.THREE} />
				</Box>
				<Gem color={GOLD} amount={5} height={MINI_GEM_HEIGHT} fontSize={MINI_GEM_FONT_SIZE} />
			</Stack>
		</Box>
	)
}

export default Opponent;