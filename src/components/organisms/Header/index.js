import styled from 'styled-components'
import Logo from '../../atoms/Logo'
import Navbar from '../../molecules/Navbar'
import MenuIcon from '../../molecules/MenuIcon'
import { DARKPURPLE } from '../../constants'

const HeaderWrapper = styled.header`
	width: '100%';
	height: 70px;
	background-color: ${DARKPURPLE};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;
`

const Header = () => (
	<HeaderWrapper>
		<Logo>TV SHOWS</Logo>
		<MenuIcon />
		<Navbar />
	</HeaderWrapper>
)

export default Header
