import { Platform } from 'react-native';


// Aqui estou pegando qual o sistema operacional do celular
const SO = Platform.OS;

// importando a base do styled components, biblioteca utilizada para estilização dos componentes do app
import styled from "styled-components/native";

// utilizando o SafeAreaView, componente que delimita automaticamente o tamanho da tela, no caso do android não funciona corretamente, então existe a verificação, caso seja android um espaçamento interno de 40px é aplicado
export const SafeAreaViewComponent = styled.SafeAreaView`
  height: 100%;
  background-color: white;
  padding-top: ${SO === 'android' ? 40 : ''};
  padding-bottom: ${SO === 'android' ? 40 : ''}
`;