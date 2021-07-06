import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const data = {
  title: "JoJo Bizarre Adventures",
  ganre: "Shounen",
  rating: 7.54,
  year: 2018,
  description: {
    main:
      "События новой части «Невероятных приключений ДжоДжо» развернутся в Италии 2001 года...",
    hidden:
      "Джорно Джованна — молодой амбициозный парень, живущий в школе-интернате и промышляющий мелким мошенничеством. Юноша, будучи сыном Дио Брандо, вобрал в себя как хладнокровие отца, так и пылкое, переполненное решимостью сердце Джостаров. Джорно решает вступить в мафиозную семью «Пассионе», как только встречает её члена — Бруно Буччеллати, чтобы пробиться в ней к вершине власти. В составе команды Буччеллати новоиспечённому гангстеру предстоит найти выход из самых неординарных ситуаций, выполняя крайне ответственное поручение лично от босса семьи. Множество опасных обладателей стендов станут препятствием на пути команды к успеху и героя к исполнению его «золотой» мечты — возглавить мафиозную группировку и ограничить её преступную деятельность."
  },
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/JoJo_Part_5_Golden_Wind.jpg/220px-JoJo_Part_5_Golden_Wind.jpg"
};

function Image(props) {
  return (
    <div>
      <img style={{ width: "300px" }} src={props.src} alt={props.alt} />
    </div>
  );
}

class Anime extends React.Component {
  constructor() {
    super();
    this.state = data;
    this.state.show = false;
    this.state.willWatch = false;
    this.state.watched = false;
    this.state.watching = false;
  }

  ratingVisualizer() {
    const star = "🌕";
    const empty = "🌑";
    const { rating } = this.state;
    const starsAmount = Math.floor(rating);
    return new Array(10)
      .fill(empty, starsAmount)
      .fill(star, 0, starsAmount)
      .join("");
  }

  willWatchHandler = () => this.setState({ willWatch: !this.state.willWatch });

  watchingHandler = () => this.setState({ watching: !this.state.watching });

  watchedHandler = () => this.setState({ watched: !this.state.watched });

  hideDescription = () => this.setState({ show: !this.state.show });

  render() {
    console.log(this.state);
    const { title, ganre, rating, year, description, image } = this.state;

    return (
      <div style={{ width: "400px", fontFamily: "sans-serif" }}>
        <h3>{title}</h3>
        <Image src={image} alt={title} />
        <div
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <button
            className={this.state.watching ? "btn--unlike" : "btn--like"}
            type="button"
            onClick={this.watchingHandler}
          >
            Watching
          </button>
          <button
            className={this.state.watched ? "btn--unlike" : "btn--like"}
            type="button"
            onClick={this.watchedHandler}
          >
            Watched
          </button>
          <button
            className={this.state.willWatch ? "btn--unlike" : "btn--like"}
            type="button"
            onClick={this.willWatchHandler}
          >
            Will watch
          </button>
        </div>
        <p>
          {this.ratingVisualizer()} {rating} / 10
        </p>
        <div>
          <p>Ganre: {ganre}</p>
          <p>Year: {year}</p>
          <p>Description: {description.main}</p>
          {this.state.show === true ? description.hidden : null}
        </div>
        <button
          className="btn--show"
          type="button"
          onClick={this.hideDescription}
        >
          {this.state.show ? "Hide" : "Show..."}
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Anime />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
