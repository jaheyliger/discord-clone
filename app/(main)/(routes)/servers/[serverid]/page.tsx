import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { currentProfile } from '@/lib/current-profile';
import { db } from '@/lib/db';

interface ServerIdPageProps {
	params: {
		serverid: string;
	};
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
	const profile = await currentProfile();
	console.log(params)

	if (!profile) {
		return redirectToSignIn();
	}

	const server = await db.server.findUnique({
		where: {
			id: params.serverid,
			members: {
				some: {
					profileId: profile.id
				}
			}
		},
		include: {
			channels: {
				where: {
					name: 'general'
				},
				orderBy: {
					createdAt: 'asc'
				}
			}
		}
	});

	const initialChannel = server?.channels[0];

	if (initialChannel?.name !== 'general') return null;

	return redirect(`/servers/${params.serverid}/channels/${initialChannel?.id}`);
};

export default ServerIdPage;
