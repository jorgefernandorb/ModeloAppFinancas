import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import Header from '../../componentes/Header';
import Balance from '../../componentes/Balance';
import Movements from '../../componentes/Movements';
import Actions from '../../componentes/Actions';
import BarraDeStatus from '../../componentes/BarraDeStatus';
const list = [{
  id: 1,
  label: 'Conta Luz',
  value: '200,90',
  date: '03/11/2022',
  type: 0 // despesas
},
{
  id: 2,
  label: 'Alimentação',
  value: '600,90',
  date: '10/11/2022',
  type: 0 // despesas
},
{
  id: 3,
  label: 'Bolsa',
  value: '400,00',
  date: '20/11/2022',
  type: 1 // despesas
}
]
export default function Home() {
  return (
    <View style={styles.container}>
        <BarraDeStatus/>

        <Header nome="Nome do Usuário"/>

        <Balance saldo="8.750,00" gastos="-725,00"/>

        <Actions/>

        <Text style={styles.title}>Últimas Movimentações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item}) => <Movements data={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
