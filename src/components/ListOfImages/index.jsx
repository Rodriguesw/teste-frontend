import { useEffect, useState } from "react";

import { fetchBooks } from "../../service/api/GetBooks.js"; 

import "./styles.css";

export function ListOfImages() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const booksData = await fetchBooks();
        setBooks(booksData);
        setLoading(false); 
      } catch (error) {
        console.error("Erro:", error);
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  return (
    <div className="containerListOfBooks">
      {loading ? (
        <div>
          <p>Carregando livros...</p>
        </div>
      ) : (
        books.map((item) => (
          <div className="cardBook" key={item.id}>
            {item.image ? (
              <img src={item.image} alt={item.image_alt} />
            ) : (
              <div className="imgDefault">
                <img src="/images/svg/icon-image-default.svg" alt="Ícone de retrato" />
              </div>
            )}

            <div className="descriptionBooks">
              <p>{item.title}</p>
              <span>{item.autor}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
