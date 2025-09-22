import { useEffect, useState } from 'react'
import { useDiscordSdk } from '../hooks/useDiscordSdk'
import { Box, Stack } from '@mui/material'
import ActiveGame from './components/ActiveGame'

/**
 * This is your Discord Activity's main component. Customize it as you like!
 *
 * Learn more:
 * https://robojs.dev/discord-activities
 */
export const Activity = () => {
	const { authenticated, discordSdk, status } = useDiscordSdk()
	const [channelName, setChannelName] = useState<string>()

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
	}, [authenticated, discordSdk])

	return (
		<Stack
			display={'flex'}
			sx={{
				// bgcolor: 'red',
				height: '100%',
				width: '100%',
				flexBasis: 0
			}}
		>
			<Box
				display="flex"
				// bgcolor={'green'}
				justifyContent={'flex-start'}
			>
				<img
					src="/OpulenceLogo.png"
					width={175}
				/>
			</Box>
			<ActiveGame/>

		</Stack>
	)
}
