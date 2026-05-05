import React, { useState } from 'react'

function App() {
  let [square, setsquare] = useState(Array(9).fill(null))
  let [xturn, setxturn] = useState(false)
  let [winner, setwinner] = useState(null)
  // console.log(square);
  let inphandler = (v, k) => {
    // console.log(v, k);
    if (square[k] || winner) return

    let newarr = square;
    newarr[k] = xturn ? "x" : "o"
    setsquare(newarr)
    setxturn(!xturn)
    setwinner(iswinner())
  }
  function iswinner() {
    let winnercriteria = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]]
    for (let [a, b, c] of winnercriteria) {
      console.log(a, b, c, square[a], square[b], square[c], square[a] && square[a] == square[b] && square[a] == square[c]);

      if (square[a] && square[a] == square[b] && square[a] == square[c]) {
        // return square[a]

        return {
          winner: square[a],
          line: [a, b, c]
        }
      }
    }
    return null
  }

  return (
    <>
      <h1>{winner ? <>winner {winner.winner}</> : <>{xturn ? "turn x" : "turn o"}</>}</h1>
      <div className='console'>
        {
          square.map(function (v, k) {
            return <button key={k} className={(winner) ? "winner" : "notwinner"} onClick={() => inphandler(v, k)}>{v}</button>
          })
        }
      </div>
    </>
  )
}

export default App
