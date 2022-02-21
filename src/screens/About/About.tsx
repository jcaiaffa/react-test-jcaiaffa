import React from "react";
import Footer from "../../components/Footer/Footer";
import GenericText from "../../components/GenericText/GenericText";
import Hero from "../../components/Hero/Hero";
import PostList from "../../components/PostList/PostList";

const About = () => {
	const content = `
	<h1>Get more detailed information about us</h1>
	<p>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quisquam labore velit
	doloremque fuga nam in fugit dignissimos, obcaecati commodi iure iusto omnis optio nobis
	quos eaque, quibusdam vel? Reiciendis! Nostrum aut veritatis totam asperiores ab incidunt
	minima explicabo quibusdam sed libero qui sint architecto earum, delectus eum recusandae
	nobis voluptas odio, illo animi commodi est ullam! Minima, sapiente iusto. Iure maxime
	quae blanditiis fuga, nulla architecto voluptatum vel corrupti saepe, explicabo veritatis
	beatae? Repellat consequatur eligendi atque odit soluta placeat, et neque maiores tenetur
	voluptas enim earum impedit odio. Harum officiis, quo necessitatibus maiores alias eum
	dolores eligendi, laboriosam veniam tenetur, voluptas atque aspernatur exercitationem sit
	ipsa voluptatum iure voluptate? Praesentium at inventore numquam sit? Minus sint quis
	voluptas.
	</p>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum beatae error consequatur
		consequuntur mollitia recusandae amet eligendi, illo sed nulla repellendus sapiente cumque
		dignissimos esse fugiat officia optio magnam corporis. Qui exercitationem tenetur aperiam
		assumenda iste velit eos, fugiat ipsam voluptates ab maxime incidunt repellat autem totam
		repudiandae temporibus natus harum quae quidem molestias! Minima soluta distinctio dolores
		alias dolorum. Nisi magnam itaque recusandae quas architecto voluptas aliquid ea!
		Doloremque blanditiis vel eligendi quos recusandae provident laboriosam itaque inventore?
		Repellendus beatae vero numquam libero neque molestias et magnam fugit ipsam?
	</p>
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quod atque placeat
		consectetur assumenda aliquam nobis porro non. Ipsa odit incidunt obcaecati? Libero,
		expedita. Ut voluptates recusandae ratione. Quidem, repellendus. Nobis vel, unde assumenda
		optio aperiam in dolorum reiciendis commodi voluptate libero odio nesciunt velit quam
		alias sit, tenetur nisi voluptates. Quidem numquam eaque similique, nemo voluptas tempore
		id quia! Vero dignissimos atque voluptas non iure possimus consequatur, distinctio error
		iusto porro asperiores soluta, eos consequuntur sapiente repellat ab ex commodi officiis.
		Accusantium quidem repudiandae quos porro praesentium sequi iusto. Consequatur natus
		beatae voluptate distinctio consectetur ipsum deleniti labore maxime accusamus itaque. Sed
		ullam autem nihil iure veniam velit, illum at maxime recusandae saepe dolorem cumque sint
		atque, possimus dolore.
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem harum doloremque nam
		aspernatur deleniti, earum accusantium voluptatem modi sunt accusamus et quasi quos
		laboriosam impedit neque placeat dignissimos deserunt nihil. Aliquam quam aut asperiores,
		ullam obcaecati ut repudiandae sapiente excepturi animi ratione atque vitae dolorum.
		Libero, doloribus officia. Voluptatem, dolor? Fugit illo porro perferendis, possimus quia
		tenetur in aliquid sapiente.
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic harum exercitationem
		quae totam tenetur optio. Sit nulla pariatur quidem nisi fuga aliquam iusto consequuntur
		autem consequatur atque, dicta laboriosam. Quis, sit laboriosam! Numquam ipsum atque
		provident velit praesentium magni itaque temporibus eveniet vero exercitationem laboriosam
		nesciunt minima, laudantium beatae id architecto sequi cupiditate consequuntur. At
		laboriosam voluptas animi totam.
	</p>
	`;

	return (
		<div>
			<Hero title={"This is our story"} subtitle={""} featuredImage={""} />
			<GenericText content={content} />
			<PostList
				searchBarVisible={false}
				paginationVisible={false}
				itemsPerPage={6}
				featuredPost={false}
			/>
			<Footer />
		</div>
	);
};

export default About;
