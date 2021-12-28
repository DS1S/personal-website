import { uid } from 'react-uid';

export default function NavbarLinks(props) {
	const openStyle = props.toggleable && props.showMenu ? { display: 'flex', maxHeight: '500px' } : {};

	return (
		<div className={props.styles.linkContainer} style={openStyle} hidden={!props.showMenu}>
			{props.links.map((val, index) => {
				return (
					<p
						className={`${props.styles.navLink} ${props.activeLinks[index] ? props.styles.activeLink : ''}`}
						key={uid(val)}
						onClick={(e) => props.handleLinkClick(index)}
					>
						{val}
					</p>
				);
			})}
		</div>
	);
}
