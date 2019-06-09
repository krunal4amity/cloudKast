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
import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
//Material import end

//import { EbsVolumeComponent } from './ec2/ebs-volume/ebs-volume.component';
//import { SectionViewComponent } from './section-view/section-view.component';
import { ResourceViewComponent } from './resource-view/resource-view.component';
import { ResultComponent } from './result/result.component';
import { MetadataComponent } from './metadata/metadata.component';
import { JsonResultService } from './json-result.service';
import { ParametersComponent } from './parameters/parameters.component';
import { ParametersTabComponent } from './parameters-tab/parameters-tab.component';
import { UsefulUtilsService } from './useful-utils.service';
import { IntrinsicFunctionsComponent } from './intrinsic-functions/intrinsic-functions.component';
import { KeysPipePipe } from './keys-pipe.pipe';
//import { EC2EIPComponent } from './ec2/ec2-eip/ec2-eip.component';
//import { EC2InstanceComponent } from './ec2/ec2-instance/ec2-instance.component';
import { ObjectHelpComponent } from './object-help/object-help.component';
import { ResourceDataService } from './resource-data.service';
//import { EC2SecurityGroupComponent } from './ec2/ec2-security-group/ec2-security-group.component';
import { MappingsComponent } from './mappings/mappings.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { OutputsComponent } from './outputs/outputs.component';
import { TransformComponent } from './transform/transform.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { OutputsTabComponent } from './outputs-tab/outputs-tab.component';
import { ConditionsTabComponent } from './conditions-tab/conditions-tab.component';
import { MappingsTabComponent } from './mappings-tab/mappings-tab.component';
//import { Ec2CustomerGatewayComponent } from './ec2/ec2-customer-gateway/ec2-customer-gateway.component';
//import { Ec2DHCPOptionsComponent } from './ec2/ec2-dhcpoptions/ec2-dhcpoptions.component';
//import { Ec2EgressOnlyInternetGatewayComponent } from './ec2/ec2-egress-only-internet-gateway/ec2-egress-only-internet-gateway.component';
//import { Ec2EIPAssociationComponent } from './ec2/ec2-eipassociation/ec2-eipassociation.component';
//import { Ec2FlowLogComponent } from './ec2/ec2-flow-log/ec2-flow-log.component';
//import { Ec2HostComponent } from './ec2/ec2-host/ec2-host.component';
//import { Ec2InternetGatewayComponent } from './ec2/ec2-internet-gateway/ec2-internet-gateway.component';
//import { Ec2NatGatewayComponent } from './ec2/ec2-nat-gateway/ec2-nat-gateway.component';
//import { Ec2NetworkAclComponent } from './ec2/ec2-network-acl/ec2-network-acl.component';
//import { Ec2NetworkInterfaceAttachmentComponent } from './ec2/ec2-network-interface-attachment/ec2-network-interface-attachment.component';
//import { Ec2NetworkInterfacePermissionComponent } from './ec2/ec2-network-interface-permission/ec2-network-interface-permission.component';
//import { Ec2PlacementGroupComponent } from './ec2/ec2-placement-group/ec2-placement-group.component';
//import { Ec2RouteComponent } from './ec2/ec2-route/ec2-route.component';
//import { Ec2RouteTableComponent } from './ec2/ec2-route-table/ec2-route-table.component';
//import { Ec2SecurityGroupEgressComponent } from './ec2/ec2-security-group-egress/ec2-security-group-egress.component';
//import { Ec2SecurityGroupIngressComponent } from './ec2/ec2-security-group-ingress/ec2-security-group-ingress.component';
//import { Ec2SubnetComponent } from './ec2/ec2-subnet/ec2-subnet.component';
//import { Ec2SubnetCidrBlockComponent } from './ec2/ec2-subnet-cidr-block/ec2-subnet-cidr-block.component';
//import { Ec2SubnetNetworkAclAssociationComponent } from './ec2/ec2-subnet-network-acl-association/ec2-subnet-network-acl-association.component';
//import { Ec2SubnetRouteTableAssociationComponent } from './ec2/ec2-subnet-route-table-association/ec2-subnet-route-table-association.component';
//import { Ec2TransitGatewayComponent } from './ec2/ec2-transit-gateway/ec2-transit-gateway.component';
//import { Ec2TransitGatewayAttachmentComponent } from './ec2/ec2-transit-gateway-attachment/ec2-transit-gateway-attachment.component';
//import { Ec2TransitGatewayRouteComponent } from './ec2/ec2-transit-gateway-route/ec2-transit-gateway-route.component';
//import { Ec2TransitGatewayRouteTableComponent } from './ec2/ec2-transit-gateway-route-table/ec2-transit-gateway-route-table.component';
//import { Ec2TransitGatewayRouteTableAssociationComponent } from './ec2/ec2-transit-gateway-route-table-association/ec2-transit-gateway-route-table-association.component';
//import { Ec2TransitGatewayRouteTablePropagationComponent } from './ec2/ec2-transit-gateway-route-table-propagation/ec2-transit-gateway-route-table-propagation.component';
//import { Ec2VolumeAttachmentComponent } from './ec2/ec2-volume-attachment/ec2-volume-attachment.component';
//import { Ec2VPCComponent } from './ec2/ec2-vpc/ec2-vpc.component';
//import { Ec2VPCCidrBlockComponent } from './ec2/ec2-vpccidr-block/ec2-vpccidr-block.component';
//import { Ec2VPCDHCPOptionsAssociationComponent } from './ec2/ec2-vpcdhcpoptions-association/ec2-vpcdhcpoptions-association.component';
//import { Ec2VPCEndpointComponent } from './ec2/ec2-vpcendpoint/ec2-vpcendpoint.component';
//import { Ec2VPCEndpointConnectionNotificationComponent } from './ec2/ec2-vpcendpoint-connection-notification/ec2-vpcendpoint-connection-notification.component';
//import { Ec2VPCEndpointServiceComponent } from './ec2/ec2-vpcendpoint-service/ec2-vpcendpoint-service.component';
//import { Ec2VPCEndpointServicePermissionsComponent } from './ec2/ec2-vpcendpoint-service-permissions/ec2-vpcendpoint-service-permissions.component';
//import { Ec2VPCGatewayAttachmentComponent } from './ec2/ec2-vpcgateway-attachment/ec2-vpcgateway-attachment.component';
//import { Ec2VPCPeeringConnectionComponent } from './ec2/ec2-vpcpeering-connection/ec2-vpcpeering-connection.component';
//import { Ec2VPNConnectionRouteComponent } from './ec2/ec2-vpnconnection-route/ec2-vpnconnection-route.component';
//import { Ec2VPNGatewayComponent } from './ec2/ec2-vpngateway/ec2-vpngateway.component';
//import { Ec2VPNGatewayRoutePropagationComponent } from './ec2/ec2-vpngateway-route-propagation/ec2-vpngateway-route-propagation.component';
//import { Ec2FleetComponent } from './ec2/ec2-fleet/ec2-fleet.component';
//import { Ec2LaunchTemplateComponent } from './ec2/ec2-launch-template/ec2-launch-template.component';
//import { Ec2NetworkAclEntryComponent } from './ec2/ec2-network-acl-entry/ec2-network-acl-entry.component';
//import { Ec2NetworkInterfaceComponent } from './ec2/ec2-network-interface/ec2-network-interface.component';
//import { Ec2SpotFleetComponent } from './ec2/ec2-spot-fleet/ec2-spot-fleet.component';
//import { Ec2VpnConnectionComponent } from './ec2/ec2-vpn-connection/ec2-vpn-connection.component';
import { CommonResourceComponent } from './common-resource/common-resource.component';
import { PropertyDialogTabComponent } from './property-dialog-tab/property-dialog-tab.component';
import { PropertyDialogComponent } from './property-dialog/property-dialog.component';
import { FunctionsTabComponent } from './functions-tab/functions-tab.component';
import { EC2InitComponent } from './ec2-init/ec2-init.component';
//import { Ec2initconfigComponent } from './ec2initconfig/ec2initconfig.component';
import { Ec2InitConfigTabComponent } from './ec2-init-config-tab/ec2-init-config-tab.component';
import { ImportTemplateComponent } from './import-template/import-template.component';
import { HowToComponent } from './how-to/how-to.component';





@NgModule({
  declarations: [
    AppComponent,
    //EbsVolumeComponent,
    //SectionViewComponent,
    ResourceViewComponent,
    ResultComponent,
    MetadataComponent,
    ParametersComponent,
    ParametersTabComponent,
    IntrinsicFunctionsComponent,
    KeysPipePipe,
    //EC2EIPComponent,
    //EC2InstanceComponent,
    ObjectHelpComponent,
    //EC2SecurityGroupComponent,
    MappingsComponent,
    ConditionsComponent,
    OutputsComponent,
    TransformComponent,
    AboutPageComponent,
    OutputsTabComponent,
    ConditionsTabComponent,
    MappingsTabComponent,
    //Ec2CustomerGatewayComponent,
    //Ec2DHCPOptionsComponent,
    //Ec2EgressOnlyInternetGatewayComponent,
    //Ec2EIPAssociationComponent,
    //Ec2FlowLogComponent,
    //Ec2HostComponent,
    //Ec2InternetGatewayComponent,
    //Ec2NatGatewayComponent,
    //Ec2NetworkAclComponent,
    //Ec2NetworkInterfaceAttachmentComponent,
    //Ec2NetworkInterfacePermissionComponent,
    //Ec2PlacementGroupComponent,
    //Ec2RouteComponent,
    //Ec2RouteTableComponent,
    //Ec2SecurityGroupEgressComponent,
    //Ec2SecurityGroupIngressComponent,
    //Ec2SubnetComponent,
    //Ec2SubnetCidrBlockComponent,
    //Ec2SubnetNetworkAclAssociationComponent,
    //Ec2SubnetRouteTableAssociationComponent,
    //Ec2TransitGatewayComponent,
    //Ec2TransitGatewayAttachmentComponent,
    //Ec2TransitGatewayRouteComponent,
    //Ec2TransitGatewayRouteTableComponent,
    //Ec2TransitGatewayRouteTableAssociationComponent,
    //Ec2TransitGatewayRouteTablePropagationComponent,
    //Ec2VolumeAttachmentComponent,
    //Ec2VPCComponent,
    //Ec2VPCCidrBlockComponent,
    //Ec2VPCDHCPOptionsAssociationComponent,
    //Ec2VPCEndpointComponent,
    //Ec2VPCEndpointConnectionNotificationComponent,
    //Ec2VPCEndpointServiceComponent,
    //Ec2VPCEndpointServicePermissionsComponent,
    //Ec2VPCGatewayAttachmentComponent,
    //Ec2VPCPeeringConnectionComponent,
    //Ec2VPNConnectionRouteComponent,
    //Ec2VPNGatewayComponent,
    //Ec2VPNGatewayRoutePropagationComponent,
    //Ec2FleetComponent,
    //Ec2LaunchTemplateComponent,
    //Ec2NetworkAclEntryComponent,
    //Ec2NetworkInterfaceComponent,
    //Ec2SpotFleetComponent,
    //Ec2VpnConnectionComponent,
    CommonResourceComponent,
    PropertyDialogTabComponent,
    PropertyDialogComponent,
    FunctionsTabComponent,
    EC2InitComponent,
    //Ec2initconfigComponent,
    Ec2InitConfigTabComponent,
    ImportTemplateComponent,
    HowToComponent
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
  providers: [JsonResultService,UsefulUtilsService,ResourceDataService,
  {provide:MAT_DIALOG_DATA,useValue:"AWS::EC2::Instance"}
  ],
  bootstrap: [AppComponent],
  entryComponents:[PropertyDialogTabComponent]
})
export class AppModule { }
