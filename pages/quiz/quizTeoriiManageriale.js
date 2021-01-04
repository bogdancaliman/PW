import BigQuiz from '../../components/bigQuiz';
import Layout from '../../components/layout';

const quiz = {
	quizTitle: 'Test din Teorii Manageriale',
	quizSynopsis:
		'In acest Test vor fi 5 intrebari. Fiecare intrebare valoreaza 20 points, astfel ca scorul maxim va fi de 100 points. Testul nu are durata de timp si e cu scopul testarii cunostintelor, asa ca incearca sa fi sincer cu tine))',
	questions: [
		{
			question: 'Care din urmatoarele fac parte din teoriile clasice?',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/Cerc.png', // if you need to display Picture in Question
			answerSelectionType: 'multiple',
			answers: [
				'managementul ştiinţific – Frederick Taylor',
				'managementul birocratic – Max Weber',
				'mişcarea resurselor umane – Kurt Lewin ş.a.',
				'managementul administrativ – Henry Fayol',
			],
			correctAnswer: [1, 2, 4],
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'mişcarea resurselor umane – Kurt Lewin ş.a. -> face parte din teorii comportamentale',
			point: '20',
		},
		{
			question: 'Teoria Z: Organizatia de tip A(american): Angajarea se face pe termen lung',
			questionType: 'text',
			//questionPic: '/courses_images/Figuri2D/circle.jpg',
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Teoria Z: Organizatia de tip A(american): Angajarea se face pe termen scurt',
			point: '20',
		},
		{
			question: 'Teoria X: oamenilor nu le place sa munceasca si evita munca',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: ['Adevarat', 'Fals'],
			correctAnswer: '1',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Teoria X: oamenilor nu le place sa munceasca si evita munca',
			point: '20',
		},
		{
			question: 'Teoria Y: _____',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: [
				'Oamenilor nu le place sa munceasca si evita munca',
				'Oamenilor nu le displace munca in mod natural, ea este parte a vietii.',
			],
			correctAnswer: '2',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'Teoria Y: Oamenilor nu le displace munca in mod natural, ea este parte a vietii.',
			point: '20',
		},
		{
			question: 'Care din urmatoarele face parte din teoriile cantitative?',
			questionType: 'text',
			answerSelectionType: 'single',
			answers: [
				'mişcarea resurselor umane – Kurt Lewin ş.a.',
				'managementul birocratic – Max Weber',
				'cercetări operaţionale',
			],
			correctAnswer: '3',
			messageForCorrectAnswer: 'Correct answer. Good job.',
			messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
			explanation: 'teorii cantitative: cercetări operaţionale',
			point: '20',
		},
	],
};

export default function QuizTeoriiManageriale() {
	return (
		<Layout>
			<div>
				<BigQuiz quiz={quiz} />
			</div>
		</Layout>
	);
}
