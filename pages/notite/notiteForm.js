import Layout from '../../components/layout';
import Image from 'next/image';
import isAuthenticated from '../../utils/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import axios from 'axios';

export default function NotiteForm() {
	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');

	const router = useRouter();

	function handleTitleChange(e) {
		setTitle(e.target.value);
	}
	function handleNoteChange(e) {
		setNote(e.target.value);
	}
	function handleRegister(e) {
		e.preventDefault();
		axios
			.post('http://localhost:1338/notites', {
				Titlu: title,
				Continut: note,
			})
			.then((response) => {
				// Handle success.
				router.push('/notite');
				console.log(response.data);
			})
			.catch((error) => {
				// Handle error.
				console.log(error);
			});
	}
	let numeUtilizator = null;
	if (typeof localStorage !== 'undefined') {
		numeUtilizator = JSON.parse(localStorage.getItem('user')).username;
	}

	return (
		<Layout>
			<div style={{ marginLeft: '20px', marginRight: '20px' }}>
				<Form style={{ marginBottom: '5%' }}>
					<Form.Label>Titlu</Form.Label>
					<Form.Control
						type="text"
						placeholder="Numele titlului"
						value={title}
						onChange={handleTitleChange}
					/>
					<br />
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Notite</Form.Label>
						<Form.Control
							as="textarea"
							rows={15}
							placeholder="Notitele"
							value={note}
							onChange={handleNoteChange}
						/>
					</Form.Group>
					<Button variant="primary" type="submit" onClick={handleRegister}>
						Salveaza
					</Button>
				</Form>
				<Link href="../notite">
					<a>&#x2190; Inapoi la Notite</a>
				</Link>
			</div>
		</Layout>
	);
}
