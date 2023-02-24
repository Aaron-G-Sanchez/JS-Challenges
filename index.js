// #1 Takes an array that has duplicates and only pushes the number ONCE

const arr = [1, 3, 3, 4, 6, 7, 7]

const loop = () => {
  let noDupes = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      noDupes.push(arr[i])
    }
  }

  console.log(noDupes)
}

loop()
