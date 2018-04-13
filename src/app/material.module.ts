import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    imports: [MatButtonModule,
              MatIconModule,
              MatFormFieldModule,
              MatIconModule,
              MatDividerModule,
              MatCardModule,
              MatMenuModule,
            MatToolbarModule],
    exports: [MatButtonModule,
              MatInputModule,
              MatIconModule,
              MatDividerModule,
              MatFormFieldModule,
              MatMenuModule,
              MatCardModule,
            MatToolbarModule]
})
export class MaterialModule {}
