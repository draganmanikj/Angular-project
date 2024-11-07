//Ova e Angular 2 so Module Components

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    //declarations ne e za standalone components
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
    ],
    //imports za standalone components
    imports: [
        BrowserModule, //must have pr. ima DatePipe
        SharedModule,
        TasksModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}