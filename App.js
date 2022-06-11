import { ScrollView, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TestScheduler } from 'jest';
const sql = require('mssql')



const App = () => {


  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  var count = 0;

  useEffect(() => {
    fetch('https://query.data.world/s/4g6qw3yi5fem2n6uk3aybovlnmpnkv')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
 
  return (
    

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> :
        (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.slice(0, 10).map((obj, key) => {
             
            return (
             
              <Text>{obj.breadcrumbs}</Text>
          

            )
          })}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10 }}>FlatList:</Text>
          <ScrollView
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
        </View>
        )}
    </View>









  )
}

export default App

