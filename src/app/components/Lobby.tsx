import { Box, Button, Typography } from "@mui/material";
import Stash from "./areas/stash/Stash";
import "./pieces/Pieces.css"
import Market from "./areas/market/Market";
import Opponents from "./areas/opponents/OpponentsArea";
import { useGameStarted, useLobbyMembers, usePlayers } from "../hooks/sharedData";
import { LobbyMember, Player } from "../types/gameTypes";

const Lobby = () => {
	const [lobbyMembers, setLobbyMembers] = useLobbyMembers();
	const [gameStarted, setGameStarted] = useGameStarted();

	const toggleReady = (index: number) => {
		if (lobbyMembers === undefined || lobbyMembers.filter((lobbyMember) => lobbyMember.ready).length > 4) {
			return;
		}
		let currentLobbyMembers: LobbyMember[] = [...lobbyMembers];
		currentLobbyMembers[index].ready = !currentLobbyMembers[index].ready;
		setLobbyMembers(currentLobbyMembers)
	}

	const startGame = () => {
		setGameStarted(true);
	}
	
	return (
		<Box
			className={"board"}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				flexGrow: 1,
				flexBasis: 0,
				minWidth: 0,
				minHeight: 0,
			}}
		>
			{lobbyMembers !== undefined && <>
				{lobbyMembers?.map((lobbyMember: LobbyMember, index) => {
					return <Box
					sx={{
						padding: '5px',
						display: 'flex',
						alignItems: 'center',
						bgcolor: 'black',
						borderRadius: '5px',
						gap: 2
					}}
					>
						<img width={50} height={50} src={`https://cdn.discordapp.com/avatars/${lobbyMember.id}/${lobbyMember.icon}.png`} />
						<Typography
							key={lobbyMember.id}
							>
							{lobbyMember.name}
						</Typography>
						<Button
							disableRipple
							variant={'contained'}
							color={lobbyMember.ready ? 'success' : 'error'}
							onClick={() => toggleReady(index)}
							sx={{
								width: "20ch"
							}}
							>
							{lobbyMember.ready ? "Ready" : "Not Ready"}
						</Button>
					</Box>
				})}
				<Button
					variant={"contained"}
					disabled={lobbyMembers.filter((lobbyMember) => lobbyMember.ready).length <= 0}
					onClick={startGame}
				>
					Start Game
				</Button>
			</>}
		</Box>
	)
}

export default Lobby;