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
			<Cursuri deschis="Luarea deciziei şi leadership-ul">
				<div style={{ marginLeft: '40px', backgroundColor: 'rgb(231, 231, 231)' }}>
					<h2> Definirea şi clasificarea deciziilor</h2>
					<br />
					<h3>Decizia este o alegere făcută dintr-un set de alternative</h3>
					<br />
					<h3>
						Luarea deciziilor este procesul de identificare, evaluare şi alegere între mai multe
						alternative.
					</h3>
					<br />
					<h4>Clasificarea deciziilor</h4>
					<p>1. După frecvenţa apariţiei:</p>
					<ul>
						<li>decizii programate – apar frecvent, există reguli standard de luare a acestor decizii;</li>
						<li>decizii neprogramate – se iau rar, nu există reguli care trebuie sau pot fi urmate.</li>
					</ul>
					<p>2. După gradul de risc:</p>
					<ul>
						<li>
							decizii sigure – o decizie este sigură atunci când, în momentul în care este luată, se ştie
							că are doar un singur rezultat (efect);
						</li>
						<li>
							decizii riscante – în momentul în care se iau, sunt cunoscute mai multe viitoare efecte
							probabile;
						</li>
						<li>
							decizii nesigure – în momentul în care se iau nu se cunosc toate efectele posibile ale
							deciziei.
						</li>
					</ul>
					<h4>Clasificarea deciziilor (continuare)</h4>
					<p>3. După numărul de persoane implicate în luarea deciziei</p>
					<ul>
						<li>decizii individuale</li>
						<li>decizii de grup.</li>
					</ul>
					<p>4. După orizontul de timp pentru care se adoptă deciziile şi implicaţiile aplicării lor:</p>
					<ul>
						<li>
							decizii strategice – care vizează orizonturi mari de timp (mai mari de un an, 3-5 ani de
							regulă);
						</li>
						<li>decizii tactice – vizează o perioadă relativ mai scurtă (un an);</li>
						<li>
							decizii curente – se referă la perioade scurte, de regulă, de ordinul zilelor sau orelor, şi
							privesc cel mai adesea sarcini, atribuţii sau unele activităţi din firmă.
						</li>
					</ul>
					<Image src="/ss/Screenshot_6.png" alt="Cerc" width={500} height={400} />
					<p>Procesul decizional are următoarele etape:</p>
					<ol>
						<li>
							Recunoaşterea nevoii că trebuie luată o decizie: cei care sunt în măsură să ia o decizie,
							trebuie să înţeleagă că există o diferenţă între starea actuală a unei organizaţii sau a
							unei variabile de performanţă şi o stare dorită.
						</li>
						<li>
							Diagnosticarea problemei constă în identificarea cauzelor care au condus la situaţia
							nedorită precum şi în colectarea datelor şi informaţiilor necesare pentru a determina toate
							relaţiile cauză-efect.
						</li>
						<li>
							Dezvoltarea alternativelor: în momentul în care organizaţia a identificat cauzele problemei,
							poate începe să dezvolte soluţii alternative pentru înlăturarea sau corectarea acesteia.
						</li>
						<li>
							Selectarea alternativelor / alternativei optime. Soluţia optimă este aceea care rezolvă o
							problemă cel mai complet la costul cel mai scăzut.
						</li>
						<li>Implementarea soluţiei optime – punerea în practică a soluţiei optime</li>
						<li>
							Controlul şi urmărirea aplicării deciziei se referă la faptul că decidentul (cel care a luat
							decizia) trebuie să se asigure că:
							<ul>
								<li>decizia aleasă a fost implementată</li>
								<li>decizia luată a avut efectul dorit</li>
								<li>implementarea deciziei nu a avut consecinţe nedorite</li>
								<li>dacă se simte nevoia unor acţiuni adiţionale, acestea sunt executate</li>
							</ul>
						</li>
					</ol>
					<h3>Aspecte comportamentale ale luării deciziilor</h3>
					<p>
						În situaţiile de viaţă, concrete, capacitatea de procesare a informaţiilor de către decident
						este limitată, ceea ce poate duce evident la luarea unor decizii eronate. Acesta este domeniul
						în care ştiinţa managementului îşi are cel mai bine locul. Există diferite tipuri de modele
						matematice de luare a deciziei care pot fi aplicate în diferite situaţii.
					</p>
					<p>Uneori căutarea soluţiei optime se opreşte la găsirea uneia satisfăcătoare</p>
					<p>
						Escaladarea implicării (factor psihologic) reprezintă un proces psihologic în care decidenţii
						devin din ce în ce mai devotaţi deciziei luate, chiar dacă aceasta nu se dovedeşte a fi eficace.
					</p>
					<p>
						Deciziile sunt uneori influenţate de "elemente politice" prezente în organizaţie. Politica
						organizaţiei constă într-un set de activităţi de grup sau individuale realizate cu scopul de a
						obţine, dezvolta şi utiliza puterea pentru a influenţa rezultatuldeciziilor.
					</p>
					<p>
						Intuiţia managerială influenţează, la rândul ei, abilitatea decidenţilor de a lua decizii bune
						cu ajutorul unor informaţii incomplete, neconcludente şi / sau contradictorii.
					</p>
					<Image src="/ss/Screenshot_7.png" alt="Cerc" width={1000} height={700} />
					<h3>Decizii de grup</h3>
					<p>În acest caz procesul de luare a deciziilor este realizat de către mai multe persoane</p>
					<h3>Avantaje ale deciziilor de grup:</h3>
					<ul>
						<li>
							cu cât sunt mai multe persoane implicate în luarea deciziilor, cu atât grupul acumulează mai
							multă experienţă şi informaţie disponibilă pentru luarea deciziei
						</li>
						<li>sunt elaborate mai multe alternative</li>
						<li>
							comunicarea între persoanele decidente, precum şi participarea cât mai multor membri ai unui
							grup sau organizaţii la luarea deciziei, face ca acceptarea şi implementarea deciziei să se
							facă mai uşor
						</li>
					</ul>
					<h3>Câteva dintre dezavantajele acestui proces sunt:</h3>
					<ul>
						<li>timp mai lung de luare a deciziei</li>
						<li>poate duce la compromisuri atunci când este nevoie de o acţiune puternică</li>
						<li>poate conduce la o gândire în grup.</li>
					</ul>
					<br />
					<br />
					<div style={{ backgroundColor: 'rgb(231, 231, 231)' }}>
						<Link href="../quiz/quizDefinireaSiClasificarea">
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
