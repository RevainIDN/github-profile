import '../styles/UserInfo.css'

export default function UserInfo() {
	return (
		<div className='user-info-cont'>
			<div className='user-info-wrapper'>
				<div className='user-icon-cont'>
					<img className='user-icon' src="Chield_alt.svg" alt="" />
				</div>
				<ul className='info-list'>
					<li className='info-item'><span>Followers</span>27839</li>
					<li className='info-item'><span>Following</span>0</li>
					<li className='info-item'><span>Location</span>San Francisco, CA</li>
				</ul>
			</div>
			<div className='info-title-cont'>
				<h1 className='info-name'>GitHub</h1>
				<p className='info-description'>How people build software</p>
			</div>
		</div>

	)
}