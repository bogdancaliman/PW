import BigQuiz from '../../components/bigQuiz';
import Layout from '../../components/layout';

const quiz = {
	quizTitle: 'Test din Elemente şi bariere ale comunicării',
	quizSynopsis:
		'In acest Test vor fi 5 intrebari. Fiecare intrebare valoreaza 20 points, astfel ca scorul maxim va fi de 100 points. Testul nu are durata de timp si e cu scopul testarii cunostintelor, asa ca incearca sa fi sincer cu tine))',
	questions: [
		{
			question: 'Avand in vedere Elementele comunicării, comunicatorul este persoana care emite semnalul.',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/Cerc.png', // if you need to display Picture in Question
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Elementele comunicării: comunicatorul este persoana care emite semnalul',
			point: '20',
		},
		{
			question: 'Barierele cele mai frecvente în calea comunicării sunt:',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/circle.jpg',
			answerSelectionType: 'multiple',
			answers: [
				'interpretări diferite datorate codificării sau decodificării greşite',
				'percepţia/ interpretarea mesajului – ceea ce înţelege comunicatorul prin mesajul transmis',
				'percepţia selectivă',
				'verificarea dacă s-a înţeles ceea ce comunicatorul a dorit să transmită;',
			],
			correctAnswer: [1, 3],
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Barierele cele mai frecvente în calea comunicării sunt: interpretări diferite datorate codificării sau decodificării greşite, percepţia selectivă, deprinderi scăzute de ascultare activă, judecăţile de valoare făcute de către receptor despre comunicator, credibilitatea sursei, filtrarea, presiunea timpului si cantitatea prea mare de informaţie.',
			point: '20',
		},
		{
			question:
				'Una din metodele de imbunătăţire a comunicării în organizaţii se face prin verificarea dacă s-a înţeles ceea ce comunicatorul a dorit să transmită.',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Una din metodele de imbunătăţire a comunicării în organizaţii se face prin verificarea dacă s-a înţeles ceea ce comunicatorul a dorit să transmită.',
			point: '20',
		},
		{
			question: 'Care dintre urmatoarele nu face parte din barierele cele mai frecvente în calea comunicării?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: [
				'utilizarea feedback-ului',
				'interpretări diferite datorate codificării sau decodificării greşite',
				'filtrarea – transmiterea doar a informaţiei pozitive',
			],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Utilizarea feedback-ului face parte din imbunătăţirea comunicării în organizaţii',
			point: '20',
		},
		{
			question: 'Avand in vedere Elementele comunicării, mesajul – răspunsul dat de către receptor.',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Avand in vedere Elementele comunicării, mesajul – verbal sau nonverbal, subiectul comunicării.',
			point: '20',
		},
	],
};

export default function QuizElementeSiBariere() {
	return (
		<Layout>
			<div>
				<BigQuiz quiz={quiz} />
			</div>
		</Layout>
	);
}
