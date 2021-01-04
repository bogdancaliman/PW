import BigQuiz from '../../components/bigQuiz';
import Layout from '../../components/layout';

const quiz = {
	quizTitle: 'Test din Management',
	quizSynopsis:
		'In acest Test vor fi 5 intrebari. Fiecare intrebare valoreaza 20 points, astfel ca scorul maxim va fi de 100 points. Testul nu are durata de timp si e cu scopul testarii cunostintelor, asa ca incearca sa fi sincer cu tine))',
	questions: [
		{
			question:
				'Managementul este artă deoarece necesită utilizarea unor deprinderi de comportament şi judecată care nu pot fi cuantificate.',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/Cerc.png', // if you need to display Picture in Question
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Managementul este artă deoarece necesită utilizarea unor deprinderi de comportament şi judecată care nu pot fi cuantificate.',
			point: '20',
		},
		{
			question: 'Care din urmatoarele fac parte din Rolurile interpersonale?',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/circle.jpg',
			answerSelectionType: 'multiple',
			answers: ['rol de reprezentant', 'rol de lider', 'rol de legătură', 'rol de monitor'],
			correctAnswer: [1, 2, 3],
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Rolurile interpersonale: rol de reprezentant, rol de lider si rol de legătură',
			point: '20',
		},
		{
			question: 'Care din urmatoarele nu face parte din Funcţiile managementului?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['planificarea ', 'decizia ', 'administrarea', 'organizarea '],
			correctAnswer: '4',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Funcţiile managementului sunt următoarele: planificarea, decizia, organizarea, coordonarea si controlul.',
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
			question: 'Care din urmatoarele nu face parte din Functiile unei firme?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: [
				'Cercetare - Dezvoltare',
				'Productie',
				'Organizare',
				'Comercial',
				'Personale',
				'Financiar - Contabil',
			],
			correctAnswer: '3',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Functiile unei firme: Cercetare - Dezvoltare, Productie, Comercial, Personale si Financiar - Contabil.',
			point: '20',
		},
	],
};

export default function QuizManagementul() {
	return (
		<Layout>
			<div>
				<BigQuiz quiz={quiz} />
			</div>
		</Layout>
	);
}
