/** This is a sample code for your bot**/
function MessageHandler(context, event) {
   var test=event.message.toLowerCase();
   if(event.message.toLowerCase()=="hi"){
   context.sendResponse("Hello/n" +event.senderobj.display);
   }
   if(event.message.toLowerCase()=="how are you?"){
   context.sendResponse("Uhhh! I was awake the entire night.Need a nap");
   }
   if((test.indexOf("display") != -1) || (test.indexOf("show") != -1) || (test.indexOf("see") != -1)){
       var question = {
                 "type":"survey",
                 "question":"What would you like view?",
                 "options":["Myshares","General Shares"],
                 "msgid":"3er45"
             };
       context.sendResponse(JSON.stringify(question));    
     return;  
 }
if (event.message == "Myshares" && event.messageobj.refmsgid=='3er45'){
      context.sendResponse("Input your image for auth");
  }
  if (event.message == "General Shares" && event.messageobj.refmsgid=='3er45'){
      context.sendResponse("Shares are:\n Shares  \t Cost per share \t  No of share \n \t Apple \t $20 \t 100\n \t Google \t $50 \t 200 \n \t Barclays \t $70 \t 400");
  }
if(event.messageobj.type=="image"){
       //context.sendResponse("url is"+JSON.stringify(event.messageobj.url));
     
      context.simplehttp.makeGet("http://350ce307.ngrok.io/image/?user=" +event.senderobj.display +"&img_url=" +encodeURIComponent(JSON.stringify(event.messageobj.url)),null,auth_response);
       
}





   else{
 context.simplehttp.makeGet('https://api.wit.ai/message?v=20160924&q=' +event.message ,{"Authorization": "Bearer SN2EIZQHEXVHQUETSBZNMWLGWCV7XDTE"},wti_response);
//   if(event.messageobj.type=="image"){
//       //context.sendResponse("url is"+JSON.stringify(event.messageobj.url));
   
   
//      context.simplehttp.makeGet('http://350ce307.ngrok.io/image/?img_url=' +encodeURIComponent(JSON.stringify(event.messageobj.url)));
//       // context.simplehttp.makeGet("http://350ce307.ngrok.io/image/?img_url=hi");
//     //   var url='http://350ce307.ngrok.io/image/';
//     //   var param=JSON.stringify(event.messageobj.url);
//     //   context.simplehttp.makePost(url,param);
//   }      
//   if(event.message=="Bye"){
