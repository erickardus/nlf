pragma solidity ^0.4.0;


contract Pupil {

  string public message;

  function Pupil(string initialMessage) public {
    message = initialMessage;
  }

  function setMessage(string newMessage) public {
    message = newMessage;
  }

}
