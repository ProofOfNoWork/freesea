import { Avatar, Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';
import { Button } from '@chakra-ui/react';

export function Navbar() {
    const address = useAddress();

    return (
        <Box maxW={"1200px"} m={"auto"} py={"10px"}px={"40px"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href='/'>
                <Image
            src='https://lh3.googleusercontent.com/pw/AJFCJaVCV_aKcThawUaaGABAtGssOZJMZZwBK_3WPED_in5O5Vrh_AWL_0ufnLqf24p5xO0nJQfbfuI2_HELoSgqNKjQ4AAqjmQvZjKIIeqLt9bvwIwA2grvdzLnG-U1G98xiaWB4ja0Yx9QVOplFCqu_r433wEEKaJEzHxnS4DsmXhI2Ue-T0QFOHY47r9bFvu_uov7huGX9BR22JhfT4Xx_haxFdIhRG9ILMZNHQIomfOGNwsTUXmXQmBxr6zJKhwRBiXeqla_RVXtHQlW4KZHKax4He8B1p9niNG-MjoUWxI1QcyvKqK5pzNveuSBzfifvyq7fj6xal2Ee2tf7k9iPPmaFs2ANC_gFC0a-600ZGe8-3SvSotc0mczJV6pScw49L1RQWs51InutMb49zqol6dxyOT1MLEWOhwaOD8Vgg8jMKulWJuziojmmdiy2ptlQplDwttZJTBYy0nO0hsdWT649LZOdyIh7XuQ8liFGhNSyCr_zquKZeSZGjWjk5zn-wjXvidnARySdBGucWRo71GPbkMa1yT611UjBESe1y2C6r_FYd_g-ZyuACg2hOSkEIsH4b_jm6pdIxHrtoOjiQFCKsBbHDSHDBHI3NfarIjUHuzdVc4pux7I4bOrGyUrw-TwUUQOk1mfGL-vHKfIEpn6n7O3r48qw8FhqTTbZZNadxaZyycH4Si6o49bV_rCLpzFI2golylLMkhGocKSyoauFpvmSR-NHDVaAd-CsTKR_HiOTRRgYWxQcsmnlodCmNX6KhCvcyMhSzNd8Gk1FcZHpUflHuzEwr_gHfdYrq8dKP9DSGRKYelLrPOIY6IRLCvA8lAXGFw6Iqs7vayuuwAl8i2EZ2HcMFw4dWogllwKIujo78ZqXl4n923nwuRFDQaj7p6V0HgQ5XE9fHKuu_M57g=w927-h920-s-no?authuser=0'
            alt='Logo'
            marginBottom={"20px"}
            boxSize="75px"
            objectFit="cover"
          />
                </Link>
                <Flex direction={"row"}>
                    <Link as={NextLink} href='/buy' mx={2.5}>
                        <Button marginBottom={"20px"} bg="#00eaff">Buy NFTs</Button>
                    </Link>
                    <Link as={NextLink} href='/sell' mx={2.5}>
                        <Button marginBottom={"20px"} textColor={"#FFFFFF"} bg="#8000ff">Sell NFTs</Button>
                    </Link>
                </Flex>
                <Flex dir={"row"} alignItems={"center"}>
                <ConnectWallet style={{ marginBottom: "20px"}}/>
                    {address && (
                        <Link as={NextLink} href={`/profile/${address}`}>
                            <Avatar style={{ marginBottom: "20px"}} src='https://ponw.win/assets/images/new-logo-804x804.png' ml={"20px"}/>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
};