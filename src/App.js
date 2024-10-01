import { 
  Header,
  ReadMore,
  ListOfImages ,
  CommentAndLike,
  TagsAndSocialMedia,
  DescriptionAndList,
  ImageAndDescription
} from "./components";

import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className="containerText">
        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>

        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</p>
      </div>

      <div className="containerQuotation">
        <span>“</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua dollor sit amet aint.</p>

        <span>”</span>
      </div>

      <DescriptionAndList />

      <ImageAndDescription />

      <div className="TitleAndDescription">
        <h2>Aint oupt sain crays</h2>

        <p>Lorem Ipsum é simplesmente uma <a href="/">simulação de link</a> da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos. Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.</p>
      </div> 

       <ListOfImages/>

       <div className="TitleAndDescription">
        <h2>Ipsum dollor amet</h2>

        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.</p>
      </div> 

      <CommentAndLike/>

      <TagsAndSocialMedia/>

      <ReadMore/>
    </div>
  );
}
