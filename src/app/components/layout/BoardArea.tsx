import { Box, Typography } from "@mui/material";
import "./Layout.css"
import { Children, ReactElement } from "react";

interface BoardAreaProps {
	name: string;
	grow?: number;
	children?: ReactElement[];
	column?: boolean;
}

const BoardArea: React.FC<BoardAreaProps> = ({name, grow = 1, children, column = false}) => {
	const mappedChildren = Children.map(children, child => 
		child
	)
	
	return (
		<Box sx={{flexGrow: grow, flexDirection: (column ? 'column' : 'row')}} className="board_area">
			<Typography>{name}</Typography>
			{mappedChildren}
		</Box>
	)
}

export default BoardArea;