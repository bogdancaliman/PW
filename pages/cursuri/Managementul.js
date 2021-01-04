import Layout from '../../components/layout';
import Cursuri from '../../components/cursuri';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

export default function TeoriiManageriale() {
	let numeUtilizator = null;

	if (typeof localStorage !== 'undefined') {
		numeUtilizator = JSON.parse(localStorage.getItem('user')).username;
	}
	return (
		<Layout>
			<Cursuri deschis="Introducerea in management">
				<div style={{ marginLeft: '40px', backgroundColor: 'rgb(231, 231, 231)' }}>
					<h2> Managementul</h2>
					<p>
						Managementul este procesul de stabilire a unor obiective şi de coordonare a eforturilor
						personalului cu scopul de a le realiza într-un mod eficient şi eficace.
					</p>
					<p>Managementul este:</p>
					<ul>
						<li>
							artă deoarece necesită utilizarea unor deprinderi de comportament şi judecată care nu pot fi
							cuantificate;
						</li>
						<li>ştiinţă deoarece utilizează logica şi analiza, calcule şi formule cantitative.</li>
					</ul>
					<p>Pentru a fi o profesie, o ocupaţie trebuie să îndeplinească cinci criterii:</p>
					<ul>
						<li>să acumuleze cunoştinţe – în management acest lucru s-a întâmplat intens în ultimii ani</li>
						<li>
							să aplice cu competenţă cunoştinţele teoretice – managementul, spre deosebire de medicină
							sau avocatură, care “asigură” aplicarea competentă a teoriei prin certificare, aplică un
							sistem deosebit şi anume controlul la locul de muncă;
						</li>
						<li>asumarea unei responsabilităţi sociale;</li>
						<li>existenţa şi respectarea unei etici şi a unui autocontrol</li>
						<li>recunoaşterea de către comunitate.</li>
					</ul>
					<p>
						Managementul este o profesie, deoarece prin definiţie “o profesie este o vocaţie a cărei
						practică se bazează pe înţelegerea unei structuri teoretice a respectivei părţi a ştiinţei sau
						tehnicii şi pe abilităţile care însoţesc această înţelegere”
					</p>
					<p>Funcţiile managementului sunt următoarele:</p>
					<ul>
						<li> planificarea – stabilirea obiectivelor şi determinarea etapelor de realizare;</li>
						<li>decizia (luarea deciziilor) – procesul de alegere între mai multe alternative;</li>
						<li>
							organizarea – realizarea structurii organizaţiei astfel încât aceasta să îşi atingă
							obiectivele;
						</li>
						<li>
							coordonarea – se referă la activităţi ca motivarea personalului, preocuparea pentru o
							comunicare eficace în organizaţie;
						</li>
						<li>
							controlul – procesul de stabilire a standardelor, de comparare a rezultatelor şi de luare a
							măsurilor corective.
						</li>
					</ul>
					<Image src="/ss/Screenshot_4.png" alt="Cerc" width={500} height={400} />
					<Image src="/ss/Screenshot_5.png" alt="Cerc" width={600} height={400} />
					<p>Rolurile managerilor sunt împărţite în următoarele categorii (după H. Mintzberg):</p>
					<ul>
						<li>
							Roluri interpersonale:
							<ul>
								<li>rol de reprezentant –reprezintă firma (“taie panglica”);</li>
								<li>rol de lider – conduce subordonaţii;</li>
								<li>rol de legătură – coordonează două sau mai multe unităţi.</li>
							</ul>
						</li>
						<li>
							Roluri informaţionale:
							<ul>
								<li> rol de monitor – caută informaţii importante pentru organizaţie;</li>
								<li>- rol de diseminator – distribuie informaţii în organizaţie;</li>
								<li>rol de purtător de cuvânt – vorbeşte în numele organizaţiei</li>
							</ul>
						</li>
						<li>
							Roluri decizionale:
							<ul>
								<li>rol de întreprinzător – vede oportunităţi pentru organizaţie;</li>
								<li>rol de negociator – negociază în interiorul şi exteriorul organizaţiei;</li>
								<li>factor de soluţionare a perturbaţiilor şi problemelor;</li>
								<li>factor de alocare a resurselor.</li>
							</ul>
						</li>
					</ul>
					<br />
					<br />
					<div style={{ backgroundColor: 'rgb(231, 231, 231)' }}>
						<Link href="../quiz/quizManagementul">
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
