import BigQuiz from '../../components/bigQuiz';
import Layout from '../../components/layout';

const quiz = {
	quizTitle: 'Test din Definirea Organizatiilor',
	quizSynopsis:
		'In acest Test vor fi 5 intrebari. Fiecare intrebare valoreaza 20 points, astfel ca scorul maxim va fi de 100 points. Testul nu are durata de timp si e cu scopul testarii cunostintelor, asa ca incearca sa fi sincer cu tine))',
	questions: [
		{
			question:
				'Organizaţiile sunt grupuri de persoane care lucrează împreună într-un mod coordonat şi structurat pentru a atinge unul sau mai multe scopuri?',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/Cerc.png', // if you need to display Picture in Question
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Organizaţiile sunt grupuri de persoane care lucrează împreună într-un mod coordonat şi structurat pentru a atinge unul sau mai multe scopuri.',
			point: '20',
		},
		{
			question: 'Care din mai jos fac parte din organizatii guvernamentale?',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/circle.jpg',
			answerSelectionType: 'single',
			answers: ['Guvern', 'Scoli', 'Universităţi ', 'Spitale'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'organizaţii guvernamentale (guvern, parlament etc.)',
			point: '20',
		},
		{
			question: 'Organizaţiile tinere au ca principală caracteristică _______.',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['distractia', 'entuziasmul', 'noutatea'],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Organizaţiile tinere au ca principală caracteristică entuziasmul',
			point: '20',
		},
		{
			question: 'Care din urmatoarele nu face parte din organizaţiile educaţionale?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Scoli', 'Universităţi ', 'Guvern'],
			correctAnswer: '3',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'organizaţii educaţionale (şcoli, universităţi etc.).',
			point: '20',
		},
		{
			question: 'Prin ce se caracterizeaza organizaţiile “bătrâne”?',
			questionType: 'text',
			answerSelectionType: 'multiple',
			answers: ['bârfe', 'ură', 'conflicte care se rezolvă', 'dispreţ'],
			correctAnswer: [1, 2, 4],
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Organizaţiile “bătrâne” se caracterizează prin relaţii interumane deteriorate, manifestate prin: bârfe, ură, dispreţ, amintiri ale unor momente neplăcute, care adesea sunt readuse în discuţie, conflicte care nu se rezolvă, ci se adâncesc etc. ',
			point: '20',
		},
	],
};

export default function QuizDefinireaOrganizatiilor() {
	return (
		<Layout>
			<div>
				<BigQuiz quiz={quiz} />
			</div>
		</Layout>
	);
}
