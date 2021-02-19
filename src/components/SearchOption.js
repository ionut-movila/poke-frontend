import React, { useEffect, useState } from "react";

import { ButtonTypes } from "../enums/ButtonTypes";
import Input from "./Input";

const SearchOption = () => {
	const [searchItem, setSearchItem] = useState("");

	useEffect(() => {}, [searchItem]);

	return (
		<form>
			<Input
				type="text"
				name="searchValue"
				onChange={(event) => setSearchItem(event.target.value)}
			/>
		</form>
	);
};

export default SearchOption;
