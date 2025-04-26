import { useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
      if (!query.trim()) return toast.error('The field cannot be empty.');
     onSubmit(query.trim());
    setQuery(""); 
  };
    


    return (
        <header className={css.header}>
            <form className={css.form} onSubmit={handleFormSubmit}> 
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                    
                />
                <button className={css.button} type="submit">Search</button>
            </form>
        </header>
    );
}
