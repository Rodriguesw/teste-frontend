//Para rodar o projeto certifique-se de que você tem Node.js instalado

//Utilize o comando "npm start" no terminal para rodar o projeto

*********************************
<b>INFORMAÇÕES IMPORTANTES:<b/>

Os componentes estão organizados na pasta "components" <br/>
Todos os componentes do projeto são exportados no Index da pasta "components" para facilitar a importação nas páginas.
 
A chamada da API se encontra em "/service/api/metodo-nome". Exemplo: GetLivros

Os Mocks utilizados nos componentes se encontra em "/utils/nomeDoComponenteData". Ex: ReadMoreData

Todos os commits do projeto estão em inglês.

O projeto é hospedado na Vercel.
*********************************
Este projeto utiliza os media queries <br/>
-1024px <br/>
-769px <br/>
-469px <br/>
-420px <br/>

Padronização de estilos CSS

-Ordenado por posicionamento <br/>
-Tamanho do elemento <br/>
-Displays e margins <br/>
-Estilos de cores de fundo/borda/sombra... <br/>
-Estilos de tipografia<br/>

OBS: Ordenado do menor ao maior.

Exemplo de padrão:

.exemplo{ <br/>
top:5px; <br/>
rigth: 5px; <br/>
posicion: relative; <br/>
<br/>
width: 100%; <br/>
height: auto; <br/>
padding: 16px 8px; <br/>
<br/>
gap:8px; <br/>
margin: 8px; <br/>
display: flex; <br/>
align-itens: center; <br/>
flexdiretion: collumn; <br/>
<br/>
border-radius: 16px; <br/>
background-color: red; <br/>
border: 1 px solid black; <br/>
<br/>
color: orange: <br/>
font-size: 16px; <br/>
font-weight: 400; <br/>
line-height: 16px; <br/>
font-family: 'Roboto'; <br/>
}
