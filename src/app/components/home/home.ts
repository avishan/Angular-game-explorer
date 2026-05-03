import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  sort: string = '';

  games = [
    { name: 'War Arena', rating: 4.6, year: 2024 },
    { name: 'Galaxy Run', rating: 4.7, year: 2026 },
    { name: 'Cyber Quest', rating: 4.8, year: 2025 }
  ];


 sortGames() {
  if (this.sort === 'name') {
    this.games.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (this.sort === '-rating') {
    this.games.sort((a, b) => b.rating - a.rating);
  }

  if (this.sort === '-released') {
    this.games.sort((a, b) => b.year - a.year);
  }
}
}

