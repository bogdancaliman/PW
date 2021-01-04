import Layout from '../../components/layout';
import Image from 'next/image';
import isAuthenticated from '../../utils/auth';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../../components/grid.module.scss';

import { useState, useEffect } from 'react';

import axios from 'axios';

function Notita({ id, titlu, continut, setNotite }) {
	function handleDelete(e) {
		e.preventDefault();
		axios
			.delete(`http://localhost:1338/notites/${id}`)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
		setNotite((notite) => notite.filter((notite) => notite.id !== id));
	}
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Card.Body>
					<Card.Title>{titlu}</Card.Title>
					<Card.Text>{continut}</Card.Text>
					<Button variant="danger" onClick={handleDelete}>
						Delete
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default function Notite() {
	const [notite, setNotite] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:1338/notites')
			.then((res) => setNotite(res.data))
			.catch((err) => console.log('eroare'));
	}, []);

	let numeUtilizator = null;
	if (typeof localStorage !== 'undefined') {
		numeUtilizator = JSON.parse(localStorage.getItem('user')).username;
	}
	return (
		<Layout>
			<div style={{ marginLeft: '20px', marginRight: '20px' }}>
				<h2>Notite</h2>
				<Link href="./notite/notiteForm">
					<a>Adauga o notita &#x2192;</a>
				</Link>
				<br />
				<br />
				<div className={styles.wrapper}>
					{notite !== null
						? notite.map((notita) => (
								<Notita
									id={notita.id}
									titlu={notita.Titlu}
									continut={notita.Continut}
									setNotite={setNotite}
								/>
						  ))
						: null}
				</div>
				{/* <span>
					<div>
						<Image src="/notes_images/notes.jpg" alt="Notite" width={200} height={200} />
						<p style={{ align: 'center' }}>notita1</p>
					</div>
				</span>
				<span>
					<div>
						<Image src="/notes_images/notes.jpg" alt="Notite" width={200} height={200} />
						<p style={{ align: 'center' }}>notita2</p>
					</div>
				</span>
			</div> */}
			</div>
		</Layout>
	);
}
