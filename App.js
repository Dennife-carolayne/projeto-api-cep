import { StyleSheet, View } from 'react-native';
import { Cabecalho } from './src/Componentes/Cabecalho';
import { Principal } from './src/Componentes/Principal';


export default function App() {
  return (
     <View style={styles.container}>
      <>
      <Cabecalho/>
      <Principal/>
      </>
     </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
