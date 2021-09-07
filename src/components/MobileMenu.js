import React, { useState, useRef } from "react";
import FocusLock from "./FocusLock";

const MobileMenu = () => {
	const [isShowing, setIsShowing] = useState(false);

	return (
		<>
			<button
				id="open-curtain-button"
				aria-label="open navigation menu"
				class="btn curtain-menu-button"
				onClick={() => setIsShowing(!isShowing)}
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
			</button>
			{isShowing && (
				<FocusLock>
					<div
						// ref={closeButton}
						id="curtain-menu"
						style="width: 100vw; visibility: visible;"
					>
						<div class="curtain-button-placer">
							<button
								id="close-curtain-button"
								class="curtain-menu-button"
								aria-label="close navigation menu"
								onClick={() => setIsShowing(!isShowing)}
								style="opacity: 1;"
							>
								<svg
									stroke="currentColor"
									fill="none"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke-linecap="round"
									stroke-linejoin="round"
									height="1.5rem"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</button>
						</div>
						<div id="curtain-menu-container" style="opacity: 1;">
							<nav>
								<div class="menu-primary_navigation-container">
									<ul id="menu-primary_navigation" class="nav">
										<li
											id="menu-item-157"
											class="menu-item menu-item-type-post_type menu-item-object-post menu-item-157"
										>
											<a href="https://flow.kingsdesign.info/guys-by-the-truck/">
												Guys by the Truck
											</a>
										</li>
										<li
											id="menu-item-162"
											class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-162"
										>
											<a href="#">Dropdown</a>
											<ul class="sub-menu">
												<li
													id="menu-item-158"
													class="menu-item menu-item-type-post_type menu-item-object-post menu-item-158"
												>
													<a href="https://flow.kingsdesign.info/just-some-boots/">
														Just Some Boots
													</a>
												</li>
												<li
													id="menu-item-159"
													class="menu-item menu-item-type-post_type menu-item-object-post menu-item-159"
												>
													<a href="https://flow.kingsdesign.info/guy-in-a-tree/">
														Guy in a Tree
													</a>
												</li>
												<li
													id="menu-item-160"
													class="menu-item menu-item-type-post_type menu-item-object-post menu-item-160"
												>
													<a href="https://flow.kingsdesign.info/the-cat/">
														The Cat
													</a>
												</li>
												<li
													id="menu-item-161"
													class="menu-item menu-item-type-post_type menu-item-object-post menu-item-161"
												>
													<a href="https://flow.kingsdesign.info/tasmanian-trees/">
														Tasmanian Trees
													</a>
												</li>
											</ul>
										</li>
										<li
											id="menu-item-354"
											class="menu-item menu-item-type-post_type menu-item-object-page menu-item-354"
										>
											<a href="https://flow.kingsdesign.info/ffff/">ffff</a>
										</li>
									</ul>
								</div>{" "}
							</nav>
						</div>
					</div>
				</FocusLock>
			)}
		</>
	);
};

export default MobileMenu;
