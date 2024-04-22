import { Box, Flex, Heading, Text, Image, Button, VStack, HStack, Input, IconButton } from "@chakra-ui/react";
import { FaPlay, FaPause, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="xl">
          Podcast Curator
        </Heading>
        <HStack as="form" spacing={2}>
          <Input placeholder="Search news articles" />
          <IconButton icon={<FaSearch />} aria-label="Search podcasts" />
        </HStack>
      </Flex>
      <VStack spacing={8} mt={10}>
        <PodcastCard title="Global News Podcast" description="Dive into the latest global news and understand the bigger picture with expert commentary." imageUrl="https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXdzJTIwcG9kY2FzdHxlbnwwfHx8fDE3MTM3NTQ5NjN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <PodcastCard title="Tech Today" description="Stay updated with the latest in technology, from Silicon Valley startups to the newest gadgets." imageUrl="https://images.unsplash.com/photo-1581092923136-cac70289e9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcG9kY2FzdHxlbnwwfHx8fDE3MTM3NTQ5NjN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        <PodcastCard title="Finance Focus" description="Get insights into the financial world, including market trends and investment strategies." imageUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwcG9kY2FzdHxlbnwwfHx8fDE3MTM3NTQ5NjN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
      </VStack>
    </Box>
  );
};

const PodcastCard = ({ title, description, imageUrl }) => {
  return (
    <Flex bg="gray.100" p={5} borderRadius="lg" width="full" alignItems="center">
      <Image borderRadius="full" boxSize="100px" src={imageUrl} alt="Podcast Image" />
      <Box ml={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text mt={2}>{description}</Text>
      </Box>
      <Button ml="auto" leftIcon={<FaPlay />} colorScheme="blue">
        Play
      </Button>
    </Flex>
  );
};

export default Index;
