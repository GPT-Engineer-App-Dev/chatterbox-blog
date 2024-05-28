import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.700" color="white" py={4} px={8}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">My Blog</Heading>
          <HStack spacing={4}>
            <Link href="#home" _hover={{ textDecoration: "none", color: "brand.900" }}>Home</Link>
            <Link href="#posts" _hover={{ textDecoration: "none", color: "brand.900" }}>Posts</Link>
            <Link href="#contact" _hover={{ textDecoration: "none", color: "brand.900" }}>Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" mt={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          {/* Blog Posts Section */}
          <Box flex="3" mr={{ md: 8 }}>
            <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
            <VStack spacing={8} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Post Title 1</Heading>
                <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Post Title 2</Heading>
                <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
              </Box>
              {/* Add more blog post summaries here */}
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" mt={{ base: 8, md: 0 }}>
            <Heading as="h3" size="lg" mb={4}>Categories</Heading>
            <VStack spacing={4} align="stretch">
              <Link href="#category1" _hover={{ textDecoration: "none", color: "brand.700" }}>Category 1</Link>
              <Link href="#category2" _hover={{ textDecoration: "none", color: "brand.700" }}>Category 2</Link>
              <Link href="#category3" _hover={{ textDecoration: "none", color: "brand.700" }}>Category 3</Link>
              {/* Add more categories here */}
            </VStack>

            <Divider my={8} />

            <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
            <VStack spacing={4} align="stretch">
              <Link href="#post1" _hover={{ textDecoration: "none", color: "brand.700" }}>Recent Post 1</Link>
              <Link href="#post2" _hover={{ textDecoration: "none", color: "brand.700" }}>Recent Post 2</Link>
              <Link href="#post3" _hover={{ textDecoration: "none", color: "brand.700" }}>Recent Post 3</Link>
              {/* Add more recent posts here */}
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.700" color="white" py={4} mt={8}>
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