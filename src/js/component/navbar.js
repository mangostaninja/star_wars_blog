import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

//LIBRERIA BOOTSTRAP FOR REACT

import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Badge } from "reactstrap";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);
	const openCloseDropdown = () => {
		setDropdown(!dropdown);
	};
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<Link to={"/"}>
					<img
						src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo.png"
						width="30"
						a
						height="30"
						alt="star wars logo"
						id="logo"
					/>
				</Link>
			</a>
			<Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
				<DropdownToggle caret className="dropdownButton">
					Favorites{" "}
					<Badge color="light" className="badge">
						{store.favorite.length}
					</Badge>
				</DropdownToggle>
				<DropdownMenu right>
					{store.favorite.length > 0 ? (
						store.favorite.map((favorite, index) => {
							return (
								<DropdownItem key={index} toggle={false}>
									<div className="favAndTrash">
										{favorite}
										<i
											id="delete"
											className="far fa-trash-alt pointer trash"
											onClick={() => {
												actions.deleteFavorite({ index });
											}}
										/>
									</div>
								</DropdownItem>
							);
						})
					) : (
						<DropdownItem>
							<p>Empty</p>
						</DropdownItem>
					)}
				</DropdownMenu>
			</Dropdown>
		</nav>
	);
};
export default Navbar;
