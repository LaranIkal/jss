
load('config.jss')
load('lib/Utils.jss')

var date = Date()

print(date)

if( parameters.length > 1 ) { // Get variables values if they exists
  try {
    function myFunction(myVar, index, arr) {
      if(myVar.substr(0, 5) === "migId") migId = arr[index].split("=")
      if(myVar.substr(0, 8) === "targetDb") targetDb = arr[index].split("=")
    }
    parameters.forEach(myFunction)
  } finally {}
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



