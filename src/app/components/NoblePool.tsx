import { Box } from "@mui/material"
import "./Market.css"

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
				// gap: 2,
				alignItems: 'center',
				minHeight: 0,
				bgcolor: 'white',
			}}
		>
			<Box
				className='noble'
			>
				
			</Box>
			<Box
				className='noble'
			>
				
			</Box>
			<Box
				className='noble'
			>
				
			</Box>
			<Box
				className='noble'
			>
				
			</Box>
			<Box
				className='noble'
			>
				
			</Box>
		</Box>
	)
}

export default NoblePool;