selected = false;
selectedElementID = "none";
mname = "Name";
mpkmntype = "Pkmntype";
mpower = "Power";
maccuracy = "Accuracy";
mpp = "PP";
mdescription = "Description";

function selectToggle(element)
{
    if(selected) selectedElementID = "none";
    else selectedElementID = element.id;
    selected = !(selected);
    element.classList.toggle("selected");
}

function moveToTier(tier)
{
    if(selected){
        child = document.getElementById(selectedElementID);
        parent = child.parentNode;
        if(tier.id != parent.id)
        {
            tier.appendChild(child);
            selectToggle(child);
            tierLetter = ((tier.id)[0]).toUpperCase();
            moveData = map.get(child.id);
            moveData[6] = tierLetter;
            map.set(child.id, moveData);
        }
    }
}

function clearTypeColor(element)
{
    element.classList.remove('bug'); 
    element.classList.remove('dark');
    element.classList.remove('dragon');
    element.classList.remove('electric');
    element.classList.remove('fighting');
    element.classList.remove('fire');
    element.classList.remove('flying');
    element.classList.remove('ghost');
    element.classList.remove('grass');
    element.classList.remove('ground');
    element.classList.remove('ice');
    element.classList.remove('normal');
    element.classList.remove('poison'); 
    element.classList.remove('psychic'); 
    element.classList.remove('rock'); 
    element.classList.remove('steel'); 
    element.classList.remove('water');  
    element.classList.remove('typed');
}

function updateInfobox()
{
    let name = document.getElementById("name");
    name.textContent = mname;
    let pkmntype = document.getElementById("pkmntype");
    pkmntype.textContent = mpkmntype;
    clearTypeColor(pkmntype);
    pkmntype.classList.add(mpkmntype.toLowerCase());
    pkmntype.classList.add("typed");
    let power = document.getElementById("power");
    power.textContent = mpower;
    let accuracy = document.getElementById("accuracy");
    accuracy.textContent = maccuracy;
    let pp = document.getElementById("pp");
    pp.textContent = mpp;
    let description = document.getElementById("description");
    description.textContent = mdescription;
}

function setInfobox(element)
{
    entries = access(element.id);
    mname = entries[0];
    mpkmntype = entries[1];
    mpower = entries[2];
    maccuracy = entries[3];
    mpp = entries[4];
    mdescription = entries[5];
    updateInfobox();
}

function clearInfobox()
{
    mname = "Name";
    mpkmntype = "Pkmntype";
    mpower = "Power";
    maccuracy = "Accuracy";
    mpp = "PP";
    mdescription = "Description";
    updateInfobox();
}

function populate(name)
{
    const thingydiv = document.createElement("div");
    thingydiv.textContent = name;
    thingydiv.id = name;
    thingydiv.classList.add("move");
    thingydiv.classList.add("typed");
    thingydiv.classList.add(map.get(name)[1].toLowerCase());
    thingydiv.onclick = function () {selectToggle(thingydiv);};
    thingydiv.onmouseover = function () {setInfobox(thingydiv);};
    thingydiv.onmouseout = function () {clearInfobox();};
    obox = document.getElementById("obox");
    obox.appendChild(thingydiv);
}

// https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
function outputCSV()
{
    rows = [];

    for (const [key] of map) rows.push(map.get(key));
    
    let csvContent = "data:text/csv;charset=utf-8," 
        + rows.map(e => e.join("|")).join("\n");
    
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "moves.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".

}