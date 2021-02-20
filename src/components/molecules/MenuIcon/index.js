import React from 'react'
import MenuButton from '../../atoms/MenuButton'
import menuIcon from '../../../assets/icons/menu.svg'
import Icon from '../../atoms/Icon'

const MenuIcon = () => (
	<MenuButton>
		<Icon src={menuIcon} />
	</MenuButton>
)

export default MenuIcon
