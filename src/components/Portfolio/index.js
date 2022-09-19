import './index.scss'
const portfolio = () => {
  return (
    <div className="grid-container-portfolio">
      <h1 className="title-unique">UNDER CONSTRUCTION!</h1>
      <div className="grid-item flex-container">
        <img
          className="flex-item left-image"
          src="https://picsum.photos/id/100/600/300"
          alt="random seeded"
        />
        <img
          className="flex-item right-image"
          src="https://picsum.photos/id/10/600/300"
          alt="random seeded 2"
        />
      </div>
      <div className="grid-item textzone-left">
        Lorem Ipsum er ganske enkelt fyldtekst fra print- og
        typografiindustrien. Lorem Ipsum har været standard fyldtekst siden
        1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for
        at trykke en bog til sammenligning af forskellige skrifttyper. Lorem
        Ipsum har ikke alene overlevet fem århundreder, men har også vundet
        indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev
        gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt
        afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus
        PageMaker, som også indeholdt en udgave af Lorem Ipsum.
      </div>
      <div className="grid-item textzone-right">
        Lorem Ipsum er ganske enkelt fyldtekst fra print- og
        typografiindustrien. Lorem Ipsum har været standard fyldtekst siden
        1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for
        at trykke en bog til sammenligning af forskellige skrifttyper. Lorem
        Ipsum har ikke alene overlevet fem århundreder, men har også vundet
        indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev
        gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt
        afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus
        PageMaker, som også indeholdt en udgave af Lorem Ipsum.
      </div>
      <div className="grid-item navbar-bottom">NAVBAR</div>
    </div>
  )
}

export default portfolio
