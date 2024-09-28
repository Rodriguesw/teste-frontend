import "./styles.css"

export function ImageAndDescription() {
  return (
    <div className="containerImageAndDescription">
      <img src="/images/jpg/img-handmade-paintings.jpg" alr="Mini-quadros feitos à mão" />

      <div className="containerDescription">
        <p>Mini-quadros feitos à mão</p>
        <p>Fonte: New York Times</p>
      </div>
    </div>
  )
}