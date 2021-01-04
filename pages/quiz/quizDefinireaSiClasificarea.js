import BigQuiz from '../../components/bigQuiz';
import Layout from '../../components/layout';

const quiz = {
	quizTitle: 'Test din Definirea si clasificarea deciziilor',
	quizSynopsis:
		'In acest Test vor fi 5 intrebari. Fiecare intrebare valoreaza 20 points, astfel ca scorul maxim va fi de 100 points. Testul nu are durata de timp si e cu scopul testarii cunostintelor, asa ca incearca sa fi sincer cu tine))',
	questions: [
		{
			question:
				'Clasificarea deciziilor se face după frecvenţa apariţiei, după gradul de risc, după numărul de persoane implicate în luarea deciziei si După orizontul de timp pentru care se adoptă deciziile şi implicaţiile aplicării lor.',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/Cerc.png', // if you need to display Picture in Question
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Clasificarea deciziilor se face după frecvenţa apariţiei, după gradul de risc, după numărul de persoane implicate în luarea deciziei si După orizontul de timp pentru care se adoptă deciziile şi implicaţiile aplicării lor.',
			point: '20',
		},
		{
			question: 'Calsificarea deciziilor după gradul de risc ',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/circle.jpg',
			answerSelectionType: 'multiple',
			answers: ['decizii sigure', 'decizii riscante', 'decizii nesigure', 'decizii programate'],
			correctAnswer: [1, 2, 3],
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'decizii programate face parte din Clasificare deciziilor dupa frecventa aparitiei.',
			point: '20',
		},
		{
			question: 'Care din urmatoarele nu face parte din avantaje ale deciziilor de grup?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: [
				'cu cât sunt mai multe persoane implicate în luarea deciziilor, cu atât grupul acumulează mai multă experienţă şi informaţie disponibilă pentru luarea deciziei ',
				'sunt elaborate mai multe alternative ',
				'poate duce la compromisuri atunci când este nevoie de o acţiune puternică',
				'comunicarea între persoanele decidente, precum şi participarea cât mai multor membri ai unui grup sau organizaţii la luarea deciziei, face ca acceptarea şi implementarea deciziei să se facă mai uşor ',
			],
			correctAnswer: '3',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Unul dintre dezavantajele acestui proces este ca poate duce la compromisuri atunci când este nevoie de o acţiune puternică.',
			point: '20',
		},
		{
			question: 'Rolurile managerilor sunt împărţite în următoarele categorii (după H. Mintzberg):',
			questionType: 'text',
			answerSelectionType: 'multiple',
			answers: ['Roluri personale', 'Roluri informaţionale', 'Roluri decizionale'],
			correctAnswer: [2, 3],
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Rolurile managerilor sunt împărţite în următoarele categorii (după H. Mintzberg):  interpersonale, informaţionale si decizionale.',
			point: '20',
		},
		{
			question:
				'Un tip de luare a deciziei este Modul Autoritar care inseamna ca managerii rezolva problema si iau decizia in grup.',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Modul Autoritar inseamna ca managerii rezolva problema si iau decizia singuri.',
			point: '20',
		},
	],
};

export default function QuizDefinireaSiClasificarea() {
	return (
		<Layout>
			<div>
				<BigQuiz quiz={quiz} />
			</div>
		</Layout>
	);
}
