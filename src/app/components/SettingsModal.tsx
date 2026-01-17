import { Button, Dialog } from "@mui/material"
import { useGameStarted, useLobbyMembers, useMarketCards, useMarketGems, useNobles, usePlayers, useStashCards, useStashGems } from "../hooks/sharedData";
import { useDiscordSdk } from "../../hooks/useDiscordSdk";
import { useEffect } from "react";

interface SettingsModalProps {
	open: boolean;
	onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose }) => {
	const [lobbyMembers, setLobbyMembers] = useLobbyMembers();
	const [players, setPlayers] = usePlayers();
	const [gameStarted, setGameStarted] = useGameStarted();
	const { session } = useDiscordSdk();

	const endGame = () => {
		if (players === undefined) { return; }
		setGameStarted(false);
		setLobbyMembers(Array.from(Object.values(players)).map((player) => {
			return {
				id: player.id,
				name: player.name,
				icon: player.icon,
				ready: false
			}
		}));
	}

	return (
		<Dialog
			open={open}
		>
			<Button onClick={() => { endGame }} >End Game</Button>
			<Button onClick={onClose} >Close</Button>
		</Dialog>
	)
}

export default SettingsModal;