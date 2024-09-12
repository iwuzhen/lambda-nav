import { ExternalLinkIcon } from "@chakra-ui/icons"
import data from "./data.json"
import {
    Card, CardHeader, CardBody, CardFooter, Text, Link, Heading, Button, Tag,
    TagLabel, VStack, Box, Checkbox, useCheckboxGroup,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'


import { AnimatePresence, motion } from 'framer-motion';

const MotionCard = motion(Card);
const MotionTag = motion(Tag);

import { type PageQueryWithoutTitle } from "../../routes/_layout/page"


const externalPageList = data.page.records.map(item => item.fields)


const tagSet = new Set()
externalPageList.forEach(item => {
    item.tags.forEach(tag => tagSet.add(tag))
})

// const checkResourceAvailability = async (url: string) => {
//     const startTime = performance.now(); // 记录开始时间
//     try {
//         const response = await fetch(url, { method: 'HEAD' }); // 发送 HEAD 请求
//         const endTime = performance.now(); // 记录结束时间
//         const responseTime = endTime - startTime; // 计算响应时间

//         if (response.ok) {
//             console.log(`Resource is available. Status: ${response.status}, Response Time: ${responseTime.toFixed(2)} ms`);
//         } else {
//             console.log(`Resource is not available. Status: ${response.status}`);
//         }
//     } catch (error: any) {
//         console.error(`Error fetching resource: ${error.message}`);
//     }
// };

// // 使用示例
// checkResourceAvailability('https://arxiv-category-ontology.knogen.com/');

function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterView() {

    return (
        <Flex>
            Fileter
        </Flex>
    )
}

/**
 * 过滤掉数组中出现频率最高的元素，并返回包含出现次数的标签数组
 * @param arr 输入的数组
 * @returns 返回包含标签及其出现次数的数组，按出现次数从多到少排序
 */
function filterMostFrequent<T>(arr: T[], filterTop: boolean): [T, number][] {
    // 创建一个空对象用于存储每个元素的出现次数
    const frequencyMap: { [key: string]: number } = {};

    // 遍历数组，统计每个元素的出现次数
    arr.forEach(item => {
        frequencyMap[item as any] = (frequencyMap[item as any] || 0) + 1;
    });

    // 将元素和其出现次数组合成一个数组
    const frequencyArray: [T, number][] = Object.entries(frequencyMap).map(([key, value]) => [key as T, value]);

    // 按出现次数从多到少排序
    frequencyArray.sort((a, b) => b[1] - a[1]);

    if (filterTop)

        return frequencyArray.filter(([_, count]) =>
            count < frequencyArray[0][1]
        );
    else
        return frequencyArray;
}


/**
 * 根据优先级标签数组对另一组标签进行排序
 * 首先通过检查每个标签是否包含优先级标签来决定它们的排序顺序
 * 如果两个标签都包含或都不包含优先级标签，则保持原顺序
 * 
 * @param a 优先级标签数组，包含的标签将被视为优先级标签
 * @param b 需要排序的标签数组
 * @returns 排序后的标签数组
 */
function prioritizeTags(a: string[], b: string[]): string[] {
    if (a == undefined) {
        return b
    }
    return b.sort((tag1, tag2) => {
        // 检查 tag1 是否包含任何优先级标签
        const tag1HasPriority = a.some(priorityTag => tag1.includes(priorityTag));
        // 检查 tag2 是否包含任何优先级标签
        const tag2HasPriority = a.some(priorityTag => tag2.includes(priorityTag));

        // 如果 tag1 包含优先标签，而 tag2 不包含，则 tag1 优先
        if (tag1HasPriority && !tag2HasPriority) {
            return -1;
        }
        // 如果 tag2 包含优先标签，而 tag1 不包含，则 tag2 优先
        if (!tag1HasPriority && tag2HasPriority) {
            return 1;
        }
        // 如果两者都包含或都不包含优先标签，则保持原有顺序
        return 0;
    });
}

function SearchPageView({ searchParameter }: { searchParameter: PageQueryWithoutTitle, }) {

    // 查询过滤
    let filterData = externalPageList.sort((a, b) => b.weight - a.weight);

    if (searchParameter.origin !== undefined) {
        filterData = filterData.filter(
            item => searchParameter.origin?.some(origin => item.origin.includes(origin))
        )
    }
    if (searchParameter.view !== undefined) {
        filterData = filterData.filter(
            item => searchParameter.view?.some(view => item.view.includes(view))
        )
    }
    if (searchParameter.tags !== undefined) {
        filterData = filterData.filter(
            item => searchParameter.tags?.some(tag => item.tags.includes(tag))
        )
    }

    // 标签优先级排序
    filterData.forEach(item => {
        item.tags = prioritizeTags(searchParameter.tags ? searchParameter.tags : [], item.tags)
    })

    // 高亮标签
    const highTags = searchParameter.tags ? searchParameter.tags.concat() : []


    // 过滤数据预处理
    let tagArray = filterData.flatMap(item => item.tags)
    const tagFrequence = filterMostFrequent(tagArray, false)
    let originArray = filterData.flatMap(item => item.origin)
    const originFrequence = filterMostFrequent(originArray, false)
    let viewArray = filterData.flatMap(item => item.view)
    const viewFrequence = filterMostFrequent(viewArray, false)


    // 当页过滤 origin
    const { value: checkedOriginItems, setValue: setCheckedOriginItems, getCheckboxProps: getOriginCheckGroupProps } = useCheckboxGroup({ defaultValue: [] })
    if (checkedOriginItems.length > 0) {
        filterData = filterData.filter(
            item => checkedOriginItems.some(origin => item.origin.includes(origin as string))
        )
    }

    // 当页过滤 view
    const { value: checkedViewItems, setValue: setCheckedViewItems, getCheckboxProps: getViewCheckGroupProps } = useCheckboxGroup({ defaultValue: [] })
    if (checkedViewItems.length > 0) {
        filterData = filterData.filter(
            item => checkedViewItems.some(view => item.view.includes(view as string))
        )
    }

    // 当页过滤 tag
    const { value: checkedTagItems, setValue: setCheckedTagItems, getCheckboxProps: getTagCheckGroupProps } = useCheckboxGroup({ defaultValue: [] })

    if (checkedTagItems.length > 0) {
        filterData = filterData.filter(
            item => checkedTagItems.some(tag => item.tags.includes(tag as string))
        )
        // 标签优先级排序
        filterData.forEach(item => {
            item.tags = prioritizeTags([...(searchParameter.tags ? searchParameter.tags : []), ...checkedTagItems] as string[], item.tags)
        })
        highTags.push(...(checkedTagItems as string[]))


        filterData = filterData.sort((a, b) => {
            // 计算每个对象的 tags 匹配数量
            const aMatchCount = a.tags.filter(tag => checkedTagItems.includes(tag)).length;
            const bMatchCount = b.tags.filter(tag => checkedTagItems.includes(tag)).length;

            // 首先根据匹配数量排序
            if (aMatchCount !== bMatchCount) {
                return bMatchCount - aMatchCount; // 降序
            }

            // 如果匹配数量相同，则根据 weight 排序
            return b.weight - a.weight; // 降序
        });
    }




    return (
        <Flex wrap="wrap" direction={{ base: 'column', md: 'row' }} mt={14}>
            <Flex flex={3} maxW={"320px"}>

                <VStack alignItems={'start'} w="100%" >
                    <Flex w="100%">
                        <Text fontSize="3xl">Filters</Text>
                        <Spacer />
                        <Button variant='link'
                            onClick={() => { setCheckedTagItems([]); setCheckedOriginItems([]); setCheckedViewItems([]); }}
                        >
                            <Text fontSize="sm">CLEAR ALL</Text>
                        </Button>
                    </Flex>
                    <Accordion defaultIndex={[0,]} allowMultiple w="100%">
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Tags
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack spacing={[3, 3]} direction={['column', 'row']} ml="0" alignItems={'start'}>
                                    {
                                        tagFrequence.map(([title, count], index) => (
                                            <Checkbox {...getTagCheckGroupProps({ value: title })} key={index} size='lg' >
                                                {title}
                                                {count > 1 && <Badge ml='1'>{count}</Badge>}
                                            </Checkbox>
                                        ))
                                    }
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Origins
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack spacing={[3, 3]} direction={['column', 'row']} ml="0" alignItems={'start'}>
                                    {
                                        originFrequence.map(([title, count], index) => (
                                            <Checkbox {...getOriginCheckGroupProps({ value: title })} key={index} size='lg' >
                                                {title}
                                                {count > 1 && <Badge ml='1'>{count}</Badge>}
                                            </Checkbox>
                                        ))
                                    }
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Views
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack spacing={[3, 3]} direction={['column', 'row']} ml="0" alignItems={'start'}>
                                    {
                                        viewFrequence.map(([title, count], index) => (
                                            <Checkbox {...getViewCheckGroupProps({ value: title })} key={index} size='lg' >
                                                {title}
                                                {count > 1 && <Badge ml='1'>{count}</Badge>}
                                            </Checkbox>
                                        ))
                                    }
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </VStack>
            </Flex>
            <Flex flex={7} wrap="wrap">
                <AnimatePresence >
                    {filterData.map((item) => (
                        <MotionCard key={item.title}
                            maxW='sm'
                            className="hover:shadow-lg transition-shadow duration-300"
                            m={4} variant="elevated" rounded='lg' boxShadow='md'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <CardHeader>
                                <Heading size='md'>
                                    <Link href={item.public_url} isExternal>
                                        {item.title} <ExternalLinkIcon mx='2px' />
                                    </Link>
                                </Heading>
                            </CardHeader>
                            <CardBody>
                                {item.tags.map((title) => (
                                    <MotionTag size='md' key={title} variant='solid'
                                        colorScheme={highTags?.includes(title) ? "teal" : "blackAlpha"} m={1}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                    >
                                        <TagLabel>{title}</TagLabel>
                                    </MotionTag>
                                ))}

                                <Text fontSize='sm' noOfLines={6} mt={4}>{item.abstract}</Text>
                            </CardBody>
                            {/* <CardFooter>
                                <Link href={item.public_url} isExternal>
                                    <Button>View here<ExternalLinkIcon mx='2px' /></Button>
                                </Link>
                            </CardFooter> */}
                        </MotionCard>

                    ))
                    }
                </AnimatePresence>
            </Flex>
        </Flex >
    )


}


export default SearchPageView