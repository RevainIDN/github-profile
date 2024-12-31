import '../styles/UserInfo.css'

export default function UserInfo() {
	return (
		<div className='user-info-cont'>
			<img className='user-icon' src="" alt="" />
			<ul className='info-list'>
				<li className='info-item'></li>
				<li className='info-item'></li>
				<li className='info-item'></li>
			</ul>
			<div className='info-title-cont'>
				<h1 className='info-name'></h1>
				<p className='info-description'></p>
			</div>
		</div>

	)
}