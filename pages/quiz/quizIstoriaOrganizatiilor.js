import BigQuiz from '../../components/bigQuiz';
import Layout from '../../components/layout';

const quiz = {
	quizTitle: 'Test din Istoria Orgnizatiilor',
	quizSynopsis:
		'In acest Test vor fi 5 intrebari. Fiecare intrebare valoreaza 20 points, astfel ca scorul maxim va fi de 100 points. Testul nu are durata de timp si e cu scopul testarii cunostintelor, asa ca incearca sa fi sincer cu tine))',
	questions: [
		{
			question: 'În Antichitate, primele organizaţii nefamiliale au fost ale sumerienilor şi s-au extins în:',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/Cerc.png', // if you need to display Picture in Question
			answerSelectionType: 'multiple',
			answers: ['Estonia', 'Egipt', 'Babylonia', 'Assiria'],
			correctAnswer: [2, 3, 4],
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'În Antichitate, primele organizaţii nefamiliale au fost ale sumerienilor şi s-au extins în Egipt, Babylonia şi Assiria.',
			point: '20',
		},
		{
			question:
				'În preistorie, unităţi familiale (familii) au început să practice la scară redusă activităţi de producţie şi comerţ?',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/circle.jpg',
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'În preistorie, unităţi familiale (familii) au început să practice la scară redusă activităţi de producţie şi comerţ',
			point: '20',
		},
		{
			question: 'Care din urmatorele imperii a avut cel mai mare impact asupra dezvoltarii organizatiilor?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Imperiul Roman', 'Imperiul Britanic', 'Imperiul Rus'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'Mai târziu, Imperiul Roman şi cel Grec au dezvoltat diverse tipuri de organizaţii ca: bănci, societăţi de asigurări, armată, tribunale în care se judecau încălcările contractelor etc. Multe dintre formele organizaţiilor inventate de romani şi greci sunt folosite şi în zilele noastre.',
			point: '20',
		},
		{
			question:
				'În Evul Mediu, organizaţiile regionale mari, cum ar fi breslele, au înlocuit, cu excepţia Bisericii Catolice, organizaţiile sofisticate din Antichitate?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals '],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'În Evul Mediu, organizaţiile regionale mici, cum ar fi breslele, au înlocuit, cu excepţia Bisericii Catolice, organizaţiile sofisticate din Antichitate',
			point: '20',
		},
		{
			question: 'Unde a fost inceputa perioada Renesterii?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Aurstria', 'Grecia', 'Italia'],
			correctAnswer: '3',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation:
				'În perioada Renaşterii (începută în Italia în jurul anului 1500), breslele au continuat să reprezinte o forţă organizatoare, dar în acelaşi timp s-au dezvoltat organizaţii de comerţ internaţional, cu sediile în Veneţia şi Amsterdam, care au început să domine comerţul mondial. In timpul Renaşterii, organizaţiile au preluat multe caracteristici ale organizaţiilor din Imperiul Roman şi Imperiul Grec. Băncile, societăţile de asigurări şi tribunalele erau copiate după modelele romane. ',
			point: '20',
		},
	],
};

export default function QuizIstoriaOrganizatiilor() {
	return (
		<Layout>
			<div>
				<BigQuiz quiz={quiz} />
			</div>
		</Layout>
	);
}
