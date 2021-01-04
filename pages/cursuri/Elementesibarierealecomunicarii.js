import Layout from '../../components/layout';
import Cursuri from '../../components/cursuri';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

export default function ElementeSiBariereAleComunicarii() {
	let numeUtilizator = null;

	if (typeof localStorage !== 'undefined') {
		numeUtilizator = JSON.parse(localStorage.getItem('user')).username;
	}
	return (
		<Layout>
			<Cursuri deschis="Luarea deciziei şi leadership-ul">
				<div style={{ marginLeft: '40px', backgroundColor: 'rgb(231, 231, 231)' }}>
					<h2> Elemente şi bariere ale comunicării</h2>
					<br />
					<p>Elementele comunicării sunt:</p>
					<ul>
						<li>comunicatorul – persoana care emite semnalul</li>
						<li>
							percepţia/ interpretarea mesajului – ceea ce înţelege comunicatorul prin mesajul transmis
						</li>
						<li>codificarea – transformarea ideilor comunicatorului în simboluri</li>
						<li>mesajul – verbal sau nonverbal, subiectul comunicării</li>
						<li>
							canalul – elementul de transport al mesajului (hârtia, vocea, zâmbetul, expresia îngrijorată
							a feţei, etc.)
						</li>
						<li>decodificarea – interpretarea dată de receptorul mesajului</li>
						<li>receptorul – persoana căreia îi este destinat mesajul</li>
						<li>feedback-ul – răspunsul dat de către receptor</li>
						<li>“zgomotul” – bariere în calea comunicării</li>
					</ul>
					<p>Barierele cele mai frecvente în calea comunicării sunt:</p>
					<ul>
						<li>interpretări diferite datorate codificării sau decodificării greşite</li>
						<li>percepţia selectivă</li>
						<li>
							deprinderi scăzute de ascultare activă. Pentru a fi un bun ascultător trebuie să te opreşti
							din vorbit, să-i arăţi interes vorbitorului, să elimini lucrurile ce te pot distrage, să te
							pui în locul celui care comunică, să ai răbdare, să nu fii critic, să pui întrebări etc.
						</li>
						<li>judecăţile de valoare făcute de către receptor despre comunicator</li>
						<li>credibilitatea sursei</li>
						<li>filtrarea – transmiterea doar a informaţiei pozitive</li>
						<li>presiunea timpului</li>
						<li>cantitatea prea mare de informaţie.</li>
					</ul>
					<p>Îmbunătăţirea comunicării în organizaţii se face prin mai multe metode, dintre care:</p>
					<ul>
						<li>verificarea dacă s-a înţeles ceea ce comunicatorul a dorit să transmită;</li>
						<li>
							normalizarea “curgerii informaţiei” – eliminarea barierelor şi verificarea calităţii şi
							cantităţii informaţiei;
						</li>
						<li>utilizarea feedback-ului</li>
						<li>utilizarea empatiei (punerea în locul celuilalt);</li>
						<li>simplificarea limbajului;</li>
						<li>ascultarea activă;</li>
						<li>utilizarea sistemelor informale de comunicare</li>
					</ul>
					<br />
					<br />
					<div style={{ backgroundColor: 'rgb(231, 231, 231)' }}>
						<Link href="../quiz/quizElementeSiBariere">
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
