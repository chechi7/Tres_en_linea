import { Square } from "./Square"

export function WinnerModal ({winner, reset}) {
    if (winner === null) return null 

    const winnerText = winner === false ? 'Empate' : 'Gáno:'

    return (
        <section className="winner">
          <div className="text">
            <h2>
             {winnerText}
            </h2>

            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={reset}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
    )

}