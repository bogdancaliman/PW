import Layout from '../../components/layout';
import Cursuri from '../../components/cursuri';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

export default function Leadership() {
	let numeUtilizator = null;

	if (typeof localStorage !== 'undefined') {
		numeUtilizator = JSON.parse(localStorage.getItem('user')).username;
	}
	return (
		<Layout>
			<Cursuri deschis="Luarea deciziei şi leadership-ul">
				<div style={{ marginLeft: '40px', backgroundColor: 'rgb(231, 231, 231)' }}>
					<h2> Leadership</h2>
					<br />
					<p>
						Leadership-ul este capacitatea de a influenţa comportamentul oamenilor cu scopul de a îndeplini
						obiectivele propuse.
					</p>
					<p>
						A fi lider (a avea leadership) este cu totul altceva decât a fi manager (a avea calităţi
						manageriale). Leadership-ul este o componentă a managementului (cea care se referă la
						influenţarea persoanelor) şi se focalizează pe situaţii comportamentale, pe când managementul
						este cu o arie de acţiune mai largă şi se focalizează atât pe situaţii comportamentale, cât şi
						necomportamentale. “Leadership-ul este o parte a managementului, dar nu tot... Este abilitatea
						de a-i convinge pe alţii să se străduie să atingă obiectivele propuse. Este factorul uman care
						leagă grupul şi îl motivează pentru atingerea ţelurilor.” (Keith Davis)
					</p>
					<p>
						Leadership-ul este procesul de influenţare a oamenilor de a se comporta într-un anumit mod
						pentru a atinge obiectivele organizaţiei.
					</p>
					<Image src="/ss/Screenshot_8.png" alt="Cerc" width={1200} height={400} />
					<Image src="/ss/Screenshot_9.png" alt="Cerc" width={1200} height={600} />
					<h3>A. Teoria caracteristicilor - trăsăturile caracteristice ale liderilor sunt:</h3>
					<p>
						Direcţionare (realizări trecute în şcoală sau sport) – liderii demonstrează o înaltă capacitate
						de efort şi o dorinţă înaltă de împlinire, ambiţie, energie, tenacitate şi iniţiativă.
					</p>
					<p>
						Dorinţa de a conduce, de a avea un statut înalt şi o poziţie socio-economică – dorinţă puternică
						de a-i influenţa pe ceilalţi, demonstrează dorinţa de a-şi asuma responsabilitatea.
					</p>
					<p>
						Onestitate şi integritate – relaţii bazate pe încredere, înaltă corespondenţă între ceea ce spun
						şi ceea ce fac.
					</p>
					<p>
						Încredere în sine; maturitate şi stabilitate emoţională – trebuie să-i convingă pe ceilalţi de
						corectitudinea scopurilor şi deciziilor.
					</p>
					<p>
						Inteligenţă – pentru a memora, sintetiza şi interpreta o cantitate de informaţii, pentru a fi în
						stare să creeze viziuni, să rezolve probleme şi să ia decizii corecte.
					</p>
					<p>
						Cunoştinţe relevante privind munca – le permite să ia decizii şi să le înţeleagă implicaţiile.
					</p>
					<p>Deprinderea de a fi activ în societate şi de a se adapta la diferite grupuri.</p>
					<h3>B. Teoria comportamentală</h3>
					<Image src="/ss/Screenshot_10.png" alt="Cerc" width={1200} height={400} />
					<ol>
						<li>Liderul ia decizia şi o anunţă subordonaţilor</li>
						<li>
							Liderul “vinde” decizia (convinge subordonaţii că este bună decizia pe care a luat-o singur)
						</li>
						<li>Liderul prezintă idei şi îşi invită subordonaţii să pună întrebări</li>
						<li>Liderul prezintă problema, primeşte sugestii şi ia decizia</li>
						<li>Liderul prezintă o posibilă decizie care poate fi schimbată</li>
						<li>Liderul defineşte limitele şi invită subordonaţii să ia decizia</li>
						<li>Liderul permite subordonaţilor să funcţioneze în anumite limite definite de superior</li>
					</ol>
					<h3>C. Teoria situaţiilor</h3>
					<p>
						Există doi factori de situaţie care sunt determinanţi pentru stilul de leadership practicat, şi
						anume: caracteristicile personale ale subordonaţilor şi mediul de muncă.
					</p>
					<p>
						Caracteristicile personale ale subordonaţilor includ abilităţile acestora, încrederea pe care o
						au în ei înşişi, nevoile şi motivaţiile personale.
					</p>
					<p>
						Factorii mediului de muncă includ: cultura organizaţională, filozofia conducerii firmei, modul
						în care este exercitată puterea, politicile şi regulile firmei etc.
					</p>
					<Image src="/ss/Screenshot_11.png" alt="Cerc" width={800} height={700} />
					<h3>D. Teoria tranzacţională</h3>
					<p>Ultimele cercetări în domeniul leadership-ului diferenţiază două categorii de lideri:</p>
					<ul>
						<li>
							lideri tranzacţionali, care îşi ghidează şi îşi motivează subordonaţii în direcţia
							scopurilor stabilite prin clarificarea rolurilor şi sarcinilor lor;
						</li>
						<li>
							lideri transformaţionali, care îşi inspiră subordonaţii să se ridice deasupra intereselor
							lor personale pentru binele organizaţiei din care fac parte şi sunt capabili de a produce un
							efect extraordinar asupra subordonaţilor. Liderii transformaţionali sunt lideri
							charismatici, ceea ce înseamnă că au o mare încredere în sine, au viziuni puternice şi
							comportament neconvenţional; aceştia sunt agenţii schimbărilor radicale.
						</li>
					</ul>
					<br />
					<br />
					<div style={{ backgroundColor: 'rgb(231, 231, 231)' }}>
						<Link href="../quiz/quizLeadership">
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
