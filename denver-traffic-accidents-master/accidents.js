//data sources
var data = require('./data');
var cardata = require('./cardata');
var cbd = require('./cbd');
// neighborhoods
var caphill = "Capotiol Hill";
var centralbiz = "Central Business District"

function iterateOverData(name, array){
  var newArray = []
  for(i = 0; i < array.length; i = i + 1){
    var crime = array[i];
    newArray.push(crime);
  }

  var counter = 0;
  var hitAndRunCounter = 0;
  var assaultCounter = 0;
  var duis = [];
  var hitAndRun = [];
  var assaults = [];
  var TOD = [];
  var totalTime = 0;

  for(j = 0; j < newArray.length; j = j + 1){
    // Find DUIs
    if(newArray[j].OFFENSE_TYPE_ID === "traffic-accident-dui-duid"){
      counter = counter + 1;
      var dui = newArray[j].OFFENSE_TYPE_ID;
      duis.push(dui);
      if(newArray[j].FIRST_OCCURRENCE_DATE){
        var time = newArray[j].FIRST_OCCURRENCE_DATE.substring(8);
        TOD.push(time);
        // for(k = 0; k < TOD.length; k = k + 1){
        //   var instant = TOD[k].split(':').join('')
        //   var instantNum = parseInt(instant);
        //   // console.log(instantNum)
        //   totalTime = totalTime + instantNum;
        // }
        // var avg = totalTime / TOD.length;
      }
    // Find hit and runs
    } if (newArray[j].OFFENSE_TYPE_ID === "traffic-accident-hit-and-run"){
      hitAndRunCounter =  hitAndRunCounter + 1;
      var run = newArray[j].OFFENSE_TYPE_ID;
      hitAndRun.push(run);
    // find vihicular assaults
    } if( newArray[j].OFFENSE_TYPE_ID === "traf-vehicular-assault"){
      assaultCounter = assaultCounter + 1;
      var assault = newArray[j].OFFENSE_TYPE_ID;
      assaults.push(assault);
    }
  }
  // console.log(avg)
  console.log("\n" + name + "\n" + "______________________________" + "\n \n" +
   "DUI: " + duis.length +   "\n" +
   "Hit and Run: " + hitAndRun.length +  "\n" +
   "Assaults: " + assaults.length + "\n" +
   "~~~~~~~~~~~~ END ~~~~~~~~~~~~~~")
};

function street(array){
  var grant = "GRANT";
  var streets = [];

  var colfaxCrash = [];
  var grantCrash = [];
  var loganCrash = [];
  var downingCrash = [];
  var otherCrashes = [];
  var washingtonCrash = [];

  var emersonCrash = [];
  var eigthCrash = [];
  var twelthCrash = [];
  var coronaCrash = [];
  var broadwayCrash = [];
  var eleventhCrash = [];
  var lincolnCrash = [];
  var clarksonCrash = [];

  for(i = 0; i < array.length; i = i + 1){
    if('INCIDENT_ADDRESS' in array[i]){
      var accident = array[i].INCIDENT_ADDRESS;
      streets.push(accident);

      var grant = accident.indexOf('GRANT');
      var colfax = accident.indexOf('COLFAX')
      var logan = accident.indexOf("LOGAN");
      var downing = accident.indexOf('DOWNING');
      var washington = accident.indexOf('WASHINGTON');
      var emerson = accident.indexOf('EMERSON');
      var eigth = accident.indexOf('8TH');
      var twelth = accident.indexOf('12TH');
      var corona = accident.indexOf('CORONA');
      var broadway = accident.indexOf('BROADWAY');
      var eleventh = accident.indexOf('11TH');
      var lincoln = accident.indexOf('LINCOLN');
      var clarkson = accident.indexOf('CLARKSON');

      if(emerson != -1){
        emersonCrash.push(accident)
      } if(eigth != -1){
        eigthCrash.push(accident)
      } if(twelth != -1){
        twelthCrash.push(accident)
      } if(corona != -1){
        coronaCrash.push(accident)
      } if(broadway != -1){
        broadwayCrash.push(accident)
      } if(eleventh != -1){
        eleventhCrash.push(accident)
      } if(lincoln != -1){
        lincolnCrash.push(accident)
      } if(clarkson != -1){
        clarksonCrash.push(accident)
      } if (washington != -1){
        washingtonCrash.push(accident);
      } if (colfax != -1){
        colfaxCrash.push(accident);
      } if (grant != -1){
        grantCrash.push(accident)
      } if (logan != -1){
        loganCrash.push(accident)
      } if (downing != -1){
        downingCrash.push(accident);
      } else {
        otherCrashes.push(accident);
      }
    }
  }

  console.log("Accidents by street" + "\n" + "_______________________" + "\n" +
    "Colfax: " + "\n" + colfaxCrash.length + "\n" +
    "Grant:" + "\n" +  grantCrash.length + "\n" +
    "Logan:" + "\n" +  loganCrash.length + "\n" +
    "washington:" + "\n" + washingtonCrash.length + "\n" +
    "Logan:" + "\n" +  loganCrash.length + "\n" +
    "Ememerson:" + "\n" +  emersonCrash.length + "\n" +
    "Eigth:" + "\n" +  eigthCrash.length + "\n" +
    "Twelth:" + "\n" +  twelthCrash.length + "\n" +
    "Corona:" + "\n" +  coronaCrash.length + "\n" +
    "Lincoln:" + "\n" +  lincolnCrash.length + "\n" +
    "Clarkson:" + "\n" +  clarksonCrash.length + "\n" +
    "Downing:" + "\n" +  downingCrash.length + "\n" +
    "Eleventh:" + "\n" +  eleventhCrash.length + "\n" +
    "Broadway:" + "\n" +  broadwayCrash.length
  )
}

// iterateOverData(caphill, cardata);
// iterateOverData(centralbiz, cbd);
street(cardata);
