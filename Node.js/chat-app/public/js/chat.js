const socket = io();
const $messageForm = document.querySelector('message-form');
const $msgButton = document.getElementById('send');
const $locButton = document.querySelector('#send-location')
const $messages = document.querySelector('#messages');

const messageTemplate = document.querySelector('#message-template').innerHTML;
const locationTemplate = document.querySelector('#location-template').innerHTML;
// socket.on('WelcomeMsg',(str)=>{
//     console.log(str);
// })
// socket.on('countUpdated',(count)=>{
//     console.log("count is updated", count);
// });

// document.getElementById('inc').addEventListener('click',()=>{
//     console.log('clicked');
//     socket.emit('increment')
// })
const {username,room} = Qs.parse(location.search,{ignoreQueryPrefix: true});


const $msg = document.querySelector('input');
$msgButton.addEventListener('click',(e)=>{
    // console.log(msg.value);
    $msgButton.setAttribute('disabled','disabled');
    socket.emit('sendMessage',$msg.value,(error)=>{
        if(error){
            return console.log(error);
        }
        console.log('Message delivered');
    });
    $msg.value = '';
    $msgButton.removeAttribute('disabled');
    $msg.focus();

    
    e.preventDefault();
})

$locButton.addEventListener('click',(e)=>{
    $locButton.setAttribute('disabled','disabled');
    if(!navigator.geolocation){
        return alert('sevice not supported');
    }

    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position);

        socket.emit('sendLocation',{latitude:position.coords.latitude,longitude:position.coords.longitude},(msg)=>{
            // if(error){
            //     return console.log(error);
            // }
            console.log(msg);
        });
        $locButton.removeAttribute('disabled');
    })
})

socket.on('message',(msg)=>{
    console.log(msg);
    const html = Mustache.render(messageTemplate,{
        message: msg.text,
        createdAt: moment(msg.createdAt).format('hh:mm a')
    });
    $messages.insertAdjacentHTML('beforeend',html);

})

socket.on('Locationmessage',(msg)=>{
    console.log(msg);
    const html = Mustache.render(locationTemplate,{
        message: msg.url,
        createdAt:moment(msg.createdAt).format('hh:mm a')
    });
    $messages.insertAdjacentHTML('beforeend',html);

})

socket.emit('join',{username,room});