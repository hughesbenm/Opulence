import { Box } from "@mui/material"
import "./Market.css"
import Noble from "./pieces/Noble"

interface NoblePoolProps {

}

const NoblePool: React.FC<NoblePoolProps> = ({}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexGrow: 2,
				flexBasis: 0,
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				minHeight: 0,
			}}
		>
			<Noble />
			<Noble />
			<Noble />
			<Noble />
			<Noble />
		</Box>
	)
}

export default NoblePool;