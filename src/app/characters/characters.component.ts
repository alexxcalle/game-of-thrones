import { Component } from '@angular/core';
import { CharactersService } from './characters.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent extends CharactersService {
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.getCharacters().subscribe((data: any) => {
      console.log(data);
    });
  }
}
