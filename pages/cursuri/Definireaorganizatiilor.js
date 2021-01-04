import Layout from '../../components/layout';
import Cursuri from '../../components/cursuri';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

export default function DefinireaOrganizatiilor() {
	let numeUtilizator = null;

	if (typeof localStorage !== 'undefined') {
		numeUtilizator = JSON.parse(localStorage.getItem('user')).username;
	}
	return (
		<Layout>
			<Cursuri deschis="Introducerea in management">
				<div style={{ marginLeft: '40px', backgroundColor: 'rgb(231, 231, 231)' }}>
					<h2> Definirea organizaţiilor</h2>
					<p>
						Organizaţiile sunt grupuri de persoane care lucrează împreună într-un mod coordonat şi
						structurat pentru a atinge unul sau mai multe scopuri.
					</p>
					<p>Organizaţiile sunt de mai multe categorii:</p>

					<ul>
						<li>
							organizaţii care funcţionează cu scopul de a obţine profit (firme producătoare şi furnizoare
							de bunuri sau servicii)
						</li>
						<li>organizaţii guvernamentale (guvern, parlament etc.)</li>
						<li>organizaţii educaţionale (şcoli, universităţi etc.)</li>
						<li>organizaţii medicale (spitale, policlinici etc.)</li>
						<li>
							organizaţii care promovează interese de grup (asociaţii profesionale, asociaţii ale
							handicapaţilor etc.)
						</li>
						<li>organizaţii religioase (biserici, asociaţii religioase etc.)</li>
						<li>alte tipuri de organizaţii (frăţii, cluburi etc.)</li>
					</ul>
					<p>
						Termenul de firmă se referă la aspectele economice şi tehnice, ce influenţează anvergura ofertei
						de bunuri şi/sau servicii, penetrarea pe pieţe geografice şi de produs, atingerea de noi
						competenţe, atragerea de noi resurse tehnologice etc.
					</p>
					<h3>Prin ce se caracterizează o organizaţie “îmbătrânită” şi una “tânără”?</h3>
					<ul>
						<li>
							Organizaţiile tinere au ca principală caracteristică entuziasmul. Membrii ei, de obicei
							puţini la număr, sunt dispuşi să lucreze, să colaboreze şi să sacrifice mult timp, energie
							şi chiar resurse personale. De obicei, relaţiile interumane sunt foarte bune, iar
							conflictele constructive.
						</li>
						<li>
							Organizaţiile “bătrâne” se caracterizează prin relaţii interumane deteriorate, manifestate
							prin: bârfe, ură, dispreţ, amintiri ale unor momente neplăcute, care adesea sunt readuse în
							discuţie, conflicte care nu se rezolvă, ci se adâncesc etc. Uneori aceste organizaţii nu se
							dizolvă, ci continuă să funcţioneze în virtutea inerţiei, în special dacă sunt finanţate şi
							nu depind de veniturile pe care le obţin (organizaţii educaţionale, guvernamentale etc.),
							dar membrii ei iniţiali o părăsesc pe rând, alăturându-se unor organizaţii care au
							caracteristicile pe care le-a avut şi prima în anii ei “de tinereţe”. Există două soluţii
							care pot salva o organizaţie îmbătrânită, şi anume: schimbarea managerului sau /şi
							înlocuirea unor membri ai acesteia. Ambele soluţii conduc în final la schimbarea culturii
							organizaţionale, ca element esenţial al activităţii organizaţiilor.
						</li>
					</ul>
					<br />
					<br />
					<div style={{ backgroundColor: 'rgb(231, 231, 231)' }}>
						<Link href="../quiz/quizDefinireaOrganizatiilor">
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
