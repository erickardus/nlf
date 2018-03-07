pragma solidity ^0.4.0;


contract Courses {

  struct Person {
    bool teacher;
    bool exists;
  }

  struct Course {
    string name;
    int8   id;
  }

  string public owner;
  mapping(address => Person) public persons; 
  mapping(id => Course) public courses;

  function Courses() public {
    owner = msg.sender;
  }

  function makeTeacher(address entity) public {
    require(msg.sender == owner);
    persons[entity].teacher = true;
    persons[entity].exists = true;
  }

  function createCourse(string name, int8 id) {
    require(persons[msg.sender].exists == true);
    courses[id].name = name;
  }

}
