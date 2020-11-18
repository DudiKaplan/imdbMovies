import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { SecureComponent } from './components/secure/secure.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { AddMovieDialogComponent } from './components/add-movie-dialog/add-movie-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [LayoutComponent, PageNotFoundComponent, LoginComponent, SecureComponent, ErrorPageComponent, MovieCardComponent, AddMovieDialogComponent],
    imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatSliderModule,
        MatCheckboxModule,
        MatButtonModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        MatIconModule,
        MatSidenavModule,
        MatChipsModule,
        MatDialogModule,
        MatProgressSpinnerModule],
    providers: [],
    entryComponents: [AddMovieDialogComponent],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
