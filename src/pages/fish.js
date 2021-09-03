import * as React from "react";
import Layout from "/src/layouts/Layout";
import * as styles from "./index.module.css";
import HeadSEO from "/src/components/HeadSEO";
import { StaticImage } from "gatsby-plugin-image";

const Fish = () => {
	return (
		<Layout>
			<HeadSEO title="Fish Page" />
			<section class="alignfull">
				<div class="alignmedium flow mx-auto">
					<h1>I'm the top of the page</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
						ratione quae sit quod sapiente cupiditate? Lorem, ipsum dolor sit
						amet consectetur adipisicing elit. Quae, placeat! Esse ea similique
						fugit commodi quaerat, cupiditate recusandae sint dignissimos?
					</p>
					<p>
						Minima iusto cupiditate quaerat quae voluptatum recusandae commodi
						doloremque dolore!
					</p>
				</div>
			</section>
			<section class="banner banner-md flow-space-xl">
				<StaticImage
					src="../images/OutsideOffice-FullRes_0019.jpg"
					alt="Diwash"
					layout="fullWidth"
					objectPosition="65% 50%"
					aspectRatio="1"
				/>
				<div class="alignmedium mx-auto flow-space-xl">
					<h2>I'm a real banner!</h2>
				</div>
			</section>
			<section class="alignfull">
				<div class="alignmedium flow mx-auto">
					<h2>I'm not the top of the page</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
						ratione quae sit quod sapiente cupiditate? Lorem, ipsum dolor sit
						amet consectetur adipisicing elit. Quae, placeat! Esse ea similique
						fugit commodi quaerat, cupiditate recusandae sint dignissimos?
					</p>
					<p>
						Minima iusto cupiditate quaerat quae voluptatum recusandae commodi
						doloremque dolore!
					</p>
				</div>
			</section>
			<section class="banner banner-md flow-space-xl">
				<StaticImage
					src="../images/OutsideOffice-FullRes_0042.jpg"
					alt="Diwash"
					layout="fullWidth"
					objectPosition="65% 50%"
					aspectRatio="1"
				/>
				<div class="alignmedium mx-auto flow-space-xl">
					<h2>I'm a real banner!</h2>
				</div>
			</section>
			<section class="alignfull">
				<div class="alignmedium flow mx-auto">
					<h2>I'm not the top of the page</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
						ratione quae sit quod sapiente cupiditate? Lorem, ipsum dolor sit
						amet consectetur adipisicing elit. Quae, placeat! Esse ea similique
						fugit commodi quaerat, cupiditate recusandae sint dignissimos?
					</p>
					<p>
						Minima iusto cupiditate quaerat quae voluptatum recusandae commodi
						doloremque dolore!
					</p>
				</div>
			</section>
			<section class="banner banner-md flow-space-xl">
				<StaticImage
					src="../images/OutsideOffice-FullRes_0046.jpg"
					alt="Diwash"
					layout="fullWidth"
					objectPosition="65% 50%"
					aspectRatio="1"
				/>
				<div class="alignmedium mx-auto flow-space-xl">
					<h2>I'm a real banner!</h2>
				</div>
			</section>
			<section class="alignfull">
				<div class="alignmedium flow mx-auto">
					<h2>I'm not the top of the page</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
						ratione quae sit quod sapiente cupiditate? Lorem, ipsum dolor sit
						amet consectetur adipisicing elit. Quae, placeat! Esse ea similique
						fugit commodi quaerat, cupiditate recusandae sint dignissimos?
					</p>
					<p>
						Minima iusto cupiditate quaerat quae voluptatum recusandae commodi
						doloremque dolore!
					</p>
				</div>
			</section>
		</Layout>
	);
};

export default Fish;
