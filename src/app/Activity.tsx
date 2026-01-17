import { useEffect, useState } from 'react'
import { useDiscordSdk } from '../hooks/useDiscordSdk'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import ActiveGame from './components/ActiveGame'
import Lobby from './components/Lobby'
import { useGameStarted, useLobbyMembers, usePlayers } from './hooks/sharedData'
import { LobbyMember, Player } from './types/gameTypes'
import { Settings } from '@mui/icons-material'
import SettingsModal from './components/SettingsModal'

/**
 * This is your Discord Activity's main component. Customize it as you like!
 *
 * Learn more:
 * https://robojs.dev/discord-activities
 */
export const Activity = () => {
	const { authenticated, discordSdk, status, session } = useDiscordSdk();
	const [channelName, setChannelName] = useState<string>();
	const [gameStarted, setGameStarted] = useGameStarted();
	const [lobbyMembers, setLobbyMembers] = useLobbyMembers();
	const [players, setPlayers] = usePlayers();
	const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

	useEffect(() => {
		// Requesting the channel in GDMs (when the guild ID is null) requires
		// the dm_channels.read scope which requires Discord approval.
		if (!authenticated || !discordSdk.channelId || !discordSdk.guildId) {
			return
		}

		// Collect channel info over RPC
		// Enable authentication to see it! (App.tsx)
		discordSdk.commands.getChannel({ channel_id: discordSdk.channelId }).then((channel) => {
			if (channel.name) {
				setChannelName(channel.name)
			}
		})
		// console.log(session?.user.id)

	}, [authenticated, discordSdk])

	useEffect(() => {
		if (session === null) {
			return;
		}
		if (lobbyMembers === undefined || !lobbyMembers.some((lobbyMember) => lobbyMember.id === session.user.id)) {
			const currentLobbyMembers: LobbyMember[] = lobbyMembers === undefined ? [] : lobbyMembers;
			const newLobbyMember: LobbyMember = {
				id: session!.user.id,
				name: session!.user.global_name!,
				icon: session!.user.avatar ?? "",
				ready: false
			};
			setLobbyMembers([...currentLobbyMembers, newLobbyMember]);
		}
		if (players === undefined) {
			let testMap: Record<string, Player> = {};
			console.log("setting players:", testMap)
			setPlayers(testMap);
		}
	}, [session])

	useEffect(() => {
		console.log("New Players:", players)
	}, [players])

	return (
		<Stack
			display={'flex'}
			sx={{
				height: '100%',
				width: '100%',
				flexBasis: 0,
			}}
		>
			<Box
				display="flex"
				justifyContent={'space-between'}
			>
				<img
					src="/OpulenceLogo.png"
					width={175}
				/>
				<IconButton onClick={() => setSettingsOpen(true)}>
					<Settings fontSize='large' />
				</IconButton>
			</Box>
			<Box
				sx={{
					flexGrow: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: '25px',
					margin: '10px'
				}}
			>
				{gameStarted
					? <ActiveGame />
					: <Lobby />
				}
			</Box>
			{settingsOpen && <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />}
		</Stack>
	)
}
