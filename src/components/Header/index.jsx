import "./styles.css"

export function Header() {
  return (
    <div className="container">
      <img src="/images/png/img-header-people.png" alt="Imagem de uma pessoa" />

      <div className="text">
        <h1>DESIGN BETTER. FASTER. TOGETHER.</h1>

        <p>The digital product design platform powering the world’s best user experiences</p>
      </div>

      <div className="containerCategoryAndDate">
        <div className="category">
          <p>Categoria:</p>
          <p>por onde começar</p>
        </div>

        <div className="informationsTimeDate">
          <img src="/images/svg/icon-header-clock.svg" alt="Icon de um relógio" />

          <p>7 min leitura</p>
        </div>

        <div className="informationsTimeDate">
          <img src="/images/svg/icon-header-calendar.svg" alt="Icon de calendário" />

          <p>01/Setembro/2024</p>
        </div>
      </div>
    </div>
  )
}