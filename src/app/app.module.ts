import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import 'hammerjs';

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
//Material import end

import { EbsVolumeComponent } from './ebs-volume/ebs-volume.component';
import { SectionViewComponent } from './section-view/section-view.component';
import { ResourceViewComponent } from './resource-view/resource-view.component';
import { Route53HealthCheckComponent } from './route53-health-check/route53-health-check.component';
import { ResultComponent } from './result/result.component';
import { MetadataComponent } from './metadata/metadata.component';
import { JsonResultService } from './json-result.service';
import { ParametersComponent } from './parameters/parameters.component';
import { ParametersTabComponent } from './parameters-tab/parameters-tab.component';
import { UsefulUtilsService } from './useful-utils.service';
import { IntrinsicFunctionsComponent } from './intrinsic-functions/intrinsic-functions.component';
import { KeysPipePipe } from './keys-pipe.pipe';
import { EC2EIPComponent } from './ec2-eip/ec2-eip.component';
import { EC2InstanceComponent } from './ec2-instance/ec2-instance.component';
import { ObjectHelpComponent } from './object-help/object-help.component';
import { ResourceDataService } from './resource-data.service';
import { EC2SecurityGroupComponent } from './ec2-security-group/ec2-security-group.component';
import { MappingsComponent } from './mappings/mappings.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { OutputsComponent } from './outputs/outputs.component';
import { TransformComponent } from './transform/transform.component';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [
    AppComponent,
    EbsVolumeComponent,
    SectionViewComponent,
    ResourceViewComponent,
    Route53HealthCheckComponent,
    ResultComponent,
    MetadataComponent,
    ParametersComponent,
    ParametersTabComponent,
    IntrinsicFunctionsComponent,
    KeysPipePipe,
    EC2EIPComponent,
    EC2InstanceComponent,
    ObjectHelpComponent,
    EC2SecurityGroupComponent,
    MappingsComponent,
    ConditionsComponent,
    OutputsComponent,
    TransformComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    //Material start
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatBadgeModule
    //Material End
  ],
  providers: [JsonResultService,UsefulUtilsService,ResourceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
