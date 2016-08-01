"use script";
self.addEventListener('install', function(evt) {
    //Automatically take over the previous worker.
    evt.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(evt) {
    console.log("Activated Letreach");
});

self.addEventListener('push', function(evt) {
    var json = evt.data ? evt.data.text() : ''
    var payload = JSON.parse(evt.data.text());
    var title = payload.title;
    var msg = payload.msg;
    var url = payload.url;
    var icon = payload.image + '?notificationURL=' + encodeURIComponent(url);

    //Track delivery of notifications
    DeliveryAck="https://api.letreach.com/push/trackDelivery/?subid="+encodeURIComponent(payload.subscriptionId)+"&notificationTag="+payload.id+"&hash=05126c467631a76742a3179ab4980042";

    fetch(DeliveryAck).
    catch(function(err) {
    });

    evt.waitUntil(
        self.registration.showNotification(title, {
            body: msg,
            icon: icon,
            tag: payload.id,
            requireInteration:true
        })
    );
});

self.addEventListener('notificationclick', function(evt) {
    self.registration.pushManager.getSubscription().then(function(subscription){
        var ClickAck =  "https://api.letreach.com/push/trackClick/?subid="+encodeURIComponent(subscription.endpoint)+"&notificationTag="+evt.notification.tag+"&hash=05126c467631a76742a3179ab4980042";
        evt.notification.close();
        // send update to server
        fetch(ClickAck).
        catch(function(err) {
        });
    });
    var icon=evt.notification.icon;
    var url=decodeURIComponent(icon.split('URL=')[1]);
    return clients.openWindow(url);
});