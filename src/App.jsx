import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchArticles } from "./unSplashService";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (topic) => {
    setSearchTerm(`${topic}/${Date.now()}`);
    setPage(1);
    setArticles([]);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  }

  const handleLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (searchTerm === '') return;

    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const { results, total_pages } = await fetchArticles(searchTerm.split('/')[0], page);

        setArticles((prevData) => [...prevData, ...results]);
        setTotalPages(total_pages); 
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [page, searchTerm]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ErrorMessage error={error} />
      {articles.length > 0 && <ImageGallery articles={articles} open={openModal} />}
      <Loader loading={isLoading} />
      
      {articles.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn moreImg={handleLoadMoreClick} />
      )}
      <ImageModal isOpen={modalIsOpen} closeModal={closeModal} imageUrl={selectedImage} />
      <Toaster position="top-right" />
    </>
  );
}

