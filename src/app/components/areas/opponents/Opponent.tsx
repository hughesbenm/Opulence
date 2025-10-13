import { Box, Stack, Typography } from "@mui/material"
import { CardQuality, Color, GOLD, MINI_GEM_FONT_SIZE, MINI_GEM_HEIGHT } from "../../../types"
import BuyingPower from "../../pieces/BuyingPower"
import OpponentCard from "../../pieces/OpponentCard"
import Gem from "../../pieces/Gem"

interface OpponentProps {

}

const Opponent: React.FC<OpponentProps> = ({}) => {
	return (
		<Stack
			sx={{
				display: 'flex',
				gap: 2
			}}
		>
			<Typography variant={"h5"} noWrap>Current Points: {4}</Typography>
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
							<OpponentCard amount={1} color={color} />
							<Gem color={color} amount={5} height={MINI_GEM_HEIGHT} fontSize={MINI_GEM_FONT_SIZE}/>
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
					<Gem color={GOLD} amount={0} height={MINI_GEM_HEIGHT} fontSize={MINI_GEM_FONT_SIZE} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						height: '100%'
					}}
				>
					<OpponentCard color={CardQuality.ONE} />
					<OpponentCard color={CardQuality.TWO} />
					<OpponentCard color={CardQuality.THREE} />
				</Box>
			</Box>
		</Stack>
	)
}

export default Opponent;