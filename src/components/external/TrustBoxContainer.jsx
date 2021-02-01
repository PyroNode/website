import React, { Component } from "react";
const TrustBox = ({ trustBoxRef }) => (
  <div
    ref={trustBoxRef} // Necesitamos una referencia a este elemento para cargar el TrustBox en componentDidMount.
    className="trustpilot-widget"
    data-locale="es-ES"
    data-template-id="5419b6a8b0d04a076446a9ad"
    data-businessunit-id="5f71f9382de6e50001dc9f44"
    data-style-height="24px"
    data-style-width="100%"
    data-theme="light"
    // renombra 'class' a 'className'.
    // [ larga lista de atributos...]
  >
    <a
      href="https://es.trustpilot.com/review/pyronode.com"
      target="_blank"
      rel="noopener"
    >
      Trustpilot
    </a>
  </div>
);
class TrustBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.trustBoxRef = React.createRef();
  }
  componentDidMount() {
    // Si aparece la ventana 'Trustpilot is available', utiliza la referencia para cargar el TrustBox.
    // Si no, significa que el código introducido en <head /> aún no se ha cargado.
    // Cuando esté listo, el TrustBox se cargará automáticamente.
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(this.trustBoxRef.current, true);
    }
  }
  render() {
    return <TrustBox trustBoxRef={this.trustBoxRef} />;
  }
}
export default TrustBoxContainer;
