prama solidity ^0.4.0;


contract Teacher {

  string public message;

  function Teacher(string initialMessage) public {
    message = initialMessage;
  }

  function setMessage(string newMessage) public {
    message = newMessage;
  }

}
