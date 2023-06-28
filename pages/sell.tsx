import { Box, Button, Card, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ThirdwebNftMedia, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import type { NFT as NFTType } from "@thirdweb-dev/sdk";
import NFTGrid from "../components/NFTGrid";
import SaleInfo from "../components/SalesInfo";

export default function Sell() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const address = useAddress();
    const { data, isLoading } = useOwnedNFTs(contract, address);

    const [selectedNFT, setSelectedNFT] = useState<NFTType>();

    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.btc-echo.de/wp-content/uploads/2023/05/shutterstock_1807426795.jpg')`} // Update the bgImage property
            bgSize="cover"
            bgPosition="center"
        >
            <Container maxW={"1200px"} p={5}>
                <Heading color="white">Sell NFTs</Heading>
                <Text color="white">Select which NFT to sell below.</Text>
                {!selectedNFT ? (
                    <NFTGrid
                        data={data}
                        isLoading={isLoading}
                        overrideOnclickBehavior={(nft) => {
                            setSelectedNFT(nft);
                        }}
                        emptyText="You don't own any NFTs yet from these collections."

                    />
                ) : (
                    <Flex justifyContent={"center"} my={10}>
                        <Card w={"75%"}>
                            <SimpleGrid columns={2} spacing={10} p={5}>
                                <ThirdwebNftMedia
                                    metadata={selectedNFT.metadata}
                                    width="100%"
                                    height="100%"
                                />
                                <Stack>
                                    <Flex justifyContent={"right"}>
                                        <Button
                                            onClick={() => {
                                                setSelectedNFT(undefined);
                                            }}
                                        >X</Button>
                                    </Flex>
                                    <Heading>{selectedNFT.metadata.name}</Heading>
                                    <SaleInfo
                                        nft={selectedNFT}
                                    />
                                </Stack>
                            </SimpleGrid>
                        </Card>
                    </Flex>
                )}
            </Container>
        </Flex>
    )
}
