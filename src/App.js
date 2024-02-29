import cavernasAco from "./livro/cavernas_aco.jpg";
import "./App.css";

function App() {
  return (
    <div className="container App">
      <div className="">
        <img
          src={cavernasAco}
          alt="capa livro As cavernas de aço de Isaac Asimov"
          className="bookimg"
        />
        <h2 className="textImg">Passe o maouse para ampliar a imagem</h2>
        <h2 className="textImg2">ler amostra</h2>
        <hr />
      </div>
      <div>
        <h1 className="titleBook">As cavernas de aço</h1>
        <p className="subTitleBook">por Isaac Asimov (autor)</p>
        <hr />
        <p className="textBook">
          The Caves of Steel (As Cavernas de Aço, que no Brasil foi publicado
          pela primeira vez com o título Caça aos Robôs pela Editora Hemus, na
          década de 80) é um romance de ficção científica escrito por Isaac
          Asimov e publicado originalmente em capítulos na revista Galaxy
          Science Fiction em 1953 e no ano seguinte em um livro de capa dura
          pela editora Doubleday. <br />
          <br /> As Cavernas de Aço é essencialmente uma história de detetive e
          ilustra uma ideia que Asimov pregava, de que a ficção científica pode
          ser usada por qualquer genro literário, em vez de se limitar em si
          mesma. No livro Asimov's Mysteries, ele declara que escreveu o romance
          em resposta à declaração do editor John W. Campbell, que disse que
          mistério e ficção científica eram genros incompatíveis. Campbell
          declarou que o escritor de ficção científica pode inventar "fatos" em
          seu futuro imaginário que o leitor não saberia. Asimov o contradiz,
          dizendo que existem regras implícitas na arte de escrever mistérios, e
          as pistas podem estar no enredo, mesmo se elas não forem óbvias, ou
          deliberadamente ofuscadas. Ele continuou a escrever mistérios em ambos
          os modelos de romance e contos, assim como mistérios dominantes tal
          como Murder at the ABA, que não é ficção científica. <br />
          <br /> O livro foi primeiramente publicado como uma série em Galaxy
          Science Fiction, de outubro a dezembro de 1953. Um livro de capa dura
          foi publicado por Doubleday em 1954. <br />
          <br /> Uma adaptação para à televisão, foi produzida pela BBC e foi ao
          ar em 1964: somente alguns trechos existem. Em julho de 1989, o livro
          foi adaptado por Bert Coules, como uma rádio novela para a BBC, com Ed
          Bishop no papel de Elijah Baley e Sam Dastor como R. Daneel Olivaw.
        </p>
      </div>
    </div>
  );
}

export default App;
