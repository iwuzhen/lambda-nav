import { Container, Flex, Link, useColorModeValue, SimpleGrid, Box, chakra, Icon } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"


import {
  Link as RouterLink,
} from "@tanstack/react-router"

export const Route = createFileRoute("/_layout/")({
  component: PageIndex,
})

const IconMap: Record<string, React.ReactNode> = {
  "Academic Publications": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>,
  "Wikipedia": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M640 51.2l-.3 12.2c-28.1 .8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3 .3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4 .2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5 .3v13.1c-19.4 .6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4 .3-3.6 0-10.3 .3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5 .8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1 .2 .5z" /></svg>,
  "Encyclopædia Britannica": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" /></svg>,
  "Patents": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" /></svg>,
  "Code": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>,
  "Other": <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
}

const indexTree = [
  {
    title: "Academic Publications",
    describe: "Academic Publications 涵盖多个领域研究，包括 arXiv 分类学、OpenAlex 概念及各种统计数据，还有 MAG 的学科网络图、相关度、学科网络统计趋势等，涉及计算机科学、数学、物理学等多学科。",
    search: {
      origin: ['Academic Publications'],
      title: "Academic Publications",
    },
  },
  {
    title: "Wikipedia",
    describe: "Wikipedia 有学科树、文章数、访问次数等统计数据，还有学科相关度、度分布熵、结构熵等指标，以及学科网络统计趋势和幂律变化等，涵盖多个研究领域，为知识体系架构提供有价值的参考。",
    search: {
      tags: ['Wikipedia'],
      title: "Wikipedia",
    },
  },
  {
    title: "Encyclopædia Britannica",
    describe: "这里有大英百科全书 Category 树。",
    search: {
      origin: ['Encyclopædia Britannica'],
      title: "Encyclopædia Britannica",
    },
  },
  {
    title: "Patents",
    describe: "Patents 包括 IPC 查询工具，以及知识复杂度（专利）的研究。还有中美不同地区及城市专利数比较，涵盖国际范围，为专利研究提供数据支持，助力了解专利领域发展动态及区域差异。",
    search: {
      origin: ['Patents'],
      title: "Patents",
    },
  },
  {
    title: "Code",
    describe: "通过 Github 项目以及开发者数据计算得出的知识复杂度。",
    search: {
      tags: ['Github'],
      title: "Code",
    },
  },
  {
    title: "Other",
    describe: "其他方面的研究结果。",
    search: {
      origin: ['Others'],
      title: "Other",
    },
  },
]

function PageIndex() {
  // const bg_o = useColorModeValue('gray.200', 'gray.400')
  // const bg_e = useColorModeValue('gray.100', 'gray.500')


  const Feature = (props: any) => {
    return (
      <Box boxShadow={"lg"} p={[6, 6, 6, 6]} m="0" h={"100%"} bg={useColorModeValue('gray.50', 'gray.700')}>
        <Icon
          boxSize={12}
          _light={{
            color: "brand.700",
          }}
          mb={4}
          fill={useColorModeValue('black', 'white')}
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          _light={{
            color: "gray.900",
          }}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (

    <Container maxW="full" p={0}>
      {/* {
        indexTree.map((item, index) => (
          <Flex key={item.title} align="center" justify="center" bg={index % 2 == 0 ? bg_o : bg_e}>
            <Link p={5} m={4} as={RouterLink} _hover={{ textDecoration: 'none' }}
              to="/page"
              search={item.search}>
              <Text fontSize="3xl" fontWeight="500" textAlign="center" _hover={{ textDecoration: 'underline' }}> {item.title} </Text>
              <Text fontSize="md" textAlign="center"> {item.describe} </Text>
            </Link>
          </Flex>
        ))
      } */}
      <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          lg: 8,
        }}
        mt="10"
      >
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <chakra.h2
            _light={{
              color: "brand.600",
            }}
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            Knogen
          </chakra.h2>
          <chakra.p
            mt={2}
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{
              color: "gray.900",
            }}
          >
            A unique research findings navigator.
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="3xl"
            fontSize="xl"
            mx={{
              lg: "auto",
            }}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            欢迎来到 Knogen Navigator！这里有 “Academic Publications” 的多学科前沿研究，“Wikipedia” 的知识体系架构参考，“Encyclopædia Britannica” 大英百科分类，“Patents” 的专利动态与区域差异，以及 “Code” 的 Github 知识复杂度成果。
          </chakra.p>
        </Box>
      </Box>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        // p={20}
        w="auto"
        justifyContent="center"
        alignItems="center"
      >

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={20}
          px={{
            base: 4,
            lg: 16,
            xl: 24,
          }}
          py={20}
          mx="auto"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="xl"
        >

          {
            indexTree.map((item, _) => (

              <Link as={RouterLink}
                _hover={{
                  textDecoration: 'none', // 强调作用
                  boxShadow: 'lg', // 添加阴影
                  transform: 'scale(1.15)', // 放大效果
                  cursor: 'pointer', // 鼠标悬停时显示为指针
                }}
                to="/page"
                search={item.search}>
                <Feature
                  title={item.title}
                  icon={IconMap[item.title]}
                >
                  {item.describe}
                </Feature>
              </Link>
            ))
          }

        </SimpleGrid>
      </Flex>
    </Container >

  )
}
