import Layout from '../../components/layout';
import Cursuri from '../../components/cursuri';
import Image from 'next/image';
import { DiscussionEmbed } from 'disqus-react';
import Link from 'next/link';

export default function IstoriaOrganizatiilor() {
	let numeUtilizator = null;

	if (typeof localStorage !== 'undefined') {
		numeUtilizator = JSON.parse(localStorage.getItem('user')).username;
	}
	return (
		<Layout>
			<Cursuri deschis="Introducerea in management">
				<div style={{ marginLeft: '40px', backgroundColor: 'rgb(231, 231, 231)' }}>
					<h2> Istoria organizaţiilor</h2>
					<Image src="/ss/Screenshot_1.png" alt="Cerc" width={1000} height={250} />
					<p>
						În preistorie, unităţi familiale (familii) au început să practice la scară redusă activităţi de
						producţie şi comerţ
					</p>
					<p>
						În Antichitate, primele organizaţii nefamiliale au fost ale sumerienilor şi s-au extins în
						Egipt, Babylonia şi Assiria. Sumerienii au avut multe tipuri de organizaţii în viaţa politică,
						religioasă şi economică. La vârful organizaţiilor politice erau familii şi membri ai elitei,
						care stabileau legile referitoare la exploatarea pământului, aveau armate şi adunau impozite.
						Organizaţiile religioase defineau relaţiile cu puterea divină şi subliniau valorile morale ale
						societăţii. Organizaţiile producătoare de bunuri şi servicii constau în ferme, mici ateliere de
						producţie şi de construcţii. Organizaţiile comerciale “mişcau” produsele dintr-o zonă în alta.
						Nevoile acestor organizaţii au dus la descoperirea invenţiilor importante: sisteme de măsură,
						sistemul poştal, etc.
					</p>

					<p>
						Mai târziu, Imperiul Roman şi cel Grec au dezvoltat diverse tipuri de organizaţii ca: bănci,
						societăţi de asigurări, armată, tribunale în care se judecau încălcările contractelor etc. Multe
						dintre formele organizaţiilor inventate de romani şi greci sunt folosite şi în zilele noastre.
					</p>
					<p>
						În Evul Mediu, organizaţiile regionale mici, cum ar fi breslele (grupuri de meşteşugari uniţi
						pentru a reglementa domeniul lor de activitate, de a instrui viitoarele generaţii de meşteşugari
						şi de a restricţiona accesul altor meşteşugari în zona lor geografică), au înlocuit, cu excepţia
						Bisericii Catolice, organizaţiile sofisticate din Antichitate. Breslele au rămas totuşi mici şi
						localizate regional. Pe de altă parte, Biserica Catolică a rămas mare, foarte structurată şi
						foarte puternică. Multe dintre caracteristicile care au permis Bisericii Catolice să
						supravieţuiască şi să prospere până în zilele noastre au fost adoptate de către alte tipuri de
						organizaţii. Structura ierarhică a acesteia, cu posturi clar definite, cu diviziunea muncii şi
						relaţii de autoritate, este o caracteristică a aproape tuturor organizaţiilor moderne mari.
					</p>
					<p>
						În perioada Renaşterii (începută în Italia în jurul anului 1500), breslele au continuat să
						reprezinte o forţă organizatoare, dar în acelaşi timp s-au dezvoltat organizaţii de comerţ
						internaţional, cu sediile în Veneţia şi Amsterdam, care au început să domine comerţul mondial.
						In timpul Renaşterii, organizaţiile au preluat multe caracteristici ale organizaţiilor din
						Imperiul Roman şi Imperiul Grec. Băncile, societăţile de asigurări şi tribunalele erau copiate
						după modelele romane. In plus, au început să se dezvolte metode contabile, verificarea
						calculelor, scrisori de credit şi alte instrumente ale lumii de afaceri moderne.
					</p>
					<br />
					<br />
					<div style={{ backgroundColor: 'rgb(231, 231, 231)' }}>
						<Link href="../quiz/quizIstoriaOrganizatiilor">
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
