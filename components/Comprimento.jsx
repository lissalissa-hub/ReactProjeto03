function Comprimento(props) {
    let logado = props.logado
    if (logado == true) {
        return <h1>Login Efetuado - Bem vindo, {props.nome}!</h1>

    }
    else {
        return console.log("Erro ao logar - Não Bem-Vindo") 
    }  
  }

export default Comprimento 
