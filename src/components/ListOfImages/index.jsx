import { useEffect, useState } from "react";
import "./styles.css";

export function ListOfImages() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER"
        );
        const data = await response.json();
        const formattedBooks = data.items.map((item) => ({
          id: item.id,
          image: item.volumeInfo.imageLinks?.thumbnail || null, // define null if no image exists
          image_alt: item.volumeInfo.title,
          title: item.volumeInfo.title,
          autor: item.volumeInfo.authors?.[0] || "Autor desconhecido",
        }));
        setBooks(formattedBooks);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar os livros:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="containerListOfBooks">
      {books.map((item) => (
        <div className="cardBook" key={item.id}>
          {item.image ? (
            <img src={item.image} alt={item.image_alt} />
          ) : (
            <div className="imgDefault">
              <img src="/images/svg/icon-image-default.svg"/>
              </div>
          )}

          <div className="descriptionBooks">
            <p>{item.title}</p>
            <span>{item.autor}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
