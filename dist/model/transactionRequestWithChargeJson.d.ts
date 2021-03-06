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
import { ChallengeJsonV140 } from './challengeJsonV140';
import { TransactionRequestAccountJsonV140 } from './transactionRequestAccountJsonV140';
import { TransactionRequestChargeJsonV200 } from './transactionRequestChargeJsonV200';
export interface TransactionRequestWithChargeJson {
    challenge: ChallengeJsonV140;
    startDate: string;
    id: string;
    endDate: string;
    status: string;
    from: TransactionRequestAccountJsonV140;
    details: string;
    charge: TransactionRequestChargeJsonV200;
    type: string;
    transactionIds: string;
}
