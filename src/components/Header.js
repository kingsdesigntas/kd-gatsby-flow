import React from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "gatsby";

const Header = () => {
	return (
		<header class="theme-header">
			<div class="header-content">
				<Link aria-label="brand logo" to="/" class="brand">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="2rem"
						viewBox="0 0 100 80"
						fill="currentColor"
					>
						<path d="M0 0v20h71.6c1-1.6 2.1-3.1 3.4-4.6A62.6 62.6 0 01100 0zM0 30v20h57.5l1.6-3.3c2.5-5.4 4.6-11.2 7-16.7zM0 60v20h37.3c5.1-6.5 10.1-13 14.5-20z"></path>
					</svg>

					<span>KDGATSBY</span>
				</Link>
				<div class="navigation-items">
					<nav class="desktop-nav">
						<div class="menu-primary_navigation-container">
							<ul id="menu-primary_navigation-1" class="nav">
								<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-157">
									<Link to="/fish">Fish</Link>
								</li>
								<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-162">
									<a href="#">Dropdown</a>
									<ul class="sub-menu">
										<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-158">
											<a href="https://flow.kingsdesign.info/just-some-boots/">
												Just Some Boots
											</a>
										</li>
										<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-159">
											<a href="https://flow.kingsdesign.info/guy-in-a-tree/">
												Guy in a Tree
											</a>
										</li>
										<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-160">
											<a href="https://flow.kingsdesign.info/the-cat/">
												The Cat
											</a>
										</li>
										<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-161">
											<a href="https://flow.kingsdesign.info/tasmanian-trees/">
												Tasmanian Trees
											</a>
										</li>
									</ul>
								</li>
								<li class="menu-item">
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</nav>
					{/* <button
						id="open-curtain-button"
						aria-label="open navigation menu"
						class="btn curtain-menu-button"
						// onclick="openCurtain()"
					>
						<svg
							fill="currentColor"
							height="1.5rem"
							viewBox="0 0 48 48"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g>
								<rect x="6" y="22" width="36" height="4"></rect>
								<rect x="6" y="10" width="36" height="4"></rect>
								<rect x="6" y="34" width="36" height="4"></rect>
							</g>
						</svg>
					</button> */}
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};

export default Header;
