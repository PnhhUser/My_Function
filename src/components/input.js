import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { debounce } from "../utils";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearch } from "../contexts/searchContext";

export const InputFormSearch = () => {
  const { setSearch } = useSearch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const debouncedHandleChange = debounce(handleSearch, 500);

  return (
    <InputGroup>
      <Input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="search here"
        fontSize={14}
        onChange={debouncedHandleChange}
      />
      <InputRightElement>
        <AiOutlineSearch />
      </InputRightElement>
    </InputGroup>
  );
};
