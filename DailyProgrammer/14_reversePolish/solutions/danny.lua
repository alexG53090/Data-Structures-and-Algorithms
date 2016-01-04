function calculateRPN (input)
    local stack = {}
    for value in string.gmatch(input,"[^\s]") do 
        if (string.find(value, "[0-9]")) then
          table.insert(stack, tonumber(value))
        elseif (value == "+") then
            local a = table.remove(stack)
            local b = table.remove(stack)
            table.insert(stack, a+b)
        elseif (value == "-") then
            local a = table.remove(stack)
            local b = table.remove(stack)
            table.insert(stack, b-a)
        elseif (value == "x") then
            local a = table.remove(stack)
            local b = table.remove(stack)
            table.insert(stack, a*b)
        elseif (value == "/") then
            local a = table.remove(stack)
            local b = table.remove(stack)
            table.insert(stack, b/a)
        end
    end
    return table.remove(stack)
end

print(calculateRPN("5 1 2 + 4 x + 3 -"))
print(calculateRPN("1 2 + 4 5 6 8 x - + +"))
