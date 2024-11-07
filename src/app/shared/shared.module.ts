import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

//ova e model sto se spodeluva so site dr komponenti
@NgModule({
    declarations: [CardComponent],
    //exports za da se spodeli preku app.module.ts
    exports: [CardComponent]
})


export class SharedModule {}