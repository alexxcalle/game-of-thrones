import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NzTableModule, NzButtonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  public data: any[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get('https://thronesapi.com/api/v2/Characters')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
}
