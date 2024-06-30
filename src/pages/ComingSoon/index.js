
// Importando o componente de delimitação de tela
import { SafeAreaViewComponent } from "../../styles";

// Importando os componentes estilizados
import { 
  Body, 
  HomeContainer,
  CommingSoonText,
  HeaderContainer,
  ButtonHome,
  ButtonHomeText
} from "./styles";

// aqui é definido o componente de Home e pegando a propriedade navigation presente para poder fazer a navegação entre telas
export default function CommingSoon({ navigation }){

  return (
    <SafeAreaViewComponent>
      <HomeContainer>
        <HeaderContainer>
          <ButtonHome onPress={() => navigation.navigate('Home')}>
            <ButtonHomeText>HOME</ButtonHomeText>
          </ButtonHome>
        </HeaderContainer>
        <Body>
          <CommingSoonText>Em breve mais...</CommingSoonText>
        </Body>
      </HomeContainer>
    </SafeAreaViewComponent>
  )
}