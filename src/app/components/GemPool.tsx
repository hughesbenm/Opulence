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
			<Box
				className="gem"
				sx={{
					borderColor: 'color-mix(in srgb, green, black 20%)',
					bgcolor: "green"
				}}
			>
				<h1 className={"gem_text"}>
					5
				</h1>
			</Box>
			<Box
				className="gem"
				sx={{
					borderColor: 'color-mix(in srgb, red, black 20%)',
					bgcolor: "red"
				}}
			>
				<h1 className={"gem_text"}>
					5
				</h1>
			</Box>
			<Box
				className="gem"
				sx={{
					borderColor: 'color-mix(in srgb, blue, black 20%)',
					bgcolor: "blue"
				}}
			>
				<h1 className={"gem_text"}>
					5
				</h1>
			</Box>
			<Box
				className="gem"
				sx={{
					borderColor: 'color-mix(in srgb, white, black 20%)',
					bgcolor: "white"
				}}
			>
				<h1 className={"gem_text"}>
					5
				</h1>
			</Box>
			<Box
				className="gem"
				sx={{
					borderColor: 'black',
					bgcolor: 'color-mix(in srgb, black, white 10%)'
				}}
			>
				<h1 className={"gem_text"}>
					5
				</h1>
			</Box>
			<Box
				className="gem"
				sx={{
					borderColor: 'color-mix(in srgb, #ffb219, black 20%)',
					bgcolor: "#ffb219"
				}}
			>
				<h1 className={"gem_text"}>
					5
				</h1>
			</Box>
		</Box>
	)
}

export default GemPool;