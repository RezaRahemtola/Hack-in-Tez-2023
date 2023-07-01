type GameItemProps = {
	image: string;
	price: number;
	title: string;
	description: string;
};

export default function GameItem({ image, price, title, description }: GameItemProps) {
	return (
		<div className='card w-96 bg-base-100 shadow-xl m-8'>
			<figure>
				<img src={image} alt={title} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{description}</p>
				<div className='card-actions justify-between items-center'>
					<div className='font-medium badge badge-secondary badge-outline p-3'>
						<span className='pr-3'>{price} </span>
						<span className='font-bold text-2xl'> XTZ</span>
					</div>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
}
