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



  for(i = 0; i < array.length; i = i + 1){
    if('INCIDENT_ADDRESS' in array[i]){
      var accident = array[i].INCIDENT_ADDRESS;
      streets.push(accident);

      var grant = accident.indexOf('GRANT');
      var colfax = accident.indexOf('COLFAX')
      var logan = accident.indexOf("LOGAN");

      var colfaxCrash = [];
      var grantCrash = [];
      var loganCrash = [];

      var colfaxCounter = 0;

      if(colfax != -1){
        colfaxCounter = colfaxCounter + 1;
        colfaxCrash.push(accident);
        console.log('this is colfax!!')
      }if(grant != -1){
        grantCrash.push(accident)
        console.log('this is GRANT')
      } if(logan != -1){
        console.log('LOGAN STREET')
      } else {
        console.log('some other street')
      }
    }
  }
console.log(colfaxCounter, colfaxCrash.length, grantCrash.length)

  // array.forEach(function(item, index, array){
  //   if('GRANT' in ){
  //     console.log('woa')
  //   }
  //   var position = item;
  //   // console.log(position)
  // })
  // console.log(streets)

}




//
// var str = "Hello World";// For example, lets search this string,
// var term = "World";// for the term "World",
// var index = str.indexOf(term);// and get its index.
// if(index != -1){// If the index is not -1 then the term was matched in the string,
// alert(index);// and we can do some work based on that logic. (6 is alerted)
// }

//
// iterateOverData(caphill, cardata);
// iterateOverData(centralbiz, cbd);
street(cardata);
