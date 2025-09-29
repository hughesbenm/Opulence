import { Box, Stack, Typography } from "@mui/material";
import BoardArea from "../../layout/BoardArea"
import './Opponents.css'
import OpponentCard from "./OpponentCard";
import { Color, OPPONENT_GEM_FONT_SIZE, OPPONENT_GEM_HEIGHT } from "../../../types";
import Gem from "../../pieces/Gem";
import BuyingPower from "../../pieces/BuyingPower";

interface OpponentsProps {
	
}

const Opponents: React.FC<OpponentsProps> = ({}) => {

	return (
		<BoardArea name="Opponents">
			<Stack
				sx={{
					paddingTop: '25px',
					flexGrow: 1,
					display: 'flex',
					gap: '22vh'
				}}
			>
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
								<BuyingPower amount={6} color={color} height={OPPONENT_GEM_HEIGHT} />
								<OpponentCard color={color} />
								<Gem color={color} amount={5} height={OPPONENT_GEM_HEIGHT} fontSize={OPPONENT_GEM_FONT_SIZE}/>
							</Stack>
						)
					})}
				</Box>
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
								<BuyingPower amount={6} color={color} height={OPPONENT_GEM_HEIGHT} />
								<OpponentCard color={color} />
								<Gem color={color} amount={5} height={OPPONENT_GEM_HEIGHT} fontSize={OPPONENT_GEM_FONT_SIZE}/>
							</Stack>
						)
					})}
					
				</Box>
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
								<BuyingPower amount={6} color={color} height={OPPONENT_GEM_HEIGHT} />
								<OpponentCard color={color} />
								<Gem color={color} amount={5} height={OPPONENT_GEM_HEIGHT} fontSize={OPPONENT_GEM_FONT_SIZE}/>
							</Stack>
						)
					})}
					
				</Box>
			</Stack>
		</BoardArea>
	)
}

export default Opponents;