import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [

        AppComponent,
        HomeComponent,
        ContactComponent

    ],
    imports: [

        BrowserModule,

        MatToolbarModule,
        MatButtonModule,

        RouterModule.forRoot([

            {

                path: 'home',
                component: HomeComponent

            }, {

                path: 'contact',
                component: ContactComponent

            }

        ])

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
