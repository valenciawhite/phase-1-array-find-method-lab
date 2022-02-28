const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  function superbowlWin(collection){
      for (const record of collection){
          if (record.result === "W"){
              console.log(record.year);
              return record.year;
          }
      }
  }