// import React, { useState } from 'react'
// import ws from 'ws'
export default function WebsocketOrderBook() {

// const [orderBook,setOrderBook]=useState([])
const socket =new WebSocket('ws://api-pub.bitfinex.com/ws/2')
socket.onopen = function() {
    console.log("ok")
  };
 
  socket.onopen=function(){
    socket.send(JSON.stringify({ 
        event: 'subscribe', 
        channel: 'book', 
        symbol: 'tBTCUSD',
        len: 100
      }))
  }
socket.onmessage=function(event){

// console.log(event);
const value=JSON.parse(event.data);
// console.log(value);
// setOrderBook(value)

}
return(<h1>Sockets</h1>)
}
// console.log(socket);