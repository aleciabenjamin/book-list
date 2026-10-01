import { useState } from "react";
import "./App.css";

function App() {
	const [books, setBooks] = useState([
		{
			id: 1,
			title: "The Great Gatsby",
			author: "F. Scott Fitzgerald",
			read: true,
		},
		{
			id: 2,
			title: "To Kill a Mockingbird",
			author: "Harper Lee",
			read: false,
		},
		{ id: 3, title: "1984", author: "George Orwell", read: true },
	]);

	function toggleReadStatus(id) {
		setBooks(books.map((b) => (b.id === id ? { ...b, read: !b.read } : b)));
	}

	return (
		<main>
			<h1>My Book List</h1>
			<p>Number of books: {books.length}</p>
			<ul>
				{books.map((book) => (
					<li key={book.id}>
						<h2>{book.title}</h2>
						<p>by {book.author}</p>
						<p>Status: {book.read ? "Read" : "Not Read"}</p>
						<button onClick={() => toggleReadStatus(book.id)}>
							Mark as {book.read ? "Not Read" : "Read"}
						</button>
					</li>
				))}
			</ul>
		</main>
	);
}

export default App;
