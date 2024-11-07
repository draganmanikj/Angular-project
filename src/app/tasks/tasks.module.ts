import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

// za da moze site zaedno da se koristat od app.module.ts
@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
    ],
    //ovde e samo tasks deka samo toa se koristi od app.module components
    exports:[
        TasksComponent,
    ],
    //se sto se koristi od declarations (tasks)
    imports:[
        CommonModule, //za datepipe pr
        FormsModule, //za forms
        SharedModule
    ]

})
export class TasksModule {}