import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor1,setValor1]= useState("20");
  const [valor2,setValor2]= useState("20");
  const [resultado,setResultado]= useState();
	
	function soma(){
  		let r = parseFloat(valor1) + parseFloat(valor2);
		setResultado(r);
	}
	
	
	//Form f = new from(); instancia
  return (
<View  style={styles.containerprinc}>
    <View style={styles.container}>
      <Text style={styles.textotitulo}>Aula de Mobile</Text>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>Calculadora Simples</Text>
		  </View>
		  <View style={styles.bloco}>
			  <Text>Valor 1: </Text>
			  <TextInput 
				  style={styles.input}
				  value={valor1}
				  onChangeText={(valor)=>setValor1(valor)} //Altera o valor
				  keyboardType="numeric" // Deixa o usario somente digitar numeros evitando um possivel erro
			   />
		  </View>
		  <View style={styles.bloco}>
			  <Text>Valor 2: </Text>
			<TextInput 
				style={styles.input}
				 value={valor2}
				onChangeText={(valor)=>setValor2(valor)} //Altera o valor
				keyboardType="numeric" // Deixa o usario somente digitar numeros evitando um possivel erro
				/>		  
		  </View>
		  <View style={styles.bloco2}>
		  	<TouchableOpacity 
				style={styles.botao}
				onPress={soma}
				
			>
				<Text 
					style={styles.textoBotao}>Somar
				</Text>
			</TouchableOpacity>
		  </View>
    </View>
	   <View style={styles.bloco2}>
		<Text style={styles.titulo}>
			Resultado: {resultado}
		</Text>
	   </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	 
    
  },
	containerprinc:{
		marginTop:'30%'
	},
	bloco:{
		marginTop:20,
	    width:'80%',
		marginLeft:'10%'
	},
	bloco2:{
		marginTop:20,
	    width:'80%',
		marginLeft:'10%',
		alignItems:'center'
	},
	titulo:{
		fontSize:30,
		textAlign:'center'
	},
	input:{
		borderWidth:2,
		fontSize:20,
		borderRadius:20
	},
	botao:{
		backgroundColor:'#32CD32',
		borderRadius:20,
		width:'28%'
		
	},
	textoBotao:{
		color:'#FFF',
		textAlign:'center',
		fontsize:20
	},
	textotitulo:{
		textAlign:'center',
		fontSize: 25,
		
}
});
