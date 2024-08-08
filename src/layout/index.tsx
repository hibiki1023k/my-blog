import React from 'react';
import { Container, Flex, Heading, Text, Icon, IconButton } from '@yamada-ui/react';
import { Outlet } from 'react-router-dom';

import { GoHomeFill, GoPersonFill, GoProjectRoadmap } from 'react-icons/go';

const MainLayout: React.FC = () => {
    return (
        <Flex direction="column" minH="100vh">
            <Flex as="header" bg="gray.100" color="white" p={4} align="center" justify="space-between">
                <Heading as="h1" size="lg" color='black'>
                    <a href='/'>
                        My Blog
                    </a>
                    </Heading>
                <nav>
                    <IconButton size='lg' px={3} as="a" href="/" variant='ghost'><Icon as={GoHomeFill} size='3xl' /></IconButton>
                    <IconButton size='lg' px={3} as="a" href="/about" variant='ghost'><Icon as={GoPersonFill} size='3xl' /></IconButton>
                    <IconButton size='lg' px={3} as="a" href="/products" variant='ghost'><Icon as={GoProjectRoadmap} size='3xl' /></IconButton>
                </nav>
            </Flex>
            <Container as="main" maxW="container.lg" py={8} flex="1">
                <Outlet />
            </Container>
            <Flex as="footer" bg="gray.800" color="white" p={4} align="center" justify="center">
                <Text>&copy; 2024 Hibiki KAWAHASHI. All rights reserved.</Text>
            </Flex>
        </Flex>
    );
}

export default MainLayout;