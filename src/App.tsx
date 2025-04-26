import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchArticles } from "./unSplashService";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import { Article } from "./App.types";
import { FetchArticlesResponse } from "./App.types";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1); 
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSubmit = (topic: string) : void => {
    setSearchTerm(`${topic}/${Date.now()}`);
    setPage(1);
    setArticles([]);
  };

  const openModal = (imageUrl: string) : void => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () : void => {
    setIsOpen(false);
    setSelectedImage(null);
  }

  const handleLoadMoreClick = () : void => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (searchTerm === '') return;

    async function getData(): Promise<void> {
      try {
        setError(false);
        setIsLoading(true);
        const { results, total_pages }: FetchArticlesResponse = await fetchArticles(searchTerm.split('/')[0], page);

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

