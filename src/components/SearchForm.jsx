import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const searchValue = useRef("");

	useEffect(() => {
		searchValue.current.focus();
	}, []);

	const searchCocktail = () => {
		setSearchTerm(searchValue.current.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className="section search">
			<form className="search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">What is your favorite cocktail?</label>
					<input
						type="text"
						id="name"
						ref={searchValue}
						onChange={searchCocktail}
						placeholder="Search..."
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
