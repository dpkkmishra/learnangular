"use script";
self.addEventListener('install', function(evt) {
    //Automatically take over the previous worker.
    evt.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(evt) {
    console.log("Activated Letreach");
});

self.addEventListener('push', function(evt) {
    var payload = JSON.parse(evt.data.text());
    console.log(payload);
    var title = payload.title;
    var notificationTag=payload.id;
    var msg = payload.msg;
    var url = payload.url;
    var icon = payload.image + '?main=' + encodeURIComponent(url)+'&';
    //Track delivery of notifications
    DeliveryAck="https://api.letreach.com/push/trackDelivery/?subid="+encodeURIComponent(payload.subscriptionId)+"&notificationTag="+payload.id+"&hash=05126c467631a76742a3179ab4980042";
    fetch(DeliveryAck).
    catch(function(err) {
    });
    if (payload.actions !== undefined){
        actions=payload.actions;
        actionsarr=[];
        urls=[];
        actions.forEach(function(item){
            var temp={action:'action1','title':item.Title};
            actionsarr.push(temp);
            urls.push(item.Link);
        });
        if(payload.actions.length==1){
            icon=icon+"&action1="+urls[0];
        }
        if(payload.actions.length==2){
            icon=icon+"&action1="+urls[0]+"&action2="+urls[1];
        }
        content = {requireInteraction: payload.requireInteraction,body: msg,icon: icon,tag: notificationTag, actions:actionsarr};
    }else{
        content = {requireInteraction: payload.requireInteraction,body: msg,icon: icon,tag: notificationTag};
    }
    evt.waitUntil(       
    self.registration.showNotification(title, content)
    );
});
function getQueryVariable(iconurl,variable) {
  var query = iconurl.split("?")[1];
  if(query.indexOf('&')>-1){
  var vars = query.split("&");
 }else{
    vars=[query];
    }
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
}

self.addEventListener('notificationclick', function(evt) {
    self.registration.pushManager.getSubscription().then(function(subscription){
        var ClickAck =  "https://api.letreach.com/push/trackClick/?subid="+encodeURIComponent(subscription.endpoint)+"&notificationTag="+evt.notification.tag+"&hash=05126c467631a76742a3179ab4980042&action="+evt.action;
        evt.notification.close();
        // send update to server
        fetch(ClickAck).
        catch(function(err) {
        });
    });
    var icon=evt.notification.icon;    
     if (evt.action === 'action1') {  
    var url=decodeURIComponent(getQueryVariable(icon,"action1"))
  }  
  else if (evt.action === 'action2') {  
    var url=decodeURIComponent(getQueryVariable(icon,"action2"))  
  }  
  else {  
    var url=decodeURIComponent(getQueryVariable(icon,"main"));
  }  
return clients.openWindow(url);
});