import React from 'react';
import { Container, Flex, Heading, Text } from '@yamada-ui/react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <Flex as="header" bg="blue.500" color="white" p={4} align="center" justify="space-between">
                <Heading as="h1" size="lg">My Blog</Heading>
                <nav>
                    <Text as="a" href="/" mx={2}>Home</Text>
                    <Text as="a" href="/about" mx={2}>About</Text>
                    <Text as="a" href="/products" mx={2}>Products</Text>
                </nav>
            </Flex>
            <Container as="main" maxW="container.lg" py={8} flex="1">
                <Outlet />
            </Container>
            <Flex as="footer" bg="gray.800" color="white" p={4} align="center" justify="center">
                <Text>&copy; 2024 My App. All rights reserved.</Text>
            </Flex>
        </Flex>
    );
}

export default MainLayout;