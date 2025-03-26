import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule], 
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent implements OnInit {
  albums: any[] = [];
  newAlbumTitle: string = '';

  private apiUrl = 'http://localhost:3000/albums'; 

  constructor(private http: HttpClient, private router: Router) {} 

  ngOnInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => (this.albums = data),
      error: (err) => console.error('Error fetching albums:', err),
    });
  }

  addAlbum() {
    if (!this.newAlbumTitle.trim()) return;

    const newAlbum = { title: this.newAlbumTitle };
    this.http.post<any>(this.apiUrl, newAlbum).subscribe({
      next: (album) => {
        this.albums.push(album);
        this.newAlbumTitle = ''; 
      },
      error: (err) => console.error('Error adding album:', err),
    });
  }
  updateAlbum(album: any) {
    this.http.put<any>(`${this.apiUrl}/${album.id}`, album).subscribe({
      next: () => console.log('Album updated successfully'),
      error: (err) => console.error('Error updating album:', err),
    });
  }
  deleteAlbum(id: number) {
    this.http.delete<any>(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== id);
      },
      error: (err) => console.error('Error deleting album:', err),
    });
  }
  goToAlbumDetails(id: number) {
    this.router.navigate(['/albums', id]); 
  }
}
