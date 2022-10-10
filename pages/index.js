import { Flex, Box, Image, Text, Button, Stack, VStack, Show } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import '@fontsource/roboto'
import '@fontsource/nunito'

const Home = () => {
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)')

    return (
        <>
            <Stack direction={{ sm: 'column', md: 'column', lg: 'row', xl: 'row' }} justify={'center'} align={'center'}>
                <Box
                    ml={{ sm: '0px', md: '5px', lg: '102.43px', xl: '245.43px' }}
                    mt={{ sm: '46px', md: '46px', lg: '91px', xl: '75px' }}
                >
                    <Image src="imgs/Group.png" w={'36.11px'} h={'57px'} />
                </Box>
                <Flex>
                    <Box
                        w={{ sm: '280px', md: '347px', lg: '809.46px', xl: '953.89px' }}
                        h={{ sm: '95px', md: '95px', lg: '57px' }}
                        mt={{ sm: '23px', md: '23px', lg: '91px', xl: '75px' }}
                        mr={{ sm: '0px', md: '0px', lg: '76px', xl: '225px' }}
                    >
                        <Flex>
                            <Text
                                mt={{ sm: '0px', md: '0px', lg: '19px' }}
                                ml={{ sm: '0px', md: '0px', lg: '299.89', xl: '436.46px' }}
                                mb={{ sm: '74px', md: '74px', lg: '17px' }}
                                w={{ sm: '50', md: '128px' }}
                                h={'21px'}
                                fontFamily={'Roboto, sans-serif'}
                                fontWeight={'regular'}
                                fontSize={'18px'}
                                lineHeight={'21px'}
                                color="black"
                            >
                                Relax your mind
                            </Text>
                            <Text
                                mt={{ sm: '0px', md: '0px', lg: '19px' }}
                                mb={{ sm: '74px', md: '74px', lg: '17px' }}
                                ml={{ sm: '30px', md: '66px', lg: '74px', xl: '74px' }}
                                w={'36px'}
                                h={'21px'}
                                fontFamily={'Roboto, sans-serif'}
                                fontSize={'18px'}
                                fontWeight={'regular'}
                                lineHeight={'21px'}
                                color={'black'}
                            >
                                Blog
                            </Text>
                            <Text
                                mt={{ sm: '0px', md: '0px', lg: '19px' }}
                                ml={{ sm: '25px', md: '56px', lg: '64px', xl: '64px' }}
                                mb={{ sm: '74px', md: '74px', lg: '17px' }}
                                w={'61px'}
                                h={'21px'}
                                fontFamily={'Roboto, sans-serif'}
                                fontSize={'18px'}
                                fontWeight={'regular'}
                                lineHeight={'21px'}
                                color={'black'}
                            >
                                How To
                            </Text>
                            <Button
                                mt={{ sm: '53px', md: '53px', lg: '8px' }}
                                ml={{
                                    sm: '88px',
                                    md: '113px',
                                    lg: '688.46px',
                                    xl: '827.46px',
                                }}
                                mb={'7px'}
                                width={'121px'}
                                height={'42px'}
                                borderRadius={'4px'}
                                fontFamily={'Roboto, sans-serif'}
                                fontSize={'18px'}
                                fontWeight={'regular'}
                                lineHeight={'21px'}
                                color={'white'}
                                bg={'blue'}
                                align={'left'}
                                position="absolute"
                            >
                                Free Trial
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Stack>
            <Stack direction={{ sm: 'column', md: 'column', lg: 'row', xl: 'row' }} align={'center'} justify="center">
                <Flex>
                    <Show above="lg">
                        {isLargerThan1440 ? (
                            <Box w={'727px'} h={'550px'} ml={'-141px'} mt={'75px'}>
                                <Image src="imgs/clean-ipad-screen-mockup-desktop.png" alt="IpadDesktop" />
                            </Box>
                        ) : (
                            <Box w={'688px'} h={'632px'} ml={'-173px'} mt={'0px'}>
                                <Image src="imgs/clean-ipad-screen-mockup-tablet.png" alt="IpadTablet" />
                            </Box>
                        )}
                    </Show>
                    <Show below="lg">
                        <Box mt={'13px'} ml={{ sm: '-10px', md: '-65px' }} w={{ sm: '280px', md: '414px' }}>
                            <Image src="imgs/clean-ipad-screen-mockup-mobile.png" alt="IpadMobile" />
                        </Box>
                    </Show>
                    <Box
                        w={{ sm: '270px', md: '321px' }}
                        h={{ sm: '200px', md: '256px' }}
                        ml={{ sm: '-270px', md: '-350px', lg: '-885px', xl: '-1029px' }}
                        mt={{ sm: '330px', md: '474px', lg: '187px', xl: '199px' }}
                    >
                        <Text
                            fontFamily={'Nunito,  sans-serif '}
                            fontSize={{ sm: '33px', md: '42px' }}
                            fontWeight={{
                                sm: 'semibold',
                                md: 'semibold',
                                lg: 'semibold',
                                xl: 'regular',
                            }}
                            lineHeight={{ sm: '57px', md: '57px' }}
                            textAlign={{ sm: 'center', md: 'center', lg: 'right' }}
                            color="black"
                        >
                            Time to relax.
                            <br /> Make your mind
                            <br />
                            more strong and
                            <br /> flexible!
                        </Text>
                    </Box>
                    <VStack>
                        <Flex>
                            <Box ml={{ sm: '-275px', md: '-300px', lg: '-280px', xl: '-280px' }}>
                                <Image
                                    src="imgs/google-play-badge 1.png"
                                    w={'146px'}
                                    h={'57px'}
                                    mt={{ sm: '580px', md: '730px', lg: '453px', xl: '455px' }}
                                />
                            </Box>
                            <Box>
                                <Image
                                    src="imgs/app-store 1.png"
                                    w="131px"
                                    h="39px"
                                    mt={{ sm: '589px', md: '739px', lg: '462px', xl: '464px' }}
                                />
                            </Box>
                        </Flex>
                    </VStack>
                </Flex>
            </Stack>
            <Stack
                background="white"
                mt={{ sm: '240px', md: '280px', lg: '73px', xl: '90px' }}
                mb={{ sm: '116px', md: '116px', lg: '345px' }}
                direction={{ sm: 'column', md: 'column', lg: 'row', xl: 'row' }}
                justify={'center'}
                align="center"
                height={{ sm: '1495px', md: '1836px', lg: '1808px', xl: '1808px' }}
            >
                <Flex>
                    <Box h={{ sm: '1836px', md: '1836px', lg: '1808px', xl: '1808px' }}>
                        <Show above="lg">
                            {isLargerThan1440 ? (
                                <Box w={'866px'} h={'689px'} ml={'-85px'} mt={'109px'} position={'absolute'}>
                                    <Image src="imgs/iphone-x-mockup-desktop.png" alt="IphoneDesktop" />
                                </Box>
                            ) : (
                                <Box w={'732px'} h={'683px'} ml={'0px'} mt={'140px'} position={'absolute'}>
                                    <Image src="imgs/iphone-x-mockup-tablet.png" alt="IphoneTablet" />
                                </Box>
                            )}
                        </Show>
                        <Show below="lg">
                            <Box
                                ml={{ sm: '0px', md: '0px' }}
                                mt={{ sm: '25px', md: '-220px' }}
                                w={{ sm: '280px', md: '414px' }}
                                h={'455px'}
                                position={'absolute'}
                            >
                                <Image src="imgs/iphone-x-mockup-mobile.png" alt="iphoneMobile" />
                            </Box>
                        </Show>
                        <Text
                            mt={{ sm: '357px', md: '277px', lg: '176px', xl: '235px' }}
                            ml={{ sm: '13px', md: '42px', lg: '512px', xl: '603px' }}
                            mr={{ sm: '0px', md: '42px' }}
                            w={{ sm: '260px', md: '330px', lg: '408px', xl: '440px' }}
                            h={{ sm: '140px', md: '164px', lg: '135px', xl: '126px' }}
                            fontFamily={'Nunito, sans-serif'}
                            fontWeight="semibold"
                            fontSize={{ sm: '33px', md: '42px' }}
                            lineHeight={'57.29px'}
                            color={'black'}
                        >
                            In calmmind we make it simple so you can sit and relax.
                        </Text>
                        <Text
                            mt={{ sm: '100px', md: '80px', lg: '66px', xl: '64px' }}
                            ml={{ sm: '9px', md: '47px', lg: '519px', xl: '611px' }}
                            w={{ sm: '270px', md: '325px', lg: '406px', xl: '433px' }}
                            h={{ sm: '275px', md: '252px', lg: '207px', xl: '194px' }}
                            fontFamily={'Roboto, sans-serif'}
                            fontWeight={'light'}
                            fontSize={{ sm: '17.9px', md: '22px' }}
                            lineHeight={{ sm: '30px', md: '39.31px' }}
                        >
                            We guide you thru all the process to release your mind and relax your body. Just relax and
                            let all the hard work for as. <br />
                            To see how easy is to use our app, we make a video for you
                        </Text>
                        <Button
                            bg="blue"
                            mt={{ sm: '-30px', md: '62px', lg: '69px', xl: '37px' }}
                            ml={{ sm: '9px', md: '42px', lg: '519px', xl: '603px' }}
                            w={{ sm: '265px', md: '330px', lg: '440px', xl: '440px' }}
                            h={{ sm: '70px', md: '112.96px', lg: '87px', xl: '87px' }}
                            borderRadius={'4px'}
                        >
                            <Box
                                w={{ sm: '25px', md: '50px' }}
                                h={{ sm: '25px', md: '50px' }}
                                mt={{ sm: '0px', md: '10px', lg: '18px', xl: '10px' }}
                                ml={{ sm: '-60px', md: '10px', lg: '-41px', xl: '-33px' }}
                            >
                                <Image src="imgs/Polygon 2.png" />
                            </Box>
                            <Box
                                w={{ sm: '100px', md: '208px', lg: '277px', xl: '277px' }}
                                h={{ sm: '48px', md: '48px', lg: '53px', xl: '53px' }}
                                ml={{ sm: '30px', md: '0px', lg: '-7px', xl: '-3px' }}
                            >
                                <Text
                                    color="white"
                                    fontFamily={'Roboto, sans-serif'}
                                    fontSize={{ sm: '16px', md: '20px' }}
                                    fontWeight="regular"
                                    lineHeight={'23px'}
                                    align="center"
                                >
                                    Watch how to use
                                    <br />
                                    calmmind
                                </Text>
                            </Box>
                        </Button>
                        <Box
                            mt={{ sm: '130.04px', md: '152.04px', lg: '229px', xl: '274px' }}
                            ml={{ sm: '53px', md: '54px', lg: '297px', xl: '398px' }}
                            w={{ sm: '185px', md: '311px', lg: '440px', xl: '440px' }}
                            h={{ sm: '107px', md: '87px', lg: '126px', xl: '126px' }}
                        >
                            <Text
                                fontFamily={'Nunito, sans-serif'}
                                fontWeight={'semibold'}
                                fontSize={{ md: '28px', lg: '42px' }}
                                lineHeight={{ md: '35px', lg: '57px' }}
                                textAlign="center"
                            >
                                What the peeps thing for our app?
                            </Text>
                        </Box>
                        <Box
                            w={{ sm: '127px', md: '258px', lg: '631px', xl: '631px' }}
                            h={{ sm: '217px', md: '217px', lg: '120px', xl: '120px' }}
                            ml={{ sm: '9px', md: '27px', lg: '194px', xl: '287px' }}
                            mt={{ sm: '-14px', md: '24px', lg: '69px', xl: '36px' }}
                        >
                            <Image
                                src="imgs/ArrowBack.png"
                                position={'absolute'}
                                ml={{ sm: '-5px', md: '-5px', lg: '5px' }}
                                mt={{ sm: '65px', md: '65px', lg: '33px', xl: '33px' }}
                            />
                            <Box
                                w={{ sm: '220px', md: '270px', lg: '443px', xl: '443px' }}
                                h={{ sm: '220px', md: '217px', lg: '120px', xl: '120px' }}
                                ml={{ sm: '25px', md: '35px', lg: '103px', xl: '105px' }}
                            >
                                <Text
                                    fontFamily={'Roboto, sans-serif'}
                                    fontWeight="light"
                                    fontSize={{ sm: '18px', md: '22px' }}
                                    textAlign="center"
                                    lineHeight="39px"
                                >
                                    This is the best app ever for meditation! Easy to use and very intuitive. I will
                                    recommend to all my friends!
                                </Text>
                            </Box>
                            <Image
                                src="imgs/ArrowRight.png"
                                ml={{ sm: '245px', md: '330px', lg: '605px', xl: '614px' }}
                                mt={{ sm: '-152px', md: '-152px', lg: '-85px', xl: '-85px' }}
                            />
                        </Box>
                        <Show above="lg">
                            {isLargerThan1440 ? (
                                <Box w={'1200px'} h={'324px'} ml={'11px'} mb={'52px'} mt={'136px'}>
                                    <Image src="imgs/Peeps-desktop.png" alt="Peepsxl" />
                                </Box>
                            ) : (
                                <Box w={'991px'} h={'324px'} ml={'17px'} mb={'79px'} mt={'150px'}>
                                    <Image src="imgs/peeps-tablet.png" alt="Peepslg" />
                                </Box>
                            )}
                        </Show>
                        <Show below="lg">
                            <Box
                                mt={'150px'}
                                mb={{ sm: '-76px' }}
                                ml={{ sm: '10px', md: '7px' }}
                                w={{ sm: '270px', md: '406.3px' }}
                                h={'238px'}
                            >
                                <Image src="imgs/peeps-mobile.png" alt="Peepsmd" />
                            </Box>
                        </Show>
                    </Box>
                </Flex>
            </Stack>
        </>
    )
}
export default Home
