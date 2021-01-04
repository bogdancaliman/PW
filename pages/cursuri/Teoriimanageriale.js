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
					<h2> Teorii Manageriale</h2>
					<p>Au existat de-a lungul timpului trei categorii de teorii manageriale, şi anume:</p>
					<ul>
						<li>
							teorii clasice:
							<ul>
								<li>managementul ştiinţific – Frederick Taylor</li>
								<li>managementul birocratic – Max Weber</li>
								<li>managementul administrativ – Henry Fayol</li>
							</ul>
						</li>
						<li>
							teorii comportamentale:
							<ul>
								<li>mişcarea resurselor umane – Kurt Lewin ş.a.</li>
								<li>teoria X şi Y – Douglas McGregor</li>
								<li>teoriile motivaţionale – Abraham Maslow</li>
								<li>teorii integratoare – Vroom, Porter, Outchi</li>
							</ul>
						</li>
						<li>
							teorii cantitative:
							<ul>
								<li>cercetări operaţionale</li>
								<li>managementul producţiei</li>
								<li>sistemele informaţionale de management</li>
								<li>teorii de sistem (consideră întreprinderea ca fiind un sistem)</li>
							</ul>
						</li>
					</ul>
					<h3>Teoria managementului ştiinţific</h3>
					<ul>
						<li>
							dezvoltată de Taylor, un industriaş american, criticat la vremea lui pentru exploatarea
							muncitorilor, se focalizează pe locurile de muncă individuale şi încearcă să determine modul
							cel mai bun de a le eficientiza.
						</li>
						<li>
							Taylor a realizat descrierea posturilor, a înaintat ideea selecţiei personalului pe baza
							deprinderilor şi abilităţilor lor, a legat performanţele muncii de recompense şi împărţit
							responsabilităţile în responsabilităţi de conducere şi de lucru.
						</li>
					</ul>
					<h3>
						Teoria X şi Y (a lui McGregor) este reprezentată de două seturi de afirmaţii privind motivele şi
						credinţele care influenţează comportamentul managerilor faţă de subordonaţi.
					</h3>
					<Image src="/ss/Screenshot_2.png" alt="Cerc" width={900} height={500} />
					<p>
						Dintre teoriile integratoare, cea mai cunoscută este cea dezvoltată de William Ouchi, teoria Z.
						Această teorie defineşte organizaţia de tip Z ca fiind organizaţia viitorului. Organizaţia are
						caracteristici care au rezultat din combinarea caracteristicilor managementului japonez cu cele
						ale managementului american.
					</p>
					<Image src="/ss/Screenshot_3.png" alt="Cerc" width={1100} height={600} />
					<br />
					<br />
					<div style={{ backgroundColor: 'rgb(231, 231, 231)' }}>
						<Link href="../quiz/quizTeoriiManageriale">
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
