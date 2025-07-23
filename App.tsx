import { View, StyleSheet, Image, Text, ScrollView } from 'react-native'

export default function App() {
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>What to do in Paris</Text>

          <ScrollView
            horizontal={true}
          >
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.city}
                source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>

          <Text style={styles.title}>Best lodgments</Text>
          <View>
            <View>
              <Image
                style={styles.bests}
                source={require('./assets/img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.bests}
                source={require('./assets/img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.bests}
                source={require('./assets/img/mejores3.jpg')}
              />
            </View>
          </View>

          <Text style={styles.title}>Lodgments in LA</Text>
          <View style={styles.list}>
            <View style={styles.itemList}>
              <Image
                style={styles.bests}
                source={require('./assets/img/hospedaje1.jpg')}
              />
              <Text style={styles.text}>Option 1</Text>
            </View>
            <View style={styles.itemList}>
              <Image
                style={styles.bests}
                source={require('./assets/img/hospedaje2.jpg')}
              />
              <Text style={styles.text}>Option 2</Text>
            </View>
            <View style={styles.itemList}>
              <Image
                style={styles.bests}
                source={require('./assets/img/hospedaje3.jpg')}
              />
              <Text style={styles.text}>Option 3</Text>
            </View>
            <View style={styles.itemList}>
              <Image
                style={styles.bests}
                source={require('./assets/img/hospedaje4.jpg')}
              />
              <Text style={styles.text}>Option 4</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
    textAlign: 'center'
  },
  container: {
    marginHorizontal: 10
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  bests: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  itemList: {
    flexBasis: '49%'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})