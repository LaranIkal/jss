function GetRESTResponse() {
try {
  var jsURI = Java.type("java.net.URI").create("http://localhost:8080/actuator/info")
  var restRequest = Java.type("java.net.http.HttpRequest")
              .newBuilder()
              .uri(jsURI)
              //.header("X-RapidAPI-Key", "2e4dcf19c6msh76e2d3dabb17533p11e59djsn86e4775b13f2")
              //.header("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com")
              .method("GET", Java.type("java.net.http.HttpRequest").BodyPublishers.noBody())
              .build()
              
  var response = Java.type("java.net.http.HttpClient").newHttpClient()
                  .send(restRequest, Java.type("java.net.http.HttpResponse").BodyHandlers.ofString())
} finally {

      }
      
  responseText = "Response Status:" + response.statusCode() + "\n"
  responseText += "Response Message:" + response.body() + "\n"
  
  return(responseText)
}

var restResponse = GetRESTResponse()

print(restResponse)

