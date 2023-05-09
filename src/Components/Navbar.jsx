import { useRef } from "react";
import { FaBars, FaTimes , FaHome , FaImages ,FaTicketAlt,FaAddressCard} from "react-icons/fa";
import "./Navbar.css";
import {  Link, Outlet } from "react-router-dom";


const Navbar =()=> {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
		<header>
			<h2>Trip</h2>
			<nav ref={navRef}>
		<FaHome/><Link to="/">Home</Link>
				
				<FaImages/>
				<Link to="/gallery">Gallery</Link>
			<FaTicketAlt/>
			<Link to="/Reserve">Reserve</Link>
				<FaAddressCard/>
				<Link to="/Feedback">Contact Us</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
		
				
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		
 
		</header>
	<Outlet/>
		</>
	);
}

export default Navbar;
