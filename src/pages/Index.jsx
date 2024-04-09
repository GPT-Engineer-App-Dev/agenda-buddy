import { useState } from "react";
import { Box, Button, Heading, HStack, IconButton, Input, StackDivider, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <HStack mb={8}>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" />
        <IconButton icon={<FaPlus />} onClick={addTodo} />
      </HStack>
      <VStack divider={<StackDivider />} borderWidth={1} borderRadius="lg" p={4} alignItems="stretch">
        {todos.map((todo, index) => (
          <HStack key={index} spacing={4}>
            <Text flex={1} textDecoration={todo.completed ? "line-through" : "none"}>
              {todo.text}
            </Text>
            <Button size="xs" onClick={() => toggleComplete(index)} variant="outline">
              {todo.completed ? "Undo" : "Complete"}
            </Button>
          </HStack>
        ))}
      </VStack>
      {todos.some((todo) => todo.completed) && (
        <Button leftIcon={<FaTrash />} colorScheme="red" variant="outline" size="sm" mt={4} onClick={clearCompleted}>
          Clear Completed
        </Button>
      )}
    </Box>
  );
};

export default Index;
