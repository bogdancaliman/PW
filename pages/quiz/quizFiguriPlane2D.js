import BigQuiz from '../../components/bigQuiz';
import Layout from '../../components/layout';

const quiz = {
	quizTitle: 'Test din Figuri Plane 2D',
	quizSynopsis:
		'In acest Test vor fi 5 intrebari. Fiecare intrebare valoreaza 20 points, astfel ca scorul maxim va fi de 100 points. Testul nu are durata de timp si e cu scopul testarii cunostintelor, asa ca incearca sa fi sincer cu tine))',
	questions: [
		{
			question: 'Patratul este o forma 2D?',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/Cerc.png', // if you need to display Picture in Question
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Patratul este o forma geometrica cu 2 dimensiuni (lungime si latime).',
			point: '20',
		},
		{
			question: 'Ce forma Geomertrica este is imaginea de mai jos?',
			questionType: 'text',
			questionPic: '/courses_images/Figuri2D/circle.jpg',
			answerSelectionType: 'single',
			answers: ['Patrat', 'Cerc', 'Triunghi', 'Dreptunghi'],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Figura din imagine este un Cerc',
			point: '20',
		},
		{
			question: 'Formele geometrice 2D nu au _______.',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Grosime', 'Latime', 'Lungime'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Figurile geometrice 2D nu au grosime.',
			point: '20',
		},
		{
			question: 'Care din urmatoarele nu este o figura geometrica 2D?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Cerc', 'Cub', 'Patrat'],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Cubul este o forma geometrica cu 3 dimensiuni (lungime, latime si inaltime).',
			point: '20',
		},
		{
			question: 'Care din imaginile urmatoare este o forma geometrica cu 4 laturi?',
			questionType: 'photo',
			answerSelectionType: 'multiple',
			answers: [
				'/courses_images/Figuri2D/Patrat.png',
				'/courses_images/Figuri2D/Cerc.png',
				'/courses_images/Figuri2D/Romb.png',
				'/courses_images/Figuri2D/Dreptunghi.png',
			],
			correctAnswer: [1, 3, 4],
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'In aceste imagini, numai Cercul nu are 4 laturi.',
			point: '20',
		},
	],
};

export default function QuizFiguriPlane2D() {
	return (
		<Layout>
			<div>
				<BigQuiz quiz={quiz} />
			</div>
		</Layout>
	);
}
