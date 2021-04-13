import './Details.scss';

const Details = props => {
	return (
		<div className='Details'>
			{Object.entries(props).map(([key, val]) => {
				return (
					<div key={key} className='detailsItem'>
						<span className='detailsKey'>{key}</span>
						<span className='detailsVal'>{val}</span>
					</div>
				)
			})}
		</div>
	)
}

export default Details;