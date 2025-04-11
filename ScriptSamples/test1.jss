
function GetRESTResponse() {
try {
  var jsURI = Java.type('java.net.URI').create("https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13")
  var restRequest = Java.type('java.net.http.HttpRequest')
              .newBuilder()
              .uri(Java.type('java.net.URI').create("https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13"))
              .header("X-RapidAPI-Key", "2e4dcf19c6msh76e2d3dabb17533p11e59djsn86e4775b13f2")
              .header("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com")
              .method("GET", Java.type('java.net.http.HttpRequest').BodyPublishers.noBody())
              .build()
              
  var response = Java.type('java.net.http.HttpClient').newHttpClient()
                  .send(restRequest, Java.type('java.net.http.HttpResponse').BodyHandlers.ofString())
  // print("Response Status:" + response.statusCode())
  // print("Response Message:" + response.body())
  
} finally {

      }
      
// var http = Java.type("java.net.http.HttpRequest")
  responseText = "Response Status:" + response.statusCode() + "\n"
  responseText = "Response Message:" + response.body() + "\n"
  
  return(response)
}

var restResponse = GetRESTResponse()

  print("Response Status:" + restResponse.statusCode())
  print("Response Message:" + restResponse.body())
