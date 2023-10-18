import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { SearchProps } from "./NavBar";

const SearchInput = ({ onSearch }: SearchProps) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
        onKeyUp={(e: any) => e.key === "Enter" && onSearch(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
