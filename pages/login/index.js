import Layout from '../../components/layout';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

import { useState } from 'react';

import axios from 'axios';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [displayAlert, setDisplayAlert] = useState(null);
	const [alertText, setAlertText] = useState('');

	function handleUsernameChange(e) {
		setUsername(e.target.value);
	}
	function handlePasswordChange(e) {
		setPassword(e.target.value);
	}

	function handleLogin(e) {
		e.preventDefault();
		// Request API.
		axios
			.post('http://localhost:1338/auth/local', {
				identifier: username,
				password: password,
			})
			.then((response) => {
				// Handle success.
				console.log('Well done!');
				console.log('User profile', response.data.user);
				console.log('User token', response.data.jwt);

				setDisplayAlert('success');
				setAlertText('Te-ai logat cu succes!');

				localStorage.setItem('auth', response.data.jwt);
				localStorage.setItem('user', JSON.stringify(response.data.user));

				setTimeout(() => {
					setDisplayAlert(null);
				}, 3000);
			})
			.catch((error) => {
				// Handle error.
				console.log('An error occurred:', error.response);

				setDisplayAlert('danger');
				setAlertText('A aparut o eroare');

				setTimeout(() => {
					setDisplayAlert(null);
				}, 3000);
			});
	}

	return (
		<Layout title="Login">
			<div
				style={{
					width: '50%',
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '5%',
					marginBottom: '5%',
				}}
			>
				<Form style={{ marginBottom: '5%' }}>
					<Form.Group controlId="formBasicUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Username"
							onChange={handleUsernameChange}
							value={username}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Parola</Form.Label>
						<Form.Control
							type="password"
							placeholder="Parola"
							onChange={handlePasswordChange}
							value={password}
						/>
					</Form.Group>
					<Button variant="primary" type="submit" onClick={handleLogin}>
						Login
					</Button>
				</Form>
				{displayAlert ? <Alert variant={displayAlert}>{alertText}</Alert> : null}

				<p style={{ display: 'inline', marginRight: 10 }}>Daca nu ai cont apasa aici</p>
				<Link href="/signin">
					<a>Inregistreaza-te</a>
				</Link>
			</div>
		</Layout>
	);
}
