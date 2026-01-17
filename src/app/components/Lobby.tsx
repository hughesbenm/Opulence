import { Box, Button, Typography } from "@mui/material";
import Stash from "./areas/stash/Stash";
import "./pieces/Pieces.css"
import Market from "./areas/market/Market";
import Opponents from "./areas/opponents/OpponentsArea";
import { useGameStarted, useLobbyMembers, useMarketCards, useMarketGems, useNobles, usePlayers, useStashCards, useStashGems } from "../hooks/sharedData";
import { LobbyMember, Player } from "../types/gameTypes";
import { useDiscordSdk } from "../../hooks/useDiscordSdk";
import { use, useEffect } from "react";
import { CardData, CardQuality, emptyCards, emptyGems } from "../types";
import { getStartingGems, getStartingNobleNumber } from "../utils/playerCount";
import { noblesData } from "../../../data/nobles";
import { shuffle } from "../utils/shuffle";
import { cardsData } from "../../../data/cards";

const Lobby = () => {
	const [lobbyMembers, setLobbyMembers] = useLobbyMembers();
	const [players, setPlayers] = usePlayers();
	const [gameStarted, setGameStarted] = useGameStarted();
	const { session } = useDiscordSdk();
	const [marketGems, setMarketGems] = useMarketGems();
	const [nobles, setNobles] = useNobles();
	const [marketCards, setMarketCards] = useMarketCards();
	const { stashCards, setStashCards } = useStashCards();
	const { stashGems, setStashGems } = useStashGems();

	useEffect(() => {
		if (gameStarted && stashCards === undefined) {
			setStashCards(emptyCards);
		}
		if (gameStarted && stashGems === undefined) {
			setStashGems(emptyGems);
		}
	}, [gameStarted])

	if (session === null) {
		return <p>Loading</p>
	}

	const toggleReady = (index: number) => {
		console.log("Toggle Ready")
		if (
			lobbyMembers === undefined
			|| lobbyMembers[index].id !== session.user.id
			|| lobbyMembers.filter((lobbyMember) => lobbyMember.ready).length > 4
		) {
			return;
		}
		let currentLobbyMembers: LobbyMember[] = [...lobbyMembers];
		currentLobbyMembers[index].ready = !currentLobbyMembers[index].ready;
		setLobbyMembers(currentLobbyMembers)
	}

	const startGame = () => {
		if (lobbyMembers === undefined || players === undefined) {
			return;
		}
		let newPlayers = { ...players };
		setPlayers(() => {
			lobbyMembers.forEach((lobbyMember) => {
				newPlayers[lobbyMember.id] = { ...lobbyMember, gems: emptyGems, hand: [], stash: emptyCards, nobles: [] };
			})
			return newPlayers;
		})
		if (marketCards === undefined) {
			setMarketCards({
				[CardQuality.ONE]: shuffle(cardsData["one"] as CardData[]),
				[CardQuality.TWO]: shuffle(cardsData["two"] as CardData[]),
				[CardQuality.THREE]: shuffle(cardsData["three"] as CardData[])
			});
		}
		if (nobles === undefined) { setNobles(shuffle(noblesData).splice(0, getStartingNobleNumber(Object.keys(players).length))); }
		if (marketGems === undefined) { setMarketGems(getStartingGems(Object.keys(players).length)); }

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
						key={lobbyMember.id}
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