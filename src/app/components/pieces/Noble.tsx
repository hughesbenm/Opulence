import { Box, Stack } from "@mui/material"
import OpponentCard from "./OpponentCard";
import { Color } from "../../types";

interface NobleProps {

}

const Noble: React.FC<NobleProps> = ({}) => {
	return (
		<Stack
			className='noble'
			sx={{
				display: 'flex'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '4vh',
					fontSize: 'small',
					paddingRight: '7px'
				}}
			>
				<h1 className="text">
					{3}
				</h1>
			</Box>
			<Box
				sx={{
					display: 'flex'
				}}
			>
				<OpponentCard color={Color.WHITE} amount={1}/>
				<OpponentCard color={Color.GREEN} amount={2}/>
			</Box>
		</Stack>
	)
}

export default Noble;