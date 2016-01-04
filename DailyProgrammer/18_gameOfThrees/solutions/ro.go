package main

import "fmt"

func main() {
  gameOfThrees(100)
  gameOfThrees(31337357)
}

func gameOfThrees(num int)  {
  if num == 1 {
    fmt.Println(num)
  } else if num % 3 == 0 {
    result := num/3
    fmt.Println(num, 0)
    gameOfThrees(result)
  } else if num % 3 == 1 {
    result := (num - 1) / 3
    fmt.Println(num, "-1")
    gameOfThrees(result)
  } else {
    result := (num + 1) / 3
    fmt.Println(num, "+1")
    gameOfThrees(result)
  }
}
