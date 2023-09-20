import { initialProfile } from "@/lib/initial-profile"
import { db } from "@/lib/db"
import {redirect} from 'next/navigation'
import InitialModal from '@/components/modals/initial-modal';

const SetupPage = async () => {

    const profile = await initialProfile()

    //search server that belongs to user
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

// if server fouund return that server
    if(server) return redirect(`/servers/${server.id}`)

  return <InitialModal />;
}

export default SetupPage