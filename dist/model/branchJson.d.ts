/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AddressJsonV140 } from './addressJsonV140';
import { BranchRoutingJsonV141 } from './branchRoutingJsonV141';
import { DriveUpStringJson } from './driveUpStringJson';
import { LobbyStringJson } from './lobbyStringJson';
import { LocationJsonV140 } from './locationJsonV140';
import { MetaJsonV140 } from './metaJsonV140';
export interface BranchJson {
    name: string;
    location: LocationJsonV140;
    branchRouting: BranchRoutingJsonV141;
    driveUp: DriveUpStringJson;
    id: string;
    meta: MetaJsonV140;
    lobby: LobbyStringJson;
    address: AddressJsonV140;
}
