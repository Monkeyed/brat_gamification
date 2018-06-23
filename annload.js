
var lSLength;
var j;

//totList is global total list of annotations, filled in scanner function
var totList = [];

//global function array filled, copied to outerSessList, and =empty in loop
var sessList = [];

//outerSessList is the outside-scanner-function annotation list FROM THE LATEST SESSION
var outerSessList = [];
var sessPages;
//var totPages;

var prevUniqueAnns;
var uniqueAnns;
var newAnns;
var countList = [];
var maxLength = 0;
var prevCountList = [];

//global levels for achievements, so that they aren't reset each time we scan
 var workerPrevLevel = 0;
 var workerLevel = 0;
 var identifierPrevLevel = 0;
 var identifierLevel = 0;
 var marathonPrevLevel = 0;
 var marathonLevel = 0;
 //globals for achievements
 var workerCircle;
 var identifierCircle;
 var marathonCircle;
 var streakCircle = 0;

 var wNumbersDone;
 var iNumbersDone;
 var mNumbersDone;
//-----------------------------------------------------------------------------------------------------

//failsafe for first button
function failSafe(){
    setTimeout(function() {
        var element = document.getElementById("scannerButton");
        element.classList.remove("hideButton");
    },3000);

}

//scans all .ann pages, makes an array of all annotations so far & fills OuterSessList with them
function scanner() {

    locColorCountList = countList;
    locColorCountListLength = locColorCountList.length;
    for(i = 0; i < locColorCountListLength; i++){
        countList[i].color = "gray";
    }
//counter for pages
    j = 1;
    lSLength = totList.length;
    totList = [];
    var pageCount = 0;
// create totList with all entries so far
    for (j; j <= 9; j++) {
        d3.text("brat/data/2017-05-02_jop_konrad_testset/productname/pn00" + j + ".ann", function (text) {
            var obj = d3.tsvParseRows(text);
            var annArr = [];
            k = obj.length;
            for (i = 0; i < k; i++) {
                //2 functions: pushes from object into the new array annArr, and puts everything lowercase
                annArr.push(obj[i][2].toLowerCase());
            }
            setTimeout(function () {
                p = annArr.length;
                if (p > 1) {
                    pageCount++;
                }

                //create name name for each element
                annArr = annArr.map(function (elem) {
                    return {"name": elem};
                });

                //add color property with value green, which is 'discovered in this session'
                annArr.forEach(function (obj) {
                    var locPageCount = pageCount;
                    obj.color = "newGreen";
                    obj.count = 1;
                    obj.PageNr = locPageCount;
                });
                m = annArr.length;
                for (var i = 0; i < m; i++) {
                    totList.push(annArr[i]);
                }
            }, 10);

        });
    }

    if(j > 9){
            for (j; j < 26; j++) {
                d3.text("brat/data/2017-05-02_jop_konrad_testset/productname/pn0" + j + ".ann", function (text) {
                    var obj = d3.tsvParseRows(text);
                    //document.getElementById("sPages").innerHTML = obj;
                    var annArr = [];
                    k = obj.length;
                    for (i = 0; i < k; i++) {
                        //2 functions: pushes from object into the new array annArr, and puts everything lowercase
                        annArr.push(obj[i][2].toLowerCase());
                    }
                    setTimeout(function () {
                        //create name name for each element
                        annArr = annArr.map(function (elem) {
                            return {"name": elem};
                        });
                            pageCount++;
                            //add color property with value green, which is 'discovered in this session'
                            annArr.forEach(function (obj) {
                                obj.color = "newGreen";
                                obj.count = 1;
                                obj.PageNr = pageCount;
                            });
                            m = annArr.length;
                        for (i = 0; i < m; i++) {
                            totList.push(annArr[i]);
                        }
                    },10);


                });
            }

    }

    //the following was originally the checkStuff function -
    // now all in scanner, creates outerSessList and Sesslist
    console.log("this is totList", totList);
    setTimeout(function(){
        for(i = lSLength; i < totList.length; i++){
        sessList.push(totList[i]);
    }
        outerSessList = sessList;
        console.log(sessList);
        sessList = [];
    },1000);

    /*
    setTimeout(function() {
        var element = document.getElementById("uniqueButton");
        element.classList.remove("hideButton");
    },2000);
    */
}

//spits out an array countList, that has the count on each entry;
function unique() {
    prevUniqueAnns = countList.length;
    console.log("prevUniqueAnns is", prevUniqueAnns);

    var funTotList = totList;

    //quickly copy countList to prevCountlist for later comparison
    prevCountList = countList;
    console.log("prevCountList", prevCountList);
    countList = [];
    tListLength = totList.length;
    sListLength = sessList.length;
    console.log("unique is running...");

    console.log("should be gray", countList);

    //checking and adding function
    //for whole array of totlist, go through each item
    setTimeout(function() {
        for (i = 0; i < tListLength; i++) {
            //pick out the item that we are checking for
            item = funTotList[i];
            if (countList.length === 0) {
                countList.push(item);
            }
            //go through whole existing countList, checking each entry if it is the same
            for (b = 0; b < countList.length; b++) {
                if (item.name === countList[b].name) {
                    countList[b].count++;
                    break;
                }
                else if (b === countList.length - 1) {
                    countList.push(item);
                    break;
                }
                else {
                }
            }
        }
    },10);

    console.log("unique, countList is complete, now running colorCorrection...")

    //now the color comparison function; if there is anything in the previous count list, we take all items in the list
    //and compare them against all items in the current count list; if they are in the list and the count is the same,
    //change to gray, if count is different, change to oldGreen. Otherwise all new entries will have the newGreen color.
    if(prevCountList.length > 0) {
        setTimeout(function () {
            for (i = 0; i < prevCountList.length; i++) {
                item = prevCountList[i];
                for (b = 0; b < countList.length; b++) {
                    if (item.name === countList[b].name) {
                        if(item.count === countList[b].count){
                            countList[b].color = "gray";
                        }
                        else{
                            countList[b].color = "oldGreen";
                        }
                    }
                }

            }
        },10)
    }

    setTimeout(function() {
        console.log("unique is done");
        uniqueAnns = countList.length;
        console.log("this is the uniqueAnns count", uniqueAnns);
    },1000);

    /*
    setTimeout(function() {
        var element = document.getElementById("cir");
        element.classList.remove("hideButton");
    },2000);
    */
}

//updates html elements in total and session info, all except for new annotations and unique entries (right now)
function logStats(){
    //annotations made in the session
    var oSLength = outerSessList.length;
    var tListLength = totList.length;

    //maxLength is the longest annotation session, set it to the session length if it is smaller than that
    if(oSLength > maxLength){
        maxLength = oSLength;
        console.log("the longest session length is now", maxLength);
    }
    
    document.getElementById('sessAnns').innerHTML = oSLength;

    /*
    //pages done
    console.log("this is the highest/last PageNr from the last session", outerSessList[oSLength-1].PageNr);
    if(oSLength === tListLength){
        sessPages = outerSessList[oSLength-1].PageNr;
    }
    else {
        sessPages = outerSessList[oSLength-1].PageNr - (outerSessList[0].PageNr-1)
    }
    document.getElementById('sessPages').innerHTML = sessPages;
    console.log(sessPages);
    */



    //old annotation count
    totPrevAnns = tListLength-oSLength;
    document.getElementById('oldAnns').innerHTML = totPrevAnns;
    //new Annotation count
    totAnns = totList.length;
    document.getElementById('newAnns').innerHTML = totAnns;

    //count unique entries, id oldUnique newUnique
    document.getElementById('oldUnique').innerHTML = prevUniqueAnns;
    document.getElementById('newUnique').innerHTML = uniqueAnns;

    //set session new annotation to uniqueAnns - prevUniqueAnns, id sessNews
    newAnns = uniqueAnns - prevUniqueAnns;
    document.getElementById('sessNews').innerHTML = newAnns;


    //TOTAL
    // new percentage calculation based on annotations
    // let's say 50 pages, each with 20 annotations, makes 1000 notations for 100%, 10 annotations are 1%

    //progress bar stuff; same as pages + total completion, plugging values in to bootstrap progress bar
    //if else is bug fix for first percent, page; if 1, then put to 0. is same with following if else statements below

    /* Previous calculation
    var bar1 = totList[tListLength-(oSLength-1)].PageNr + "%";
    var bar2 = totList[oSLength-1].PageNr + "%";
    var bar3 = 100- (totList[tListLength-(oSLength-1)].PageNr+totList[oSLength-1].PageNr) + "%";
    */

    var bar1 = (totPrevAnns/10) + "%";
    var bar2 = ((totAnns-totPrevAnns)/10) + "%";
    var bar3 = (100- (totPrevAnns/10)) + "%";



    if(bar1 === 1 + "%"){
        document.getElementById('pBar1').style.width =  bar1-1;
    }
    else {
        document.getElementById('pBar1').style.width = bar1;
    }
    document.getElementById('pBar2').style.width = bar2 ;
    document.getElementById('pBar3').style.width = bar3;

    //total progress calculator; just highest page/100, as there are currently 100 pages in the data set
    //id oldPercent and newPercent
    /* old percent calculation
    if(bar1 === 1 + "%"){
        document.getElementById('oldPercent').innerHTML = totList[tListLength - (oSLength - 1)].PageNr-1;
    }
    else{
        document.getElementById('oldPercent').innerHTML = totList[tListLength - (oSLength - 1)].PageNr;
    }

    document.getElementById('newPercent').innerHTML = outerSessList[oSLength-1].PageNr;
    */
    document.getElementById('oldPercent').innerHTML = bar1;
    document.getElementById('newPercent').innerHTML = ((totAnns)/10) + "%";


    /*
    //pages count, id oldPages and newPages
    if(bar1 === 1 + "%") {
        document.getElementById('oldPages').innerHTML = totList[tListLength - (oSLength - 1)].PageNr-1;
    }
    else{
        document.getElementById('oldPages').innerHTML = totList[tListLength - (oSLength - 1)].PageNr;
    }
    document.getElementById('newPages').innerHTML = outerSessList[oSLength-1].PageNr;
    */

    streakCircle = 1/7;
    //document.getElementById('showRawData').innerHTML = countList;
}

//function to set totList color values for bubble graph, not working atm

function colorUpdate(){
    locPrevList = prevCountList;
    locPrevLength = locPrevList.length;
    locCountList = countList;
    locCountLength = locCountList.length;
    setTimeout(function(){
    if(locPrevList.length > 0) {
        for(i = 0; i < locCountLength; i++){
            item = locCountList[i];
            for(j = 0; j < locPrevLength; j++){
                if(item.name === locPrevList[j].name) {
                    if(item.count === locPrevList[j].count){
                        countList[j].color = "gray";
                    }else{
                        countList[j].color = "oldGreen";
                    }
                }else{
                    countList[j].color = "newGreen";
                }

            }
        }
    }else{}},100);

}

function achievements(){
    workerAch();
    identifierAch();
    marathonAch();
    fillCircles();
}

function workerAch(){
    // 1.) import total amount of annotations
   var totLength = totList.length;
    // 2.) determine what level we are at and set var wNumbersNeeded to amount needed for next level; will be pushed
    //     into id workerNumbersNeeded
    if(totLength > 9){
        workerLevel = 1;
       var wNumbersNeeded = 50;
       wNumbersDone = 10;
    }
    if(totLength > 49){
       workerLevel = 2;
       wNumbersNeeded = 100;
        wNumbersDone = 50;
    }
    if(totLength > 99){
       workerLevel = 3;
       wNumbersNeeded = 200;
       wNumbersDone = 100;
    }
    if(totLength > 199){
       workerLevel = 4;
       wNumbersNeeded = 500;
        wNumbersDone = 200;
    }
    if(totLength > 499){
       workerLevel = 5;
       wNumbersNeeded = 1000;
       wNumbersDone = 500;
    }
    // 3.) set values on page accordingly
    document.getElementById('workerLevel').innerHTML = workerLevel;
    document.getElementById('workerNumbersNow').innerHTML = totLength;
    document.getElementById('workerNumbersNeeded').innerHTML = wNumbersNeeded;
    document.getElementById('workerNextLevel').innerHTML = workerLevel+1;

    if(workerPrevLevel !== workerLevel){
        //announcement in session window
        console.log("you have leveled up worker!");
        document.getElementById('achNotWorkerLevel').innerHTML = workerLevel;
        document.getElementById('achNotWorkerAmount').innerHTML = wNumbersDone;
        setTimeout(function(){
        document.getElementById('workerNot').style.visibility = "visible";},10);
        console.log("workerlevel is now", workerLevel);
    }
    else{
        document.getElementById('workerNot').style.visibility = "hidden";
        console.log("workerlevel is now", workerLevel);
    }

    workerPrevLevel = workerLevel;
    workerCircle = totLength/wNumbersNeeded;
}

function identifierAch(){
    // 1.) import total amount of annotations
    var uniLength = uniqueAnns;
    // 2.) determine what level we are at and set var wNumbersNeeded to amount needed for next level; will be pushed
    //     into id workerNumbersNeeded
    if(uniLength > 9){
        identifierLevel = 1;
        var iNumbersNeeded = 50;
        iNumbersDone = 10;
    }
    if(uniLength > 49){
        identifierLevel = 2;
        iNumbersNeeded = 100;
        iNumbersDone = 50;
    }
    if(uniLength > 99){
        identifierLevel = 3;
        iNumbersNeeded = 200;
        iNumbersDone = 100;
    }
    if(uniLength > 199){
        identifierLevel = 4;
        iNumbersNeeded = 500;
        iNumbersDone = 200;
    }
    if(uniLength > 499){
        identifierLevel = 5;
        iNumbersNeeded = 1000;
        iNumbersDone = 500;
    }
    // 3.) set values on page accordingly
    document.getElementById('identifierLevel').innerHTML = identifierLevel;
    document.getElementById('identifierNumbersNow').innerHTML = uniLength;
    document.getElementById('identifierNumbersNeeded').innerHTML = iNumbersNeeded;
    document.getElementById('identifierNextLevel').innerHTML = identifierLevel+1;

    if(identifierPrevLevel !== identifierLevel){
        //announcement in session window
        console.log("you have leveled up identifier!");
        document.getElementById('achNotIdentifierLevel').innerHTML = identifierLevel;
        document.getElementById('achNotIdentifierAmount').innerHTML = iNumbersDone;
        setTimeout(function(){
        document.getElementById('identifierNot').style.visibility = "visible";},2000);
        console.log("identifierLevel is now", identifierLevel);
    }
    else{
        document.getElementById('identifierNot').style.visibility = "hidden";
        console.log("identifierLevel is now", identifierLevel);
    }
    identifierPrevLevel = identifierLevel;
    identifierCircle = uniLength/iNumbersNeeded;
}

function marathonAch(){
    // 1.) import total amount of annotations
    //var maxLength = uniqueAnns;
    // 2.) determine what level we are at and set var wNumbersNeeded to amount needed for next level; will be pushed
    //     into id workerNumbersNeeded
    if(maxLength > 9){
        marathonLevel = 1;
        var mNumbersNeeded = 50;
        mNumbersDone = 10;
    }
    if(maxLength > 49){
        marathonLevel = 2;
        mNumbersNeeded = 100;
        mNumbersDone = 50;
    }
    if(maxLength > 99){
        marathonLevel = 3;
        mNumbersNeeded = 200;
        mNumbersDone = 100;
    }
    if(maxLength > 199){
        marathonLevel = 4;
        mNumbersNeeded = 500;
        mNumbersDone = 200;
    }
    if(maxLength > 499){
        marathonLevel = 5;
        mNumbersNeeded = 1000;
        mNumbersDone = 200;
    }
    // 3.) set values on page accordingly
    document.getElementById('marathonLevel').innerHTML = marathonLevel;
    document.getElementById('marathonNumbersNow').innerHTML = maxLength;
    document.getElementById('marathonNumbersNeeded').innerHTML = mNumbersNeeded;
    document.getElementById('marathonNextLevel').innerHTML = marathonLevel+1;

    if(marathonPrevLevel !== marathonLevel){
        //announcement in session window
        console.log("you have leveled up marathon!");
        document.getElementById('achNotMarathonLevel').innerHTML = marathonLevel;
        document.getElementById('achNotMarathonAmount').innerHTML = mNumbersDone;
        setTimeout(function(){
        document.getElementById('marathonNot').style.visibility = "visible";},3000);
        console.log("marathonLevel is now", marathonLevel);
    }
    else{
        document.getElementById('marathonNot').style.visibility = "hidden";
        console.log("marathonLevel is now", marathonLevel);
    }

    marathonPrevLevel = marathonLevel;
    marathonCircle = maxLength/mNumbersNeeded;
}

function insertCountList(){
    locCounList = [];
    setTimeout(function(){
    locCountList = countList;
    var $table = $( "<table></table>" );

    for ( var i = 0; i < locCountList.length; i++ ) {
        var ann = locCountList[i];
        var $line = $( "<tr></tr>" );
        $line.append( $( "<td></td>" ).html( ann.name ) );
        $line.append( $( "<td></td>" ).html( ann.count ) );
        $table.append( $line );
    }

    $table.appendTo( $("#showCountList"));
},500);}

function buttonReset(){
    var element = document.getElementById("scannerButton");
    element.classList.add("hideButton");
    element = document.getElementById("uniqueButton");
    element.classList.add("hideButton");
    element = document.getElementById("cir");
    element.classList.add("hideButton");
    setTimeout(function(){
        element = document.getElementById("scannerButton");
        element.classList.remove("hideButton");
    },1000);
}

function countListToGray(){
}

function runAllFunctions(){
    scanner();
    setTimeout(function(){
        unique();
    },1000);
    setTimeout(function(){
        logStats();
        achievements();
        showBubs();
        countListToGray();
    },2500);

}

function runAllBareBoneFunctions(){

    scanner();

    setTimeout(function(){
        unique();
    },1500);

    setTimeout(function(){
        logStats();
        countListToGray();
    },3000);
    setTimeout(function(){
        insertCountList();
    },4500);

}