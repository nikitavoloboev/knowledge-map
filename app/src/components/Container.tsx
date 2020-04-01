import React from "react";
import NextLink from "next/link";
import {
  useColorMode,
  Flex,
  Icon,
  IconButton,
  Text,
  Tag,
  Stack,
} from "@chakra-ui/core";
import styled from "@emotion/styled";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "gray.900",
  };
  const primarytextColor = {
    light: "black",
    dark: "white",
  };
  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)",
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        color={primarytextColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <NextLink href="/" passHref>
          <Text fontWeight="bold">
            Learn Anything
            <Tag ml="2" size="md" variant="solid" variantColor="orange">
              WIP
            </Tag>
          </Text>
        </NextLink>
        <Stack isInline>
          <NextLink href="/new" passHref>
            <IconButton
              aria-label="Create new study guide"
              icon={() => <Icon name="plus" />}
              variant="ghost"
            />
          </NextLink>
          {/* TODO: only display icon when the user is not logged in */}
          {/* if the user is logged in display their avatar instead */}
          <IconButton
            aria-label="Log in/Sign up"
            icon={() => <Icon name="person" />}
            variant="ghost"
          />
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? "sun" : "moon"}
            onClick={toggleColorMode}
          />
        </Stack>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;