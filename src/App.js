import { Box, Container, List, ListItem } from "@chakra-ui/react";
import { SearchProvider, useSearch } from "./contexts/searchContext";
import { InputFormSearch } from "./components/input";
import data from "./data.json";

const ListDataSearch = () => {
  const { search } = useSearch();

  const listItems = data
    .filter((item) => item.title.includes(search))
    .map((item) => (
      <ListItem borderWidth={1} p={2} mb={2} key={item.id}>
        {item.title}
      </ListItem>
    ));

  return <List>{listItems}</List>;
};

function App() {
  return (
    <SearchProvider>
      <Container>
        <Box w={300} borderWidth={1} p={2} borderRadius={10}>
          <InputFormSearch />
        </Box>

        <Box mt={5} w={300}>
          <ListDataSearch />
        </Box>

        <Box mt={5}></Box>
      </Container>
    </SearchProvider>
  );
}

export default App;
