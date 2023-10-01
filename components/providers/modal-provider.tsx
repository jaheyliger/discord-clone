'use client';

import { useEffect, useState } from 'react';
import { CreateServerModal } from '@/components/modals/create-server-modal';
import { InviteModal } from '../modals/invite-modal';
import { EditServerModal } from '../modals/edit-server-modal';
import { MembersModal } from '../modals/members-modal';
import { CreateChannelModal } from '../modals/create-channel-modal';
import { DeleteServerModal } from '../modals/delete-server-modal';
import { LeaveServerModal } from '../modals/leaver-server-modal';
import { EditChannelModal } from '../modals/edit-channel-modal';
import { DeleteChannelModal } from '../modals/delete-channel-modal';

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<CreateServerModal />
			<CreateChannelModal />
			<EditChannelModal />
			<DeleteChannelModal />
			<InviteModal />
			<EditServerModal />
			<LeaveServerModal />
			<DeleteServerModal />
			<MembersModal />
		</>
	);
};
