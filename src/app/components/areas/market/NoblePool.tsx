import { Box } from "@mui/material"
import Noble from "../../pieces/Noble"
import { useNobles } from "../../../hooks/sharedData"

interface NoblePoolProps {

}

const NoblePool: React.FC<NoblePoolProps> = ({ }) => {
	const [nobles, setNobles] = useNobles();

	if (nobles === undefined) {
		return <p>Loading</p>
	}

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
			{nobles.map((noble) => {
				return (
					<Noble nobleData={noble} />
				)
			})}
		</Box>
	)
}

export default NoblePool;