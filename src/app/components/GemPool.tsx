import { Box, Grid } from "@mui/material";
import "./Market.css"

interface GemPoolProps {

}

const GemPool: React.FC<GemPoolProps> = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				flexDirection: 'column',
				flexGrow: 1
			}}
		>
			<div
				style={{"backgroundColor": "green"}}
				className="gem"
			>
			</div>
			<div
				style={{"backgroundColor": "red"}}
				className="gem"
			>
			</div>
			<div
				style={{"backgroundColor": "blue"}}
				className="gem"
			>
			</div>
			<Box
				style={{"backgroundColor": "color-mix(in srgb, white, black 20%"}}
				className="gem"
			>
			</Box>
			<div
				style={{"backgroundColor": "black"}}
				className="gem"
			>
			</div>
			<div
				style={{"backgroundColor": "gold"}}
				className="gem"
			>
			</div>
		</Box>
	)
}

export default GemPool;