import { Avatar, Box, Card, CardBody, Container, Heading } from '@yamada-ui/react';
import React from 'react';

interface ProfileProps {
    name: string;
    age: number;
    bio: string;
}

const Profile: React.FC<ProfileProps> = ({ name, age, bio }) => {
    return (
        <Container>
            <Heading size='2xl'>About me.</Heading>
            <Card p={5} rounded='lg' variant='outline'>
                <CardBody>
                    <Box>
                    <Avatar size='2xl' name={ name } />
                    <Heading size='lg'>{ name }</Heading>
                    </Box>
                    <Heading size='sm'>Age: { age }</Heading>
                    <Heading size='md'>Bio: { bio }</Heading>
                </CardBody>
            </Card>
        </Container>
    );
};

export default Profile;