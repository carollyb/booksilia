import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Flex, Image } from '@chakra-ui/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

const carouselComponent = () => {
    SwiperCore.use([Autoplay])
    return (
        <Flex
        w={{base: '270px', md: '500px', lg: '1500px'}}
        h={{base: '500px', md: 'auto'}}
        justify={'center'}
        align={'center'}
        overflow={'hidden'}>
            <Swiper
            loop={true}
            autoplay={{
                delay: 2000
            }
            }
            pagination={{
            type: "progressbar"
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide
            display="flex"
            direction='row'
            justify='center'
            align='center'
            >
            <Image 
                src="https://images-submarino.b2w.io/produtos/3056628497/imagens/livro-as-obras-revolucionarias-de-george-orwell-box-com-3-livros/3056628497_1_xlarge.jpg" 
                alt="Box George Orwell"
                p={{base: '7%', md: '5%'}}
                w={{base: '100%', md: '100%', lg: '50%'}}
                h={{base: '100%', md: '100%', lg: '50%'}}
                />
            </SwiperSlide>
            <SwiperSlide
            display="flex"
            direction='row'
            justify='center'
            align='center'>
                <Image 
                src="https://images-submarino.b2w.io/produtos/01/00/oferta/122243/6/122243617_1SZ.jpg" 
                alt="Box Stephen King"
                p={{base: '7%', md: '5%'}}
                w={{base: '100%', md: '100%', lg: '50%'}}
                h={{base: '100%', md: '100%', lg: '50%'}} />
            </SwiperSlide>
            <SwiperSlide
            display="flex"
            direction='row'
            justify='center'
            align='center'>
                <Image 
                src="https://a-static.mlcdn.com.br/1500x1500/box-livros-j-k-rowling-edicao-especial-harry-potter-exclusivo/magazineluiza/227140500/b15ac2d343b723d9ad49802d7088cd86.jpg" 
                alt="Box Harry Potter"
                p={{base: '7%', md: '5%'}}
                w={{base: '100%', md: '100%', lg: '50%'}}
                h={{base: '100%', md: '100%', lg: '50%'}} />    
            </SwiperSlide>
            <SwiperSlide
            display="flex"
            direction='row'
            justify='center'
            align='center'>
                <Image 
                src="https://images-submarino.b2w.io/produtos/01/00/item/111118/4/111118491_1GG.jpg" 
                alt="Box"
                p={{base: '7%', md: '5%'}}
                w={{base: '100%', md: '100%', lg: '50%'}}
                h={{base: '100%', md: '100%', lg: '50%'}} />
            </SwiperSlide>
            <SwiperSlide
            display="flex"
            direction='row'
            justify='center'
            align='center'>
                <Image 
                src="https://images-submarino.b2w.io/produtos/132498744/imagens/livro-box-sherlock-holmes/132498744_1_xlarge.jpg" 
                alt="Box"
                p={{base: '7%', md: '5%'}}
                w={{base: '100%', md: '100%', lg: '50%'}}
                h={{base: '100%', md: '100%', lg: '50%'}} />
            </SwiperSlide>
            <SwiperSlide
            display="flex"
            direction='row'
            justify='center'
            align='center'>
                <Image 
                src="https://images-submarino.b2w.io/produtos/4734197172/imagens/kit-livros-sapiens-homo-deus-21-licoes-para-seculo-21/4734197172_1_xlarge.jpg" 
                alt="Box"
                p={{base: '7%', md: '5%'}}
                w={{base: '100%', md: '100%', lg: '50%'}}
                h={{base: '100%', md: '100%', lg: '50%'}} />
                </SwiperSlide>
            <SwiperSlide
            display="flex"
            direction='row'
            justify='center'
            align='center'>
                <Image 
                src="https://images-submarino.b2w.io/produtos/4913491932/imagens/livro-caixa-todos-de-clarice-lispector-3-livros-em-capa-dura/4913491932_1_xlarge.jpg" 
                alt="Box"
                p={{base: '7%', md: '5%'}}
                w={{base: '100%', md: '100%', lg: '50%'}}
                h={{base: '100%', md: '100%', lg: '50%'}} />
            </SwiperSlide>
            <SwiperSlide
            display="flex"
            direction='row'
            justify='center'
            align='center'>
                <Image 
                src="https://images-submarino.b2w.io/produtos/4764340419/imagens/cuentos-y-poemas-completos-edgar-allan-poe-3-tomos/4764340419_1_xlarge.jpg" 
                alt="Box"
                p={{base: '7%', md: '5%'}}
                w={{base: '100%', md: '100%', lg: '50%'}}
                h={{base: '100%', md: '100%', lg: '50%'}} />
            </SwiperSlide>
            <SwiperSlide
            display="flex"
            direction='row'
            justify='center'
            align='center'>
                <Image 
                src="https://images-submarino.b2w.io/produtos/132240364/imagens/livro-colecao-agatha-christie-box-1/132240364_1_xlarge.jpg" 
                alt="Box"
                p={{base: '7%', md: '5%'}}
                w={{base: '100%', md: '100%', lg: '50%'}}
                h={{base: '100%', md: '100%', lg: '50%'}} />
            </SwiperSlide>
        </Swiper>

        </Flex>
    )
}

export default carouselComponent;