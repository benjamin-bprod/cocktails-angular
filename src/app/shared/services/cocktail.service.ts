import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';


@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
      this.initCocktails();
  }

  initCocktails(): void{
    this.http.get<Cocktail[]>('https://mon-projet-cf3d9.firebaseio.com/cocktails.json').subscribe( (cocktails: Cocktail[]) => {
        this.cocktails.next(cocktails);
    });
  }

  getCocktail(index: number): Observable<Cocktail>{
    return this.cocktails.pipe(
        filter( ( cocktails: Cocktail[]) => cocktails != null ),
        map( (cocktails: Cocktail[]) => cocktails[index])
    );
  }

    addCocktail(cocktail: Cocktail): void{
        const cocktails = this.cocktails.value.slice();

        cocktails.push(
            new Cocktail(
                cocktail.name,
                cocktail.image,
                cocktail.description,
                cocktail.ingredients.map(
                    ingredient => new Ingredient(ingredient.name, ingredient.quantity)
                )
            )
        )

        this.cocktails.next(cocktails);
        this.save();
    }

    editCocktail(editCocktail: Cocktail): void {
        const cocktails = this.cocktails.value.slice();
        const index = cocktails.findIndex(c => c.name === editCocktail.name);
        cocktails[index] = editCocktail;
        this.cocktails.next(cocktails);
        this.save();
    }

    save(): void {
        this.http.put('https://mon-projet-cf3d9.firebaseio.com/cocktails.json', this.cocktails.value).subscribe();
    }
}
