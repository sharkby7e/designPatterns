const person = {
  name: "Sid",
  age: 30,
  job: "teacher",
  presenter: function () {
    return console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old and my job is ${this.job}`
    );
  },

  getOld() {
    this.age++;
  },
};

person.presenter();

function createPerson({ name, age, job }) {
  return {
    name,
    age,
    job,
    presenter: function () {
      return console.log(
        `Hello, my name is ${this.name}, I am ${this.age} years old and my job is ${this.job}`
      );
    },

    getOld() {
      this.age++;
    },
  };
}

const jane = createPerson({
  name: "Jane",
  age: 30,
  job: "teacher",
});

jane.presenter();
jane.getOld();
jane.getOld();
jane.getOld();
jane.getOld();
jane.getOld();
jane.presenter();
