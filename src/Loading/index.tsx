// src/components/Loading.tsx
import React from 'react';
import { Flex, Spinner, Text } from '@yamada-ui/react';

const Loading: React.FC = () => {
    return (
        <Flex direction="column" align="center" justify="center" height="100vh">
            <Spinner size="xl" />
            <Text mt={4}>Loading...</Text>
        </Flex>
    );
}

export default Loading;
