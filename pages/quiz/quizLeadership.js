import BigQuiz from '../../components/bigQuiz';
import Layout from '../../components/layout';

const quiz = {
	quizTitle: 'Test din Leadership',
	quizSynopsis:
		'In acest Test vor fi 5 intrebari. Fiecare intrebare valoreaza 20 points, astfel ca scorul maxim va fi de 100 points. Testul nu are durata de timp si e cu scopul testarii cunostintelor, asa ca incearca sa fi sincer cu tine))',
	questions: [
		{
			question:
				'Leadership-ul este capacitatea de a influenţa comportamentul oamenilor cu scopul de a îndeplini obiectivele propuse.',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/Cerc.png', // if you need to display Picture in Question
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Leadership-ul este capacitatea de a influenţa comportamentul oamenilor cu scopul de a îndeplini obiectivele propuse.',
			point: '20',
		},
		{
			question: 'Care din cele de mai jos fac parte din Teoriile privind leadership-ul?',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/circle.jpg',
			answerSelectionType: 'multiple',
			answers: [
				'Teoria Caracteristicilor',
				'Teoria Comportamentala',
				'Teoria Gandirilor',
				'Teoria Situatiilor',
				'Teoria Transformationala',
			],
			correctAnswer: [1, 2, 4, 5],
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Teoriile privind leadership-ul: Caracteristicilor, Comportamentala, Situatiilor si Transformationala.',
			point: '20',
		},
		{
			question:
				'Teoria Caracteristicilor are focalizarea pe comporamentul liderilor fata de cei care ii urmeaza.',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Teoria Caracteristicilor are focalizarea pe caracteristicile personale ale liderilor.',
			point: '20',
		},
		{
			question:
				'Comportament rational scazut si Comportament fata de sarcinile de munca ridicat reprezinta cadranul ________.',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: [
				'Deleaga (Deleaga responsabilitatile pentru decizii si implementare)',
				'Spune (Asigura instruire specifica si dupervizeaza performanta)',
				'Participa (Impartaseste ideile si faciliteaza luarea deciziilor)',
				'Vinde (Explica deciziile si ofera posibilitatea clasificarii)',
			],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Comportament rational ridicat si Comportament fata de sarcinile de munca scazut reprezinta cadranul Spune (Asigura instruire specifica si dupervizeaza performanta).',
			point: '20',
		},
		{
			question:
				'Există doi factori de situaţie care sunt determinanţi pentru stilul de leadership practicat, şi anume: caracteristicile personale ale subordonaţilor şi mediul de muncă.',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Există doi factori de situaţie care sunt determinanţi pentru stilul de leadership practicat, şi anume: caracteristicile personale ale subordonaţilor şi mediul de muncă.',
			point: '20',
		},
	],
};

export default function QuizLeadership() {
	return (
		<Layout>
			<div>
				<BigQuiz quiz={quiz} />
			</div>
		</Layout>
	);
}
