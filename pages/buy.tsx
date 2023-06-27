import React from "react";
import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            bgImage="url('https://lh3.googleusercontent.com/pw/AJFCJaWvIubnZCpReWpxgOMo8K324y3aNxdynt8yKqbr6ZBJMjlmlnFuALOxh1OV_9GrsMu-iyoLjfTeTewlM8I-f1iR3JQbhzEBuE098YD2rs_wnAg8jxIz9hC6pe4tRwIbqzBf9VzWqpehZ2cJlFArFQzaex6cVA2lU07B3lSfsPFm1NOMDiGWLk5Azz3lJQMpOxZGFyij8W6m_xd21aVU2qmOICrJaQ5AdshB01nGNrshmhE07R4mTArkUc4WStCA8Ggr_m6zB0l_6u0sC1jrwZK1OC5yOxxdmq3fgSkHNKBGKNd2WsQNE5gQA_4wyG6lTwZXx1b2kw7sG9AyuM7oIe567Ka0fyMgtakha6gzMrskJBaq6zyjSc13dGL7EPJBJPRNSANOjfmthLV_SyLU5YSe3mKwunB4GELpw-_5TkDvmmPP4wsVdfmbKBPRmqUXZSuTkOOEwAYuvJoWyJMsUvym_cz8Ak9AYBtIl23LoVr0CQI51CknIY0kLQD3CmBy3AQeSTViqO7YmiaRPGe5VRDqO8gpXJJEPdC4zmhyOJq1qrcLPcRTmshIr_Ogz1r3FwRUMqDj2nuA5sljJ4reC_1mpERTn4mES6XJ0lV9pogqD9L358gK2OmsLE_oJNU3htvFPWU9VEpDXoEvxXkVW6TfMqF-Tincz_YTsL3OyHeuh3-iemsENrZps-qcTlPm_pC-3u404slD4pcLQzqtr3tUjm2KN9pzcqmKjBroWLbNQnQXHB8gUhxjGl7EE4yPAOM-bs4Nr9R1I5wu6s-w3KaPd4o6aPmH0FC6NPuKsT2nSSQXM7aobcxirWiGwny6JU5SWnksbcFZ1mZhC7wfqeRR921Ii52vtfX5k9xa2ECJk-krckegXHGqAxaLvDzhzhyYjOdjf7yGsv7IFo4MF0JP_Q=w304-h168-s-no?authuser=0')" // Replace with the path to your image
            bgSize="cover"
            bgPosition="center"
        >
            <Container maxW={"1200px"} p={5}>
                <Heading color="white">Buy NFTs</Heading>
                <Text color="white">Browse and buy NFTs</Text>
                <NFTGrid 
                    isLoading={isLoading} 
                    data={data} 
                    emptyText={"No NFTs found"}
                />
            </Container>
        </Flex>
    )
};
