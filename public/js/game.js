function Game(){
  this.board_seq = this.createBoardSeq();
};


Game.prototype.createBoardSeq = function(){
  array = Array.apply(null, { length: 12 }).map(function(element, index) { return index+1; });
  array = array.concat(['+', '-', '*', "/"]);
  shuffledArray = [];
  while(array.length>0){
    shuffledArray.push((array.splice(Math.floor(Math.random() * array.length) ,1))[0]);
  };
  return shuffledArray;
};

Game.prototype.question = function(){
  operations = ['+', '-', '*', "/"];
  array = Array.apply(null, { length: 12 }).map(function(element, index) { return index+1; });
  n1 = Math.floor(Math.random() * 12) + 1;
  n2 = Math.floor(Math.random() * 12) + 1;
  operation = operations[Math.floor(Math.random() * 4)];
  switch(operation) {
    case '+':
        number = n1 + n2;
        break;
    case '-':
        number = n1 - n2;
        break;
    case '*':
        number = n1 * n2;
        break;
    case '/':
        number = Math.round(n1 / n2);

        break;
  };
  return number;
};


Game.prototype.result = function(array){
  var self = this;
  switch(self.board_seq[array[1]]) {
    case '+':
        number = self.board_seq[array[0]] + self.board_seq[array[2]];
        break;
    case '-':
        number = self.board_seq[array[0]] - self.board_seq[array[2]];
        break;
    case '*':
        number = self.board_seq[array[0]] * self.board_seq[array[2]];
        break;
    case '/':
        number = Math.round(self.board_seq[array[0]] / self.board_seq[array[2]]);

        break;
  };
  console.log(number);
  return number;

};