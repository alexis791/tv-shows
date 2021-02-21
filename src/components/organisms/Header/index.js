import styled from 'styled-components'
import Logo from '../../atoms/Logo'
import Navbar from '../../molecules/Navbar'
import MenuIcon from '../../molecules/MenuIcon'
import MobileMenu from '../../organisms/MobileMenu'
import { DARKPURPLE } from '../../constants'

const Wrapper = styled.header`
	height: 70px;
	width: 100%;
	background-color: ${DARKPURPLE};
`

const Container = styled.div`
	height: inherit;
	max-width: 1900px;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;
	margin: 0 auto;
`

const Header = () => (
	<Wrapper>
		<Container>
			<Logo>TV SHOWS</Logo>
			<MenuIcon />
			<Navbar />
		</Container>
	</Wrapper>
)

export default Header
