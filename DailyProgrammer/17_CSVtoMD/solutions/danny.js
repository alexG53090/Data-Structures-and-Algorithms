'use strict'
const csv2md = (csv) =>
`${header(csv, getPadding(csv))}
${separator(getPadding(csv))}
${data(csv, getPadding(csv))}`

const getPadding = (csv) => unzip.apply(null, csv2js(csv)).map(c=>c.reduce((max, field) => max < field.length ? field.length : max, 0))

const csv2js = (txt) =>
  txt.split('\n').map(v=>v.split(','))

function unzip () {
  const args = Array.prototype.slice.call(arguments);
  const result = []
  while (args[0].length) {
    result.push(args.reduce((newRow, row) => {
      newRow.push(row.shift())
      return newRow
    }, []))
  }
  return result
}

const header = (csv, paddings) =>
  `${rows(csv, paddings).slice(0,1).join('\n')}`

const separator = (paddings) =>
  paddings.map(p=>pad('',p,'-')).join(' | ')

const data = (csv, paddings) =>
  `${rows(csv, paddings).slice(1).join('\n')}`

const rows = (csv, paddings) => {
  return csv2js(csv).map(r=>row(r, paddings).join(' | '))
}

const row = (row, paddings) => {
  return row.map((field, i)=>pad(field, paddings[i]))
}

const pad = (str, padding, char) => str+Array(padding-str.length+1).join(char || ' ')

let input, output
input = `First,Last,Address
Annamarie,Romaguera,9446 Schroeder Squares
Sebastian,Hessel,114 Frederic Centers
Marlon,Hahn,307 Bradtke Grove
Duane,Schowalter,10771 Keaton Knoll
Laurence,Schuster,610 Odell Point`
output = csv2md(input)
console.log(output)
