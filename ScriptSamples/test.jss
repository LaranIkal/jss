
load('config.jss')
load('lib/Utils.jss')

var date = Date()
var procSequences;

print(date)

print("Parameters length:" + parameters.length + "\n" )

if( parameters.length > 1 ) { // Get variables values if they exists
  try {
    // ./jss.ksh test.jss migId=5 procSequences=200, 300
    function myFunction(myVar, index, arr) {
      if(myVar.substr(0, 5) === "migId") migId = arr[index].split("=")[1]
      if(myVar.substr(0, 8) === "targetDb") targetDb = arr[index].split("=")[1]
      if(myVar.substr(0, 13) === "procSequences") {
        procSequences = arr[index].split("=")[1].split(",")
      }
    }
    parameters.forEach(myFunction)    
  } finally { 
    if(typeof migId != "undefined") print("migId=" + migId + "\n")
    print("procSequences:" + procSequences + "\n")
    if (typeof procSequences === "undefined") {
      procSequences = [99]
    }    
  }

  
 print("procSequences:" + procSequences + "\n")
  print("procSequences:\n")
  for (let i = 0; i < procSequences.length; i++) {
      print("i=" + i + "\n")
      print(procSequences[i] + "\n"); // printing the value of i
  }    

}
  
// List modules table
var conn = getConnection("sqlite");
var modulesListQuery = "SELECT title, active FROM eplsite_modules"

try {
  var stmt = conn.prepareStatement(modulesListQuery)
  var resultSet = stmt.executeQuery()

  while (resultSet.next()) {
    print( "- Title = " + resultSet.getString(1) + " - Is Active: " + resultSet.getString(2) + "\n" )
  }

} finally {
    if (resultSet) try { resultSet.close(); } catch(e) {}
    if (stmt) try { stmt.close();} catch (e) { print( e ); }
    if (conn) try { conn.close(); } catch (e) { print( e ); }          
}



