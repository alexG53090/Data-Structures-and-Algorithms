pairs xs = zip xs (tail xs)

sign (x, y) | x > y  = "⬇"
            | x == y = "="
            | x < y  = "⬆"

upDown input = map sign $ pairs input

main = putStrLn $ concat $ upDown [6,3,5,4,3,4,4,5]
