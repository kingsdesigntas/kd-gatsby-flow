import React from "react";

const Footer = () => {
	return (
		<footer class="theme-footer">
			<div class="footer-content">
				<div
					data-sal="slide-up"
					data-sal-duration="600"
					class="flow sal-animate"
					style="--flow: 1rem"
				>
					<p class="font-sm heading-font" style="font-weight:bold">
						About Us
					</p>
					<div class="widget block-2 widget_block widget_text">
						<p>
							I'm footer Column number one. You can edit me in the widgets
							section.
						</p>
					</div>{" "}
				</div>
				<div
					data-sal="slide-up"
					data-sal-duration="600"
					class="flow sal-animate"
					style="--flow: 1rem"
				>
					<p class="font-sm heading-font" style="font-weight:bold">
						Sitemap
					</p>
					<nav>
						<div class="menu-footer_one-container">
							<ul id="menu-footer_one" class="nav">
								<li
									id="menu-item-190"
									class="menu-item menu-item-type-post_type menu-item-object-post menu-item-190"
								>
									<a href="https://flow.kingsdesign.info/tasmanian-trees/">
										Tasmanian Trees
									</a>
								</li>
							</ul>
						</div>{" "}
					</nav>
				</div>
				<div
					data-sal="slide-up"
					data-sal-duration="600"
					class="flow sal-animate"
					style="--flow: 1rem"
				>
					<p class="font-sm heading-font" style="font-weight:bold">
						Contact Us
					</p>
					<div class="widget block-3 widget_block widget_text">
						<p>
							I'm footer Column number three. You can edit me in the widgets
							section.
						</p>
					</div>{" "}
				</div>
				<div
					data-sal="slide-up"
					data-sal-duration="600"
					class="flow sal-animate"
					style="--flow: 1rem"
				>
					<p class="font-sm heading-font" style="font-weight:bold">
						Information
					</p>

					<nav></nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
