import Layout from '../../components/layout';
import Cursuri from '../../components/cursuri';
import isAuthenticated from '../../utils/auth';

export default function PaginaCursuri() {
	let numeUtilizator = null;

	if (typeof localStorage !== 'undefined') {
		numeUtilizator = JSON.parse(localStorage.getItem('user')).username;
	}
	return (
		<Layout>
			{isAuthenticated() ? (
				<div style={{ marginLeft: '40px', backgroundColor: 'rgb(231, 231, 231)' }}>
					<Cursuri>
						<div
							style={{
								marginLeft: '40px',
								top: '30%',
								position: 'absolute',
								width: '50%',
								marginLeft: 'auto',
								backgroundColor: 'rgb(231, 231, 231)',
							}}
						>
							<h1>Alege un curs, {numeUtilizator}</h1>
						</div>
					</Cursuri>
				</div>
			) : (
				<div>
					<p>Logheaza-te ca sa vezi cursurile</p>
				</div>
			)}
		</Layout>
	);
}
