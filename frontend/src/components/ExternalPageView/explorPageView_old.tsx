import { ExternalLinkIcon } from "@chakra-ui/icons"
import data from "./data.json"
import { Card, CardHeader, FormHelperText, CardBody, CardFooter, Text, Link, Heading, Button, Tag, FormControl, FormErrorMessage, FormLabel, Input, TagLabel, Stack, VStack, StackDivider } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'

import {
    useChakraSelectProps,
    AsyncCreatableSelect,
    AsyncSelect,
    CreatableSelect,
    Select,
} from "chakra-react-select";
import { useState } from "react";


const externalPageList = data.page.records.map(item => item.fields)
const pageGroupList = data.group.records.map(item => item.fields)
const pageTypeList = data.type.records.map(item => item.fields)
const pageTagList = data.tag.records.map(item => item.fields)


const groupSetSellection = pageGroupList.map(item => {
    return {
        label: item.title,
        value: item.title
    }
})


const typeSetSellection = pageTypeList.map(item => {
    return {
        label: item.title,
        value: item.title
    }
})

const tagSet = new Set()
externalPageList.forEach(item => {
    item.tags.forEach(tag => tagSet.add(tag))
})
const tagSetSellection = Array.from(tagSet).map(item => {
    return {
        label: item as string,
        value: item as string
    }
})


function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Pagefilter() {
    const modeList = ["Group", "Tag", "Type"]
    const [modeValue, setModeValue] = useState(modeList[0])

    const [selectedTags, setSelectedTags] = useState(tagSetSellection)
    const selectTagProps = useChakraSelectProps({
        isMulti: true,
        value: selectedTags,
        onChange: setSelectedTags as any,
        options: tagSetSellection,
        variant: "filled",
        colorScheme: "blue"
    });


    const [selectedTypes, setSelectedTypes] = useState(typeSetSellection)
    const selectTypeProps = useChakraSelectProps({
        isMulti: true,
        value: selectedTypes,
        onChange: setSelectedTypes as any,
        options: typeSetSellection,
        variant: "filled",
        colorScheme: "blue"
    });


    const [selectedGroups, setSelectedGroups] = useState(groupSetSellection)
    const selectGroupProps = useChakraSelectProps({
        isMulti: true,
        value: selectedGroups,
        onChange: setSelectedGroups as any,
        options: groupSetSellection,
        variant: "filled",
        colorScheme: "blue"
    });

    return (
        <>
            <Stack direction='row' >
                <Text> Explor : </Text>
                <RadioGroup onChange={setModeValue} value={modeValue}>
                    <Stack direction='row'>
                        {
                            modeList.map(item => <Radio key={item} value={item}>{item}</Radio>)
                        }
                    </Stack>
                </RadioGroup>
            </Stack>
            <VStack
                // divider={<StackDivider borderColor='gray.200' />}
                borderWidth='1px'
                spacing={4}
                align='stretch'
                p={4}
                mt={4}
            >
                <Text>filter </Text>
                <Flex align='center'>
                    <Text>group: </Text>
                    {/* <Button onClick={() => { console.log(selectedTags) }}>test</Button> */}
                    <Select
                        {...selectGroupProps}
                    />
                </Flex>
                <Flex >
                    <Text>type: </Text>
                    <Select
                        {...selectTypeProps}
                    />
                </Flex>
                <Flex  >
                    <Text>tag: </Text>
                    <Select
                        {...selectTagProps}
                    />
                </Flex>
            </VStack>

            <PageCard
                modeSellected={modeValue}
                groupSellected={selectedGroups.map(item => item.value)}
                typeSellected={selectedTypes.map(item => item.value)}
                tagSellected={selectedTags.map(item => item.value)}
            />
        </>
    );
}


function PageCard(
    { modeSellected, groupSellected, typeSellected, tagSellected }:
        { modeSellected: string, tagSellected: string[], groupSellected: string[], typeSellected: string[], }
) {
    if (modeSellected === "Group") {
        const groupList = pageGroupList.sort((a, b) => b.weight - a.weight).map(item => item.title)
        return (
            <>{
                groupList.map(title => {
                    const filterData = externalPageList.filter(item => {
                        return item.group === title
                    }).filter(item => {
                        return groupSellected.includes(item.group)
                    }).filter(item => {
                        return typeSellected.includes(item.type)
                    }).filter(item => {
                        return item.tags.some(tag => tagSellected.includes(tag))
                    }).sort((a, b) => b.weight - a.weight)
                    return (
                        <div key={title}>
                            {filterData.length > 0 && (<Text fontSize='5xl' as='b'>{capitalizeFirstLetter(title)}</Text>)}

                            < Flex wrap="wrap" >
                                {
                                    filterData.map((item) => (
                                        <Card key={item.title}
                                            maxW='xs'
                                            className="hover:shadow-lg transition-shadow duration-300"
                                            m={4} variant="elevated" rounded='lg' boxShadow='md'>
                                            <CardHeader>
                                                <Heading size='md'>
                                                    <Link href={item.public_url} isExternal>
                                                        {item.title}
                                                    </Link>
                                                </Heading>
                                            </CardHeader>
                                            <CardBody>
                                                {item.tags.map((title) => (
                                                    <Tag size='md' key={title} variant='solid' colorScheme={tagSellected.includes(title) ? "teal" : "blackAlpha"} m={1}>
                                                        <TagLabel>{title}</TagLabel>
                                                    </Tag>
                                                ))}

                                                <Text fontSize='sm' noOfLines={6}>{item.abstract}</Text>
                                            </CardBody>
                                            <CardFooter>
                                                <Link href={item.public_url} isExternal>
                                                    <Button>View here<ExternalLinkIcon mx='2px' /></Button>
                                                </Link>
                                            </CardFooter>
                                        </Card>

                                    ))
                                }
                            </Flex >
                        </div>
                    )
                })
            }
            </>
        )
    }
    if (modeSellected === "Tag") {
        const tagList = pageTagList.sort((a, b) => b.weight - a.weight).map(item => item.title)
        return (
            <>{
                tagList.map(title => (
                    <>
                        <Text fontSize='5xl' as='b'>{capitalizeFirstLetter(title)}</Text>
                        <Flex wrap="wrap">
                            {externalPageList.filter(item => {
                                return item.tags.includes(title)
                            }).filter(item => {
                                return groupSellected.includes(item.group)
                            }).filter(item => {
                                return typeSellected.includes(item.type)
                            }).filter(item => {
                                return item.tags.some(tag => tagSellected.includes(tag))
                            }).sort((a, b) => b.weight - a.weight).map((item) => (
                                <Card key={item.title}
                                    maxW='sm'
                                    className="hover:shadow-lg transition-shadow duration-300"
                                    m={4} variant="elevated" rounded='lg' boxShadow='md'>
                                    <CardHeader>
                                        <Heading size='md'>
                                            <Link href={item.public_url} isExternal>
                                                {item.title}
                                            </Link>
                                        </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        {item.tags.map((title) => (
                                            <Tag size='md' key={title} variant='solid' colorScheme={tagSellected.includes(title) ? "teal" : "blackAlpha"} m={1}>
                                                <TagLabel>{title}</TagLabel>
                                            </Tag>
                                        ))}

                                        <Text fontSize='sm' noOfLines={6}>{item.abstract}</Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Link href={item.public_url} isExternal>
                                            <Button>View here<ExternalLinkIcon mx='2px' /></Button>
                                        </Link>
                                    </CardFooter>
                                </Card>

                            ))
                            }
                        </Flex>
                    </>
                ))
            }
            </>
        )
    }
    if (modeSellected === "Type") {
        const typeList = pageTypeList.sort((a, b) => b.weight - a.weight).map(item => item.title)
        return (
            <>{
                typeList.map(title => (
                    <>
                        <Text fontSize='5xl' as='b'>{capitalizeFirstLetter(title)}</Text>
                        <Flex wrap="wrap">
                            {externalPageList.filter(item => {
                                return item.type === title
                            }).filter(item => {
                                return groupSellected.includes(item.group)
                            }).filter(item => {
                                return typeSellected.includes(item.type)
                            }).filter(item => {
                                return item.tags.some(tag => tagSellected.includes(tag))
                            }).sort((a, b) => b.weight - a.weight).map((item) => (
                                <Card key={item.title}
                                    maxW='sm'
                                    className="hover:shadow-lg transition-shadow duration-300"
                                    m={4} variant="elevated" rounded='lg' boxShadow='md'>
                                    <CardHeader>
                                        <Heading size='md'>
                                            <Link href={item.public_url} isExternal>
                                                {item.title}
                                            </Link>
                                        </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        {item.tags.map((title) => (
                                            <Tag size='md' key={title} variant='solid' colorScheme={tagSellected.includes(title) ? "teal" : "blackAlpha"} m={1}>
                                                <TagLabel>{title}</TagLabel>
                                            </Tag>
                                        ))}

                                        <Text fontSize='sm' noOfLines={6}>{item.abstract}</Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Link href={item.public_url} isExternal>
                                            <Button>View here<ExternalLinkIcon mx='2px' /></Button>
                                        </Link>
                                    </CardFooter>
                                </Card>

                            ))
                            }
                        </Flex>
                    </>
                ))
            }
            </>
        )
    }
    return (
        <Flex wrap="wrap">
        </Flex >
    )
}

function ExplorPageView() {


    return (
        <>
            <Pagefilter />
        </>
    )

}

export default ExplorPageView