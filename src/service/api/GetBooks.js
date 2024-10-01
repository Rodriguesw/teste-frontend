export const fetchBooks = async () => {
  try {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER"
    );
    const data = await response.json();
    const formattedBooks = data.items.map((item) => ({
      id: item.id,
      title: item.volumeInfo.title,
      autor: item.volumeInfo.authors?.[0] || "",
      image_alt: item.volumeInfo.title,
      image: item.volumeInfo.imageLinks?.thumbnail || null,
    }));
    return formattedBooks;
  } catch (error) {
    console.error("Erro ao buscar os livros:", error);
    throw error;
  }
};
