import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

/*
 * ways to loop ober an array
 * .map()
 * .forEach
 * for(let i = 0...)
 * for(element of array)
 * for(index in array)
 * while
 * recursive
*/

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  /*
   * Why did recipes2 work with Object[];
   * but recipes not work (and give an error) when we use Recipe[];
  */
  recipes2: Object[] = [{}, {}, {}];

  recipes: Recipe[] = [
    {
      name: "Burger",
      description: "This is definitely an American food. Which means it's pretty good",
      image: "https://media1.s-nbcnews.com/j/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p_d9270c5c545b30ea094084c7f2342eb4.fit-760w.jpg"
    },
    {
      name: "Hot Dogs",
      description: "Hot dogs are nice and they are very convenient to eat.",
      image: "https://potatorolls.com/wp-content/uploads/Basic-Hot-Dogs.jpg"
    },
    {
      name: "Fettuccine Alfredo with Chicken",
      description: "One time Angel tried to cook this dish from scratch and he ended up overdoing it with the cheese because he didn't realize the specific cheese he was using wasn't supposed to melt.",
      image: "https://www.jessicagavin.com/wp-content/uploads/2019/08/chicken-alfredo-8-1200.jpg"
    }
  ];

  trialRecipe: Recipe = {
    name: "tacos",
    description: "they are very nice to eat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/440px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"
  };

  // arrayOfStrings: string[] = ['angel', 'juarez', `${100}`];
  // arrayOfNumbers: number[] = [1, 2, 3];

  name: string = "Angel"; // name is adhering to the rules of datatype string
  lastName: string = "Juarez"
  age: number = 21; // age is adhering to the rules of datatype number

  studentsNames: string[] = [
    "Arron",
    "Bryan",
    "Natan",
    "De'Amber",
    "Shyle",
    "Bruce",
    "Hector",
    "Kimmy",
    "Elizabeth",
    "Motasem",
    "Robert",
    "Thomas",
    "Ty",
    "Sarah",
    "Yazan",
    "Sam"
  ]

  chosenStudent = null;
  chooseStudent(student) {
    console.log(student);
    this.chosenStudent = student;
  }

  constructor() { }

  ngOnInit(): void {
  }

}