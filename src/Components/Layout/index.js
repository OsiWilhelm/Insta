export default class App extends Component {
    state = {
      data: data 
    }
      
    renderItem = ({item}) => {
     return (<View>
       <Image source={{uri: item.avatar}} style={styles.itemImage} />
     </View>)
    }
    
    render() {
      return (
        <View style={styles.container}>
          <FlatList  
            keyExtractor={(_, index) => index} 
            numColumns={numberGrid} data={this.state.data} 
            renderItem={this.renderItem} />
        </View>
      );
    }
  }