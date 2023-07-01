type ToggleProps = {
	type: string;
	setType: Function;
};

export default function Toggle({ type, setType }: ToggleProps) {
	return (
		<div className='flex flex-col w-52'>
			<label className='cursor-pointer label' onClick={() => setType(type == 'EDITOR' ? 'PLAYER' : 'EDITOR')}>
				<span className={`label-text ${type == 'PLAYER' ? 'font-bold' : 'font-light'}`}>Player</span>
				<input type='checkbox' className='toggle toggle-lg toggle-primary' checked={type == 'EDITOR'} />
				<span className={`label-text ${type == 'EDITOR' ? 'font-bold' : 'font-light'}`}>Editor</span>
			</label>
		</div>
	);
}
