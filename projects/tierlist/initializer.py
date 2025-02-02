with open('out.txt','r') as file:
    for line in file:
        data = line.split("|")
        outputline = 'map.set("' + data[0] + '",["' + data[0] + '","' + data[1] + '","' + data[2] + '","' + data[3] + '","' + data[4] + '","' + data[5] + '","' + data[6].strip() + '"])'
        print(outputline)
print("for (const [key] of map) populate(key);")