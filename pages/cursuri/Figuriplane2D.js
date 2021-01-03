import Layout from '../../components/layout';
import Cursuri from '../../components/cursuri';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

export default function Adunare() {
	let numeUtilizator = null;

	if (typeof localStorage !== 'undefined') {
		numeUtilizator = JSON.parse(localStorage.getItem('user')).username;
	}
	return (
		<Layout>
			<Cursuri deschis="Clasa I">
				<div style={{ marginLeft: '40px', backgroundColor: 'rgb(231, 231, 231)' }}>
					<h1 style={{ color: 'rgb(53, 181, 255)' }}>Figuri plane 2D</h1>
					<h3>
						În geometrie, o formă bidimensională poate fi definită ca o figură plană sau o ca formă care are
						două dimensiuni - lungime și lățime.
					</h3>
					<h3>Formele bidimensionale sau 2D nu au grosime și pot fi măsurate doar în lungime și lățime.</h3>
					<h2>Figuri plane 2D:</h2>
					<Image src="/courses_images/Figuri2D/Cerc.png" alt="Cerc" width={300} height={300} />
					<Image src="/courses_images/Figuri2D/Triunghi.png" alt="Triunghi" width={300} height={300} />
					<Image src="/courses_images/Figuri2D/Patrat.png" alt="Patrat" width={300} height={300} />
					<Image src="/courses_images/Figuri2D/Dreptunghi.png" alt="Dreptunghi" width={300} height={300} />
					<Image src="/courses_images/Figuri2D/Romb.png" alt="Romb" width={300} height={300} />
					<Image src="/courses_images/Figuri2D/Pentagon.png" alt="Pentagon" width={300} height={300} />
					<br />
					<br />
					<div style={{ backgroundColor: 'rgb(231, 231, 231)' }}>
						<Link href="../quiz/quizFiguriPlane2D">
							<a style={{ fontSize: '25px' }}>Verifica-ti cunostintele &#x2192;</a>
						</Link>
					</div>
					<br />
				</div>
			</Cursuri>
			<DiscussionEmbed
				shortname={numeUtilizator}
				config={{
					url: 'http://localhost:3001',
					identifier: 'http://localhost:3001/cursuri/Adunare',
					title: 'Figuri plane 2D',
					language: 'en', //e.g. for Traditional Chinese (Taiwan)
				}}
			/>
		</Layout>
	);
}
