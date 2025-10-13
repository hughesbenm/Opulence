import { Box, Typography } from "@mui/material";
import "./Layout.css"
import { Children, ReactElement } from "react";

interface BoardAreaProps {
	name: string;
	grow?: number;
	children?: ReactElement[] | ReactElement;
	column?: boolean;
}

const BoardArea: React.FC<BoardAreaProps> = ({name, grow = 1, children, column = false}) => {
	const mappedChildren = Children.map(children, child => 
		child
	)
	
	return (
		<Box
			sx={{
				flexGrow: grow,
				flexDirection: (column ? 'column' : 'row'),
				position: 'relative',
				flexBasis: 0
			}}
			className="board_area"
		>
			<Typography
				sx={{
					position: 'absolute',
					right: 0,
					left: 0,
					top: 2
				}}
			>
				{name}
			</Typography>
			{mappedChildren}
		</Box>
	)
}

export default BoardArea;