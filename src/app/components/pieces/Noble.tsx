import { Box, Stack } from "@mui/material"
import OpponentCard from "./OpponentCard";
import { Color, NobleData } from "../../types";

interface NobleProps {
	nobleData: NobleData;
}

const Noble: React.FC<NobleProps> = ({ nobleData }) => {
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
				{Array.from(Object.values(Color)).map((color) => {
					if (nobleData[color] === 0 || nobleData[color] === undefined) {
						return <></>
					}
					return <OpponentCard color={color} amount={nobleData[color]} />
				})}
			</Box>
		</Stack>
	)
}

export default Noble;