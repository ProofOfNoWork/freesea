import type { NextPage } from "next";
import { Button, Container, Flex, Heading, Image, Stack } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container maxW={"1800px"}>
      <Flex
        h={"100vh"}
        w={"100vw"}
        alignItems={"center"}
        justifyContent={"center"}
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.btc-echo.de/wp-content/uploads/2023/05/shutterstock_1807426795.jpg')`} // Update the bgImage property
        bgSize="cover"
        bgPosition="center"
        margin={-4}
      >
        <Stack spacing={4} align={"center"}>
          <Image
            src='https://lh3.googleusercontent.com/pw/AJFCJaVCV_aKcThawUaaGABAtGssOZJMZZwBK_3WPED_in5O5Vrh_AWL_0ufnLqf24p5xO0nJQfbfuI2_HELoSgqNKjQ4AAqjmQvZjKIIeqLt9bvwIwA2grvdzLnG-U1G98xiaWB4ja0Yx9QVOplFCqu_r433wEEKaJEzHxnS4DsmXhI2Ue-T0QFOHY47r9bFvu_uov7huGX9BR22JhfT4Xx_haxFdIhRG9ILMZNHQIomfOGNwsTUXmXQmBxr6zJKhwRBiXeqla_RVXtHQlW4KZHKax4He8B1p9niNG-MjoUWxI1QcyvKqK5pzNveuSBzfifvyq7fj6xal2Ee2tf7k9iPPmaFs2ANC_gFC0a-600ZGe8-3SvSotc0mczJV6pScw49L1RQWs51InutMb49zqol6dxyOT1MLEWOhwaOD8Vgg8jMKulWJuziojmmdiy2ptlQplDwttZJTBYy0nO0hsdWT649LZOdyIh7XuQ8liFGhNSyCr_zquKZeSZGjWjk5zn-wjXvidnARySdBGucWRo71GPbkMa1yT611UjBESe1y2C6r_FYd_g-ZyuACg2hOSkEIsH4b_jm6pdIxHrtoOjiQFCKsBbHDSHDBHI3NfarIjUHuzdVc4pux7I4bOrGyUrw-TwUUQOk1mfGL-vHKfIEpn6n7O3r48qw8FhqTTbZZNadxaZyycH4Si6o49bV_rCLpzFI2golylLMkhGocKSyoauFpvmSR-NHDVaAd-CsTKR_HiOTRRgYWxQcsmnlodCmNX6KhCvcyMhSzNd8Gk1FcZHpUflHuzEwr_gHfdYrq8dKP9DSGRKYelLrPOIY6IRLCvA8lAXGFw6Iqs7vayuuwAl8i2EZ2HcMFw4dWogllwKIujo78ZqXl4n923nwuRFDQaj7p6V0HgQ5XE9fHKuu_M57g=w927-h920-s-no?authuser=0'
            alt='Logo'
            boxSize="350px"
            objectFit="cover"
            mt={-20}
          />
          <Heading color="#8000ff" textColor={"#FFFFFF"}>Buy & Sell PulseChain NFTs For Free</Heading>
          <Button marginBottom={"20px"} textColor={"#FFFFFF"} bg="#e619e6">Shop NFTs</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
