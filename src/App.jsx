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

	const [formInput, setFormInput] = useState({ title: "", author: "" });

	function toggleReadStatus(id) {
		setBooks(books.map((b) => (b.id === id ? { ...b, read: !b.read } : b)));
	}

	function addBook(e) {
		e.preventDefault();
		const trimmedTitle = formInput.title.trim();
		const trimmedAuthor = formInput.author.trim();
		if (!trimmedTitle || !trimmedAuthor) return;
		setBooks([
			...books,
			{
				id: Date.now(),
				title: trimmedTitle,
				author: trimmedAuthor,
				read: false,
			},
		]);
		setFormInput({ title: "", author: "" });
	}

	function removeBook(id) {
		setBooks(books.filter((b) => b.id !== id));
	}

	return (
		<main>
			<h1>My Book List</h1>
			<form onSubmit={addBook}>
				<input
					type="text"
					value={formInput.title}
					onChange={(e) =>
						setFormInput({ ...formInput, title: e.target.value })
					}
					placeholder="New Book"
				></input>
				<input
					type="text"
					placeholder="Author Name"
					value={formInput.author}
					onChange={(e) =>
						setFormInput({ ...formInput, author: e.target.value })
					}
				/>
				<button type="submit">Add Book</button>
			</form>
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
						<button type="button" onClick={() => removeBook(book.id)}>
							Remove Book
						</button>
					</li>
				))}
			</ul>
		</main>
	);
}

export default App;
