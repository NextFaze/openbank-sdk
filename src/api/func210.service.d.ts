/**
 * Open Bank Project API
 * An Open Source API for Banks. (c) TESOBE Ltd. 2011 - 2016. Licensed under the
 * AGPL and commercial licences.
 *
 * OpenAPI spec version: v3.0.0
 * Contact: contact@tesobe.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import '../rxjs-operators';
import { Headers, Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../configuration';
import { AvailableRolesJSON } from '../model/availableRolesJSON';
import { BranchJson } from '../model/branchJson';
import { BranchJsonPutV210 } from '../model/branchJsonPutV210';
import { ConsumerJSON } from '../model/consumerJSON';
import { ConsumerRedirectUrlJSON } from '../model/consumerRedirectUrlJSON';
import { ConsumersJson } from '../model/consumersJson';
import { CounterpartyJsonV220 } from '../model/counterpartyJsonV220';
import { CustomerJsonV210 } from '../model/customerJsonV210';
import { EntitlementJSONs } from '../model/entitlementJSONs';
import { MetricsJson } from '../model/metricsJson';
import { PhysicalCardJSON } from '../model/physicalCardJSON';
import { PostCounterpartyJSON } from '../model/postCounterpartyJSON';
import { PostCustomerJsonV210 } from '../model/postCustomerJsonV210';
import { PostPhysicalCardJSON } from '../model/postPhysicalCardJSON';
import { ProductJsonV210 } from '../model/productJsonV210';
import { ProductsJsonV210 } from '../model/productsJsonV210';
import { PutEnabledJSON } from '../model/putEnabledJSON';
import { SuccessMessage } from '../model/successMessage';
import { TransactionRequestTypesJSON } from '../model/transactionRequestTypesJSON';
import { TransactionRequestWithChargeJSONs210 } from '../model/transactionRequestWithChargeJSONs210';
import { TransactionType } from '../model/transactionType';
import { TransactionTypeJsonV200 } from '../model/transactionTypeJsonV200';
import { UsersJSONV200 } from '../model/usersJSONV200';
export declare class Func_2_1_0Service {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1, T2>(objA, objB);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes);
    /**
     * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This is
     * can be used to create cards which are stored in the local RDBMS.
     * Authentication is Mandatory</p>
     * @summary Add cards for a bank
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func210AddCardsForBank(body: PostPhysicalCardJSON, BANK_ID: string, extraHttpRequestParams?: any): Observable<PhysicalCardJSON>;
    /**
     * <p>Create counterparty.</p><p>Counterparties are created for the account /
     * view They are how the user of the view (e.g. account owner) refers to the
     * other side of the transaction</p><p>name is the human readable name (e.g.
     * Piano teacher, Miss Nipa)</p><p>other_bank_id is an (internal) ID for the
     * bank of the bank of the counterparty (if known)</p><p>other_account_id is
     * an (internal) ID for the bank account of the counterparty (if
     * known)</p><p>other_account_provider is a code that tells the system where
     * that bank is hosted. Will be OBP if its known to the API. Usage of this
     * flag (in API / connectors) is work in
     * progress.</p><p>account_routing_scheme is a code that dictates the nature
     * of the account_routing_address e.g. IBAN</p><p>account_routing_address is
     * an instance of account_routing_scheme that can be used to route payments to
     * external systems. e.g. an IBAN number</p><p>bank_routing_scheme is a code
     * that dictates the nature of the bank_routing_address e.g.
     * \"BIC\",</p><p>bank_routing_address is an instance of
     * bank_routing_scheme</p><p>is_beneficiary must be set to true in order to
     * send payments to this counterparty</p><p>The view specified by VIEW_ID must
     * have the canAddCounterparty permission</p><p>Authentication is
     * Mandatory</p>
     * @summary Create counterparty for an account
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func210CreateCounterparty(body: PostCounterpartyJSON, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<CounterpartyJsonV220>;
    /**
     * <p>Add a customer linked to the user specified by user_id The Customer
     * resource stores the customer number, legal name, email, phone number, their
     * date of birth, relationship status, education attained, a url for a profile
     * image, KYC status etc. Dates need to be in the format
     * 2013-01-21T23:08:00Z</p><p>Authentication is
     * Mandatory</p><p>CanCreateCustomer and CanCreateUserCustomerLink OR
     * CanCreateCustomerAtAnyBank and CanCreateUserCustomerLinkAtAnyBank
     * entitlements required.</p>
     * @summary Create Customer.
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func210CreateCustomer(body: PostCustomerJsonV210, BANK_ID: string, extraHttpRequestParams?: any): Observable<CustomerJsonV210>;
    /**
     * <p>Create Transaction Types for the bank specified by BANK_ID:</p><ul>
     * <li>id : Unique transaction type id across the API instance. SHOULD be a
     * UUID. MUST be unique.</li>  <li>bank_id : The bank that supports this
     * TransactionType</li>  <li>short_code : A short code (SHOULD have no-spaces)
     * which MUST be unique across the bank. May be stored with Transactions to
     * link here</li>  <li>summary : A succinct summary</li>  <li>description : A
     * longer description</li>  <li>charge : The charge to the customer for each
     * one of these</li></ul><p>Authentication is Mandatory</p>
     * @summary Create Transaction Type offered by the bank
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func210CreateTransactionType(body: TransactionTypeJsonV200, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionType>;
    /**
     * <p>Enable/Disable a Consumer specified by CONSUMER_ID.</p>
     * @summary Enable or Disable Consumers
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    func210EnableDisableConsumers(body: PutEnabledJSON, CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<PutEnabledJSON>;
    /**
     * <p>Get the Consumer specified by CONSUMER_ID.</p>
     * @summary Get Consumer
     * @param CONSUMER_ID new consumer id
     */
    func210GetConsumer(CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<ConsumerJSON>;
    /**
     * <p>Get the all Consumers.</p>
     * @summary Get Consumers
     */
    func210GetConsumers(extraHttpRequestParams?: any): Observable<ConsumersJson>;
    /**
     * <p>Information about the currently authenticated user.</p><p>Authentication
     * via OAuth is required.</p>
     * @summary Get customer for logged in user
     * @param BANK_ID The bank id
     */
    func210GetCustomer(BANK_ID: string, extraHttpRequestParams?: any): Observable<CustomerJsonV210>;
    /**
     * <p>Information about the currently authenticated user.</p><p>Authentication
     * via OAuth is required.</p>
     * @summary Get all customers for logged in user
     */
    func210GetCustomers(extraHttpRequestParams?: any): Observable<MetricsJson>;
    /**
     * <p>Login is required.</p>
     * @summary Get Entitlements specified by BANK_ID and USER_ID
     * @param USER_ID The user id
     * @param BANK_ID The bank id
     */
    func210GetEntitlementsByBankAndUser(USER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<EntitlementJSONs>;
    /**
     * <p>Get the all metrics</p><p>require CanReadMetrics role</p><p>Filters Part
     * 1.*filtering* (no wilde cards etc.) parameters to GET
     * /management/metrics</p><p>Should be able to filter on the following metrics
     * fields</p><p>eg:
     * /management/metrics?start_date=2017-03-01&amp;end_date=2017-03-04&amp;limit=50&amp;offset=2</p><p>1
     * start_date (defaults to one week before current date):
     * eg:start_date=2017-03-01</p><p>2 end_date (defaults to current date)
     * eg:end_date=2017-03-05</p><p>3 limit (for pagination: defaults to 200)
     * eg:limit=200</p><p>4 offset (for pagination: zero index, defaults to 0) eg:
     * offset=10</p><p>eg:
     * /management/metrics?start_date=2016-03-05&amp;end_date=2017-03-08&amp;limit=10000&amp;offset=0&amp;anon=false&amp;app_name=hognwei&amp;implemented_in_version=v2.1.0&amp;verb=POST&amp;user_id=c7b6cb47-cb96-4441-8801-35b57456753a&amp;user_name=susan.uk.29@example.com&amp;consumer_id=78</p><p>Other
     * filters:</p><p>5 consumer_id (if null ignore)</p><p>6 user_id (if null
     * ignore)</p><p>7 anon (if null ignore) only support two value : true (return
     * where user_id is null.) or false (return where user_id is not
     * null.)</p><p>8 url (if null ignore), note: can not contain '&amp;'.
     * </p><p>9 app_name (if null ignore)</p><p>10 implemented_by_partial_function
     * (if null ignore),</p><p>11 implemented_in_version (if null ignore)</p><p>12
     * verb (if null ignore)</p>
     * @summary Get Metrics
     */
    func210GetMetrics(extraHttpRequestParams?: any): Observable<MetricsJson>;
    /**
     * <p>Returns information about the financial products offered by a bank
     * specified by BANK_ID and PRODUCT_CODE including:</p><ul>  <li>Name</li>
     * <li>Code</li>  <li>Category</li>  <li>Family</li>  <li>Super Family</li>
     * <li>More info URL</li>  <li>Description</li>  <li>Terms and Conditions</li>
     * <li>License the data under this endpoint is released under Authentication
     * is Optional</li></ul>
     * @summary Get Bank Product
     * @param BANK_ID The bank id
     */
    func210GetProduct(BANK_ID: string, extraHttpRequestParams?: any): Observable<ProductJsonV210>;
    /**
     * <p>Returns information about the financial products offered by a bank
     * specified by BANK_ID including:</p><ul>  <li>Name</li>  <li>Code</li>
     * <li>Category</li>  <li>Family</li>  <li>Super Family</li>  <li>More info
     * URL</li>  <li>Description</li>  <li>Terms and Conditions</li>  <li>License
     * the data under this endpoint is released under Authentication is
     * Optional</li></ul>
     * @summary Get Bank Products
     * @param BANK_ID The bank id
     */
    func210GetProducts(BANK_ID: string, extraHttpRequestParams?: any): Observable<ProductsJsonV210>;
    /**
     * <p>Returns all available roles</p><p>Login is required.</p>
     * @summary Get Roles
     */
    func210GetRoles(extraHttpRequestParams?: any): Observable<AvailableRolesJSON>;
    /**
     * <p>Get the list of the Transaction Request Types supported by the
     * bank.</p><p>Authentication is Optional</p>
     * @summary Get the Transaction Request Types supported by the bank
     * @param BANK_ID The bank id
     */
    func210GetTransactionRequestTypesSupportedByBank(BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionRequestTypesJSON>;
    /**
     * <p>Returns transaction requests for account specified by ACCOUNT_ID at bank
     * specified by BANK_ID.</p><p>The VIEW_ID specified must be 'owner' and the
     * user must have access to this view.</p><p>Version 2.0.0 now returns charge
     * information.</p><p>Transaction Requests serve to initiate transactions that
     * may or may not proceed. They contain information including:</p><ul>
     * <li>Transaction Request Id</li>  <li>Type</li>  <li>Status (INITIATED,
     * COMPLETED)</li>  <li>Challenge (in order to confirm the request)</li>
     * <li>From Bank / Account</li>  <li>Details including Currency, Value,
     * Description and other initiation information specific to each type. (Could
     * potentialy include a list of future transactions.)</li>  <li>Related
     * Transactions</li></ul><p>PSD2 Context: PSD2 requires transparency of
     * charges to the customer. This endpoint provides the charge that would be
     * applied if the Transaction Request proceeds - and a record of that charge
     * there after. The customer can proceed with the Transaction by answering the
     * security challenge.</p>
     * @summary Get Transaction Requests.
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func210GetTransactionRequests(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<TransactionRequestWithChargeJSONs210>;
    /**
     * <p>Get all users</p><p>Login is required. CanGetAnyUser entitlement is
     * required,</p>
     * @summary Get all Users
     */
    func210GetUsers(extraHttpRequestParams?: any): Observable<UsersJSONV200>;
    /**
     * <p>Import bulk data into the sandbox (Authenticated access).</p><p>This
     * call can be used to create banks, users, accounts and transactions which
     * are stored in the local RDBMS.</p><p>The user needs to have
     * CanCreateSandbox entitlement.</p><p>An example of an import set of data
     * (json) can be found <a
     * href=\"https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\">here</a>
     * Authentication is Mandatory</p>
     * @summary Create sandbox
     * @param body BANK_BODY
     */
    func210SandboxDataImport(body: any, extraHttpRequestParams?: any): Observable<SuccessMessage>;
    /**
     * <p>Update an existing branch for a bank account (Authenticated access).
     * Authentication is Mandatory</p>
     * @summary Update Branch
     * @param body BANK_BODY
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    func210UpdateBranch(body: BranchJsonPutV210, BRANCH_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<BranchJson>;
    /**
     * <p>Update an existing redirectUrl for a Consumer specified by
     * CONSUMER_ID.</p><p>CONSUMER_ID can be obtained after you register the
     * application. </p><p>Or use the endpoint 'Get Consumers' to get it </p>
     * @summary Update Consumer RedirectUrl
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    func210UpdateConsumerRedirectUrl(body: ConsumerRedirectUrlJSON, CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<ConsumerJSON>;
    /**
     * Add cards for a bank
     * &lt;p&gt;Import bulk data into the sandbox (Authenticated
     * access).&lt;/p&gt;&lt;p&gt;This is can be used to create cards which are
     * stored in the local RDBMS. Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func210AddCardsForBankWithHttpInfo(body: PostPhysicalCardJSON, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create counterparty for an account
     * &lt;p&gt;Create counterparty.&lt;/p&gt;&lt;p&gt;Counterparties are created
     * for the account / view They are how the user of the view (e.g. account
     * owner) refers to the other side of the transaction&lt;/p&gt;&lt;p&gt;name
     * is the human readable name (e.g. Piano teacher, Miss
     * Nipa)&lt;/p&gt;&lt;p&gt;other_bank_id is an (internal) ID for the bank of
     * the bank of the counterparty (if known)&lt;/p&gt;&lt;p&gt;other_account_id
     * is an (internal) ID for the bank account of the counterparty (if
     * known)&lt;/p&gt;&lt;p&gt;other_account_provider is a code that tells the
     * system where that bank is hosted. Will be OBP if its known to the API.
     * Usage of this flag (in API / connectors) is work in
     * progress.&lt;/p&gt;&lt;p&gt;account_routing_scheme is a code that dictates
     * the nature of the account_routing_address e.g.
     * IBAN&lt;/p&gt;&lt;p&gt;account_routing_address is an instance of
     * account_routing_scheme that can be used to route payments to external
     * systems. e.g. an IBAN number&lt;/p&gt;&lt;p&gt;bank_routing_scheme is a
     * code that dictates the nature of the bank_routing_address e.g.
     * \&quot;BIC\&quot;,&lt;/p&gt;&lt;p&gt;bank_routing_address is an instance of
     * bank_routing_scheme&lt;/p&gt;&lt;p&gt;is_beneficiary must be set to true in
     * order to send payments to this counterparty&lt;/p&gt;&lt;p&gt;The view
     * specified by VIEW_ID must have the canAddCounterparty
     * permission&lt;/p&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func210CreateCounterpartyWithHttpInfo(body: PostCounterpartyJSON, VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Customer.
     * &lt;p&gt;Add a customer linked to the user specified by user_id The
     * Customer resource stores the customer number, legal name, email, phone
     * number, their date of birth, relationship status, education attained, a url
     * for a profile image, KYC status etc. Dates need to be in the format
     * 2013-01-21T23:08:00Z&lt;/p&gt;&lt;p&gt;Authentication is
     * Mandatory&lt;/p&gt;&lt;p&gt;CanCreateCustomer and CanCreateUserCustomerLink
     * OR CanCreateCustomerAtAnyBank and CanCreateUserCustomerLinkAtAnyBank
     * entitlements required.&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func210CreateCustomerWithHttpInfo(body: PostCustomerJsonV210, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create Transaction Type offered by the bank
     * &lt;p&gt;Create Transaction Types for the bank specified by
     * BANK_ID:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;id : Unique transaction type id
     * across the API instance. SHOULD be a UUID. MUST be unique.&lt;/li&gt;
     * &lt;li&gt;bank_id : The bank that supports this TransactionType&lt;/li&gt;
     * &lt;li&gt;short_code : A short code (SHOULD have no-spaces) which MUST be
     * unique across the bank. May be stored with Transactions to link
     * here&lt;/li&gt;  &lt;li&gt;summary : A succinct summary&lt;/li&gt;
     * &lt;li&gt;description : A longer description&lt;/li&gt;  &lt;li&gt;charge :
     * The charge to the customer for each one of
     * these&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param BANK_ID The bank id
     */
    func210CreateTransactionTypeWithHttpInfo(body: TransactionTypeJsonV200, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Enable or Disable Consumers
     * &lt;p&gt;Enable/Disable a Consumer specified by CONSUMER_ID.&lt;/p&gt;
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    func210EnableDisableConsumersWithHttpInfo(body: PutEnabledJSON, CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Consumer
     * &lt;p&gt;Get the Consumer specified by CONSUMER_ID.&lt;/p&gt;
     * @param CONSUMER_ID new consumer id
     */
    func210GetConsumerWithHttpInfo(CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Consumers
     * &lt;p&gt;Get the all Consumers.&lt;/p&gt;
     */
    func210GetConsumersWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get customer for logged in user
     * &lt;p&gt;Information about the currently authenticated
     * user.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required.&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func210GetCustomerWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get all customers for logged in user
     * &lt;p&gt;Information about the currently authenticated
     * user.&lt;/p&gt;&lt;p&gt;Authentication via OAuth is required.&lt;/p&gt;
     */
    func210GetCustomersWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Entitlements specified by BANK_ID and USER_ID
     * &lt;p&gt;Login is required.&lt;/p&gt;
     * @param USER_ID The user id
     * @param BANK_ID The bank id
     */
    func210GetEntitlementsByBankAndUserWithHttpInfo(USER_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Metrics
     * &lt;p&gt;Get the all metrics&lt;/p&gt;&lt;p&gt;require CanReadMetrics
     * role&lt;/p&gt;&lt;p&gt;Filters Part 1.*filtering* (no wilde cards etc.)
     * parameters to GET /management/metrics&lt;/p&gt;&lt;p&gt;Should be able to
     * filter on the following metrics fields&lt;/p&gt;&lt;p&gt;eg:
     * /management/metrics?start_date&#x3D;2017-03-01&amp;amp;end_date&#x3D;2017-03-04&amp;amp;limit&#x3D;50&amp;amp;offset&#x3D;2&lt;/p&gt;&lt;p&gt;1
     * start_date (defaults to one week before current date):
     * eg:start_date&#x3D;2017-03-01&lt;/p&gt;&lt;p&gt;2 end_date (defaults to
     * current date) eg:end_date&#x3D;2017-03-05&lt;/p&gt;&lt;p&gt;3 limit (for
     * pagination: defaults to 200) eg:limit&#x3D;200&lt;/p&gt;&lt;p&gt;4 offset
     * (for pagination: zero index, defaults to 0) eg:
     * offset&#x3D;10&lt;/p&gt;&lt;p&gt;eg:
     * /management/metrics?start_date&#x3D;2016-03-05&amp;amp;end_date&#x3D;2017-03-08&amp;amp;limit&#x3D;10000&amp;amp;offset&#x3D;0&amp;amp;anon&#x3D;false&amp;amp;app_name&#x3D;hognwei&amp;amp;implemented_in_version&#x3D;v2.1.0&amp;amp;verb&#x3D;POST&amp;amp;user_id&#x3D;c7b6cb47-cb96-4441-8801-35b57456753a&amp;amp;user_name&#x3D;susan.uk.29@example.com&amp;amp;consumer_id&#x3D;78&lt;/p&gt;&lt;p&gt;Other
     * filters:&lt;/p&gt;&lt;p&gt;5 consumer_id (if null
     * ignore)&lt;/p&gt;&lt;p&gt;6 user_id (if null ignore)&lt;/p&gt;&lt;p&gt;7
     * anon (if null ignore) only support two value : true (return where user_id
     * is null.) or false (return where user_id is not null.)&lt;/p&gt;&lt;p&gt;8
     * url (if null ignore), note: can not contain &#39;&amp;amp;&#39;.
     * &lt;/p&gt;&lt;p&gt;9 app_name (if null ignore)&lt;/p&gt;&lt;p&gt;10
     * implemented_by_partial_function (if null ignore),&lt;/p&gt;&lt;p&gt;11
     * implemented_in_version (if null ignore)&lt;/p&gt;&lt;p&gt;12 verb (if null
     * ignore)&lt;/p&gt;
     */
    func210GetMetricsWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank Product
     * &lt;p&gt;Returns information about the financial products offered by a bank
     * specified by BANK_ID and PRODUCT_CODE including:&lt;/p&gt;&lt;ul&gt;
     * &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Code&lt;/li&gt;
     * &lt;li&gt;Category&lt;/li&gt;  &lt;li&gt;Family&lt;/li&gt;  &lt;li&gt;Super
     * Family&lt;/li&gt;  &lt;li&gt;More info URL&lt;/li&gt;
     * &lt;li&gt;Description&lt;/li&gt;  &lt;li&gt;Terms and Conditions&lt;/li&gt;
     * &lt;li&gt;License the data under this endpoint is released under
     * Authentication is Optional&lt;/li&gt;&lt;/ul&gt;
     * @param BANK_ID The bank id
     */
    func210GetProductWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Bank Products
     * &lt;p&gt;Returns information about the financial products offered by a bank
     * specified by BANK_ID including:&lt;/p&gt;&lt;ul&gt;
     * &lt;li&gt;Name&lt;/li&gt;  &lt;li&gt;Code&lt;/li&gt;
     * &lt;li&gt;Category&lt;/li&gt;  &lt;li&gt;Family&lt;/li&gt;  &lt;li&gt;Super
     * Family&lt;/li&gt;  &lt;li&gt;More info URL&lt;/li&gt;
     * &lt;li&gt;Description&lt;/li&gt;  &lt;li&gt;Terms and Conditions&lt;/li&gt;
     * &lt;li&gt;License the data under this endpoint is released under
     * Authentication is Optional&lt;/li&gt;&lt;/ul&gt;
     * @param BANK_ID The bank id
     */
    func210GetProductsWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Roles
     * &lt;p&gt;Returns all available roles&lt;/p&gt;&lt;p&gt;Login is
     * required.&lt;/p&gt;
     */
    func210GetRolesWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get the Transaction Request Types supported by the bank
     * &lt;p&gt;Get the list of the Transaction Request Types supported by the
     * bank.&lt;/p&gt;&lt;p&gt;Authentication is Optional&lt;/p&gt;
     * @param BANK_ID The bank id
     */
    func210GetTransactionRequestTypesSupportedByBankWithHttpInfo(BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get Transaction Requests.
     * &lt;p&gt;Returns transaction requests for account specified by ACCOUNT_ID
     * at bank specified by BANK_ID.&lt;/p&gt;&lt;p&gt;The VIEW_ID specified must
     * be &#39;owner&#39; and the user must have access to this
     * view.&lt;/p&gt;&lt;p&gt;Version 2.0.0 now returns charge
     * information.&lt;/p&gt;&lt;p&gt;Transaction Requests serve to initiate
     * transactions that may or may not proceed. They contain information
     * including:&lt;/p&gt;&lt;ul&gt;  &lt;li&gt;Transaction Request Id&lt;/li&gt;
     * &lt;li&gt;Type&lt;/li&gt;  &lt;li&gt;Status (INITIATED,
     * COMPLETED)&lt;/li&gt;  &lt;li&gt;Challenge (in order to confirm the
     * request)&lt;/li&gt;  &lt;li&gt;From Bank / Account&lt;/li&gt;
     * &lt;li&gt;Details including Currency, Value, Description and other
     * initiation information specific to each type. (Could potentialy include a
     * list of future transactions.)&lt;/li&gt;  &lt;li&gt;Related
     * Transactions&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;PSD2 Context: PSD2 requires
     * transparency of charges to the customer. This endpoint provides the charge
     * that would be applied if the Transaction Request proceeds - and a record of
     * that charge there after. The customer can proceed with the Transaction by
     * answering the security challenge.&lt;/p&gt;
     * @param VIEW_ID The view id
     * @param ACCOUNT_ID The account id
     * @param BANK_ID The bank id
     */
    func210GetTransactionRequestsWithHttpInfo(VIEW_ID: string, ACCOUNT_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Get all Users
     * &lt;p&gt;Get all users&lt;/p&gt;&lt;p&gt;Login is required. CanGetAnyUser
     * entitlement is required,&lt;/p&gt;
     */
    func210GetUsersWithHttpInfo(extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Create sandbox
     * &lt;p&gt;Import bulk data into the sandbox (Authenticated
     * access).&lt;/p&gt;&lt;p&gt;This call can be used to create banks, users,
     * accounts and transactions which are stored in the local
     * RDBMS.&lt;/p&gt;&lt;p&gt;The user needs to have CanCreateSandbox
     * entitlement.&lt;/p&gt;&lt;p&gt;An example of an import set of data (json)
     * can be found &lt;a
     * href&#x3D;\&quot;https://raw.githubusercontent.com/OpenBankProject/OBP-API/develop/src/main/scala/code/api/sandbox/example_data/2016-04-28/example_import.json\&quot;&gt;here&lt;/a&gt;
     * Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     */
    func210SandboxDataImportWithHttpInfo(body: any, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Branch
     * &lt;p&gt;Update an existing branch for a bank account (Authenticated
     * access). Authentication is Mandatory&lt;/p&gt;
     * @param body BANK_BODY
     * @param BRANCH_ID The branch id
     * @param BANK_ID The bank id
     */
    func210UpdateBranchWithHttpInfo(body: BranchJsonPutV210, BRANCH_ID: string, BANK_ID: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * Update Consumer RedirectUrl
     * &lt;p&gt;Update an existing redirectUrl for a Consumer specified by
     * CONSUMER_ID.&lt;/p&gt;&lt;p&gt;CONSUMER_ID can be obtained after you
     * register the application. &lt;/p&gt;&lt;p&gt;Or use the endpoint &#39;Get
     * Consumers&#39; to get it &lt;/p&gt;
     * @param body BANK_BODY
     * @param CONSUMER_ID new consumer id
     */
    func210UpdateConsumerRedirectUrlWithHttpInfo(body: ConsumerRedirectUrlJSON, CONSUMER_ID: string, extraHttpRequestParams?: any): Observable<Response>;
}