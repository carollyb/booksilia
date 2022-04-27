import {
    Image
} from "@chakra-ui/react"
import HeadingTitle from "../components/HeadingTitle/HeadingTitle";
import ContainerSection from "../components/Layouts/Container";
import BoxComponent from "../components/Layouts/Box";
import erro404 from "../assets/images/erro404.png"

function Erro() {
    return (
        <ContainerSection>
            <BoxComponent>
                <HeadingTitle>
                    Ops! Você não tem acesso a essa página
                </HeadingTitle>
                <Image
                src={erro404} />
            </BoxComponent>
        </ContainerSection>

    );
}

export default Erro;