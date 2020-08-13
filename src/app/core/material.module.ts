import {
  MatButtonModule, MatTableModule, MatCheckboxModule, MatMenuModule,
  MatIconModule, MatSortModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS,
  MAT_DIALOG_DATA, MatFormFieldModule, MatSidenavModule, MatListModule, MatToolbarModule, 
  MatProgressSpinnerModule, MatInputModule, MatChipsModule,
  MatExpansionModule, MatCardModule
} from '@angular/material';
import { NgModule } from '@angular/core';

const MATERIAL_MODULES = [
  MatButtonModule, MatTableModule, MatCheckboxModule,
  MatMenuModule, MatIconModule, MatSortModule, MatDialogModule,
  MatFormFieldModule, MatListModule, MatSidenavModule, MatToolbarModule,
   MatProgressSpinnerModule, MatInputModule, MatChipsModule, MatExpansionModule, MatCardModule];
@NgModule({
  imports: [
    MATERIAL_MODULES
  ],
  providers: [{
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {
      hasBackdrop: true,
      // panelClass: 'kt-mat-dialog-container__wrapper',
      height: '100%',
      width: '30%',
      position: { top: '30%', right: '0px' },
    }
  },
  { provide: MAT_DIALOG_DATA, useValue: {} },
    // { provide: MdDialogRef, useValue: {} }
  ],
  exports: [MATERIAL_MODULES]
})
export class MaterialModule { }