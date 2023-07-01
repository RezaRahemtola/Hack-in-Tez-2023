import EditorInterface from '@/components/EditorInterface';
import PlayerInterface from '@/components/PlayerInterface';
import Toggle from '@/components/Toggle';
import { useState } from 'react';

export default function Page() {
	const [type, setType] = useState('PLAYER');

	return (
		<div>
			<div className='flex justify-center'>
				<Toggle type={type} setType={(value: string) => setType(value)} />
			</div>

			{type == 'EDITOR' && <EditorInterface />}
			{type == 'PLAYER' && <PlayerInterface />}
		</div>
	);
}
