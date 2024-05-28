import { useState } from "react";
import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Divider, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "Post Title 1", content: "This is a summary of the blog post. Click to read more...", category: "Category 1" },
    { title: "Post Title 2", content: "This is a summary of the blog post. Click to read more...", category: "Category 2" },
  ]);
  const [newPost, setNewPost] = useState({ title: "", content: "", category: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: "", content: "", category: "" });
  };

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");
  const navBg = useColorModeValue("brand.700", "gray.900");
  const navColor = useColorModeValue("white", "gray.100");
  const linkHoverColor = useColorModeValue("brand.900", "gray.300");

  return (
    <Box bg={bg} color={color}>
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg={navBg} color={navColor} py={4} px={8}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">My Blog</Heading>
          <HStack spacing={4}>
            <Link href="#home" _hover={{ textDecoration: "none", color: linkHoverColor }}>Home</Link>
            <Link href="#posts" _hover={{ textDecoration: "none", color: linkHoverColor }}>Posts</Link>
            <Link href="#contact" _hover={{ textDecoration: "none", color: linkHoverColor }}>Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" mt={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          {/* Blog Posts Section */}
          <Box flex="3" mr={{ md: 8 }}>
            <Box as="form" onSubmit={handleSubmit} mb={8}>
              <Heading as="h2" size="xl" mb={4}>Add New Post</Heading>
              <VStack spacing={4} align="stretch">
                <Input
                  placeholder="Title"
                  name="title"
                  value={newPost.title}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  placeholder="Content"
                  name="content"
                  value={newPost.content}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  placeholder="Category"
                  name="category"
                  value={newPost.category}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" colorScheme="blue">Add Post</Button>
              </VStack>
            </Box>

            <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
            <VStack spacing={8} align="stretch">
              {posts.map((post, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px">
                  <Heading fontSize="xl">{post.title}</Heading>
                  <Text mt={4}>{post.content}</Text>
                  <Text mt={2} fontSize="sm" color="gray.500">Category: {post.category}</Text>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" mt={{ base: 8, md: 0 }}>
            <Heading as="h3" size="lg" mb={4}>Categories</Heading>
            <VStack spacing={4} align="stretch">
              <Link href="#category1" _hover={{ textDecoration: "none", color: linkHoverColor }}>Category 1</Link>
              <Link href="#category2" _hover={{ textDecoration: "none", color: linkHoverColor }}>Category 2</Link>
              <Link href="#category3" _hover={{ textDecoration: "none", color: linkHoverColor }}>Category 3</Link>
              {/* Add more categories here */}
            </VStack>

            <Divider my={8} />

            <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
            <VStack spacing={4} align="stretch">
              <Link href="#post1" _hover={{ textDecoration: "none", color: linkHoverColor }}>Recent Post 1</Link>
              <Link href="#post2" _hover={{ textDecoration: "none", color: linkHoverColor }}>Recent Post 2</Link>
              <Link href="#post3" _hover={{ textDecoration: "none", color: linkHoverColor }}>Recent Post 3</Link>
              {/* Add more recent posts here */}
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg={navBg} color={navColor} py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;