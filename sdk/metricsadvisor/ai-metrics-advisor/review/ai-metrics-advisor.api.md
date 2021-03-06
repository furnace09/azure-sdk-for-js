## API Report File for "@azure/ai-metrics-advisor"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreHttp from '@azure/core-http';
import { OperationOptions } from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PipelineOptions } from '@azure/core-http';
import { RestResponse } from '@azure/core-http';

// @public
export interface Alert {
    createdOn?: Date;
    id: string;
    modifiedOn?: Date;
    timestamp?: Date;
}

// @public (undocumented)
export interface AlertSnoozeCondition {
    autoSnooze: number;
    onlyForSuccessive: boolean;
    snoozeScope: SnoozeScope;
}

// @public
export interface Anomaly {
    createdOn?: Date;
    detectionConfigurationId: string;
    dimension: Record<string, string>;
    metricId?: string;
    modifiedOn?: Date;
    severity: "Low" | "Medium" | "High";
    status?: "Active" | "Resolved";
    timestamp: Date;
}

// @public
export interface AnomalyAlertConfiguration {
    crossMetricsOperator?: MetricAnomalyAlertConfigurationsOperator;
    description?: string;
    hookIds: string[];
    id: string;
    metricAlertConfigurations: MetricAlertConfiguration[];
    name: string;
}

// @public
export interface AnomalyDetectionConfiguration {
    description?: string;
    id: string;
    metricId: string;
    name: string;
    seriesDetectionConditions?: MetricSingleSeriesDetectionCondition[];
    seriesGroupDetectionConditions?: MetricSeriesGroupDetectionCondition[];
    wholeSeriesDetectionCondition: MetricDetectionCondition;
}

// @public
export type AnomalyDetectorDirection = "Both" | "Down" | "Up";

// @public
export type AnomalyValue = "AutoDetect" | "Anomaly" | "NotAnomaly";

// @public
export type AzureApplicationInsightsDataFeedSource = {
    dataSourceType: "AzureApplicationInsights";
    dataSourceParameter: AzureApplicationInsightsParameter;
};

// @public (undocumented)
export interface AzureApplicationInsightsParameter {
    apiKey: string;
    applicationId: string;
    azureCloud: string;
    query: string;
}

// @public
export type AzureBlobDataFeedSource = {
    dataSourceType: "AzureBlob";
    dataSourceParameter: AzureBlobParameter;
};

// @public (undocumented)
export interface AzureBlobParameter {
    blobTemplate: string;
    connectionString: string;
    container: string;
}

// @public
export type AzureCosmosDBDataFeedSource = {
    dataSourceType: "AzureCosmosDB";
    dataSourceParameter: AzureCosmosDBParameter;
};

// @public (undocumented)
export interface AzureCosmosDBParameter {
    collectionId: string;
    connectionString: string;
    database: string;
    sqlQuery: string;
}

// @public
export type AzureDataExplorerDataFeedSource = {
    dataSourceType: "AzureDataExplorer";
    dataSourceParameter: SqlSourceParameter;
};

// @public
export type AzureDataLakeStorageGen2DataFeedSource = {
    dataSourceType: "AzureDataLakeStorageGen2";
    dataSourceParameter: AzureDataLakeStorageGen2Parameter;
};

// @public (undocumented)
export interface AzureDataLakeStorageGen2Parameter {
    accountKey: string;
    accountName: string;
    directoryTemplate: string;
    fileSystemName: string;
    fileTemplate: string;
}

// @public
export type AzureTableDataFeedSource = {
    dataSourceType: "AzureTable";
    dataSourceParameter: AzureTableParameter;
};

// @public (undocumented)
export interface AzureTableParameter {
    connectionString: string;
    query: string;
    table: string;
}

// @public
export type ChangeThresholdConditionUnion = {
    changePercentage: number;
    shiftPoint: number;
    withinRange: true;
    anomalyDetectorDirection: "Both";
    suppressCondition: SuppressCondition;
} | {
    changePercentage: number;
    shiftPoint: number;
    withinRange: false;
    anomalyDetectorDirection: "Up" | "Down";
    suppressCondition: SuppressCondition;
};

// @public
export type CreateDataFeedOptions = DataFeedOptions & OperationOptions;

// @public
export interface DataFeed {
    createdTime: Date;
    creator: string;
    granularity: DataFeedGranularity;
    id: string;
    ingestionSettings: DataFeedIngestionSettings;
    isAdmin: boolean;
    metricIds: string[];
    name: string;
    options?: DataFeedOptions;
    schema: DataFeedSchema;
    source: DataFeedSource;
    status: "Paused" | "Active";
}

// @public
export type DataFeedAccessMode = "Private" | "Public";

// @public
export type DataFeedDetailStatus = "Active" | "Paused";

// @public
export type DataFeedGranularity = {
    granularityType: "Yearly" | "Monthly" | "Weekly" | "Daily" | "Hourly" | "Minutely" | "Secondly";
} | {
    granularityType: "Custom";
    customGranularityValue: number;
};

// @public (undocumented)
export interface DataFeedIngestionProgress {
    readonly latestActiveTimestamp?: Date;
    readonly latestSuccessTimestamp?: Date;
}

// @public
export interface DataFeedIngestionSettings {
    dataSourceRequestConcurrency?: number;
    ingestionRetryDelayInSeconds?: number;
    ingestionStartOffsetInSeconds?: number;
    ingestionStartTime: Date;
    stopRetryAfterInSeconds?: number;
}

// @public
export type DataFeedMissingDataPointFillSettings = {
    fillType: "SmartFilling" | "PreviousValue" | "NoFilling";
} | {
    fillType: "CustomValue";
    customFillValue: number;
};

// @public
export interface DataFeedOptions {
    accessMode?: DataFeedAccessMode;
    actionLinkTemplate?: string;
    admins?: string[];
    dataFeedDescription?: string;
    missingDataPointFillSettings?: DataFeedMissingDataPointFillSettings;
    rollupSettings?: DataFeedRollupSettings;
    viewers?: string[];
}

// @public
export interface DataFeedPatch {
    ingestionSettings?: DataFeedIngestionSettings;
    name?: string;
    options?: DataFeedOptions & {
        status?: DataFeedDetailStatus;
    };
    schema?: {
        timestampColumn?: string;
    };
    source: DataFeedSourcePatch;
}

// @public
export type DataFeedRollupMethod = "None" | "Sum" | "Max" | "Min" | "Avg" | "Count";

// @public
export type DataFeedRollupSettings = {
    rollupType: "NoRollup";
} | {
    rollupType: "AlreadyRollup";
    rollupIdentificationValue?: string;
} | {
    rollupType: "AutoRollup";
    autoRollupGroupByColumnNames?: string[];
    rollupMethod?: DataFeedRollupMethod;
    rollupIdentificationValue?: string;
};

// @public
export interface DataFeedSchema {
    dimensions?: Dimension[];
    metrics: Metric[];
    timestampColumn?: string;
}

// @public
export type DataFeedSource = AzureApplicationInsightsDataFeedSource | AzureBlobDataFeedSource | AzureCosmosDBDataFeedSource | AzureDataExplorerDataFeedSource | AzureDataLakeStorageGen2DataFeedSource | AzureTableDataFeedSource | ElasticsearchDataFeedSource | HttpRequestDataFeedSource | InfluxDBDataFeedSource | MySqlDataFeedSource | PostgreSqlDataFeedSource | SQLServerDataFeedSource | MongoDBDataFeedSource;

// @public
export type DataFeedSourcePatch = Omit<DataFeedSource, "dataSourceParameter"> & {
    [P in "dataSourceParameter"]?: DataFeedSource[P];
};

// @public
export type DataSourceType = "AzureApplicationInsights" | "AzureBlob" | "AzureCosmosDB" | "AzureDataExplorer" | "AzureDataLakeStorageGen2" | "AzureTable" | "Elasticsearch" | "HttpRequest" | "InfluxDB" | "MongoDB" | "MySql" | "PostgreSql" | "SqlServer";

// @public
export interface DetectionConditionsCommon {
    changeThresholdCondition?: ChangeThresholdConditionUnion;
    conditionOperator?: DetectionConditionsOperator;
    hardThresholdCondition?: HardThresholdConditionUnion;
    smartDetectionCondition?: SmartDetectionCondition;
}

// @public
export type DetectionConditionsOperator = "AND" | "OR";

// @public
export interface Dimension {
    displayName?: string;
    name: string;
}

// @public
export type DimensionKey = {
    dimension: Record<string, string>;
};

// @public
export type ElasticsearchDataFeedSource = {
    dataSourceType: "Elasticsearch";
    dataSourceParameter: ElasticsearchParameter;
};

// @public (undocumented)
export interface ElasticsearchParameter {
    authHeader: string;
    host: string;
    port: string;
    query: string;
}

// @public
export type EmailHook = {
    hookType: "Email";
    hookParameter: EmailHookParameter;
} & HookCommon;

// @public (undocumented)
export interface EmailHookParameter {
    toList: string[];
}

// @public
export type EmailHookPatch = {
    hookType: "Email";
    hookParameter?: EmailHookParameter;
} & HookPatchCommon;

// @public (undocumented)
export interface EnrichmentStatus {
    readonly message?: string;
    readonly status?: string;
    readonly timestamp?: Date;
}

// @public
export type EntityStatus = "Active" | "Paused";

// @public
export type FeedbackQueryTimeMode = "MetricTimestamp" | "FeedbackCreatedTime";

// @public
export type FeedbackType = "Anomaly" | "ChangePoint" | "Period" | "Comment";

// @public
export type GeneratedClientGetIngestionProgressResponse = DataFeedIngestionProgress & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: DataFeedIngestionProgress;
    };
};

// @public
export type GetAnomalyAlertConfigurationResponse = AnomalyAlertConfiguration & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetAnomalyDetectionConfigurationResponse = AnomalyDetectionConfiguration & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetDataFeedResponse = DataFeed & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetFeedbackResponse = MetricFeedbackUnion & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetHookResponse = HookUnion & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetIncidentRootCauseResponse = {
    rootCauses: IncidentRootCause[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetMetricEnrichedSeriesDataOptions = {
    skip?: number;
} & OperationOptions;

// @public
export type GetMetricEnrichedSeriesDataResponse = {
    results?: MetricEnrichedSeriesData[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type GetMetricFeedbackResponse = {
    body: MetricFeedbackUnion;
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: MetricFeedbackUnion;
    };
};

// @public
export type GetMetricSeriesDataOptions = {
    skip?: number;
} & OperationOptions;

// @public
export type GetMetricSeriesDataResponse = {
    metricSeriesDataList?: MetricSeriesData[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type HardThresholdConditionUnion = {
    lowerBound: number;
    anomalyDetectorDirection: "Down";
    suppressCondition: SuppressCondition;
} | {
    upperBound: number;
    anomalyDetectorDirection: "Up";
    suppressCondition: SuppressCondition;
} | {
    lowerBound: number;
    upperBound: number;
    anomalyDetectorDirection: "Both";
    suppressCondition: SuppressCondition;
};

// @public
export interface HookCommon {
    readonly admins?: string[];
    description?: string;
    externalLink?: string;
    readonly id?: string;
    name: string;
}

// @public
export type HookPatchCommon = {
    hookName?: string;
    description?: string;
    externalLink?: string;
};

// @public
export type HookUnion = EmailHook | WebhookHook;

// @public
export type HttpRequestDataFeedSource = {
    dataSourceType: "HttpRequest";
    dataSourceParameter: HttpRequestParameter;
};

// @public (undocumented)
export interface HttpRequestParameter {
    httpHeader: string;
    httpMethod: string;
    payload: string;
    url: string;
}

// @public
export interface Incident {
    detectionConfigurationId: string;
    dimensionKey: DimensionKey;
    id: string;
    lastOccuredTime: Date;
    metricId?: string;
    severity: "Low" | "Medium" | "High";
    startTime?: Date;
    status?: "Active" | "Resolved";
}

// @public
export interface IncidentRootCause {
    description: string;
    dimensionKey: DimensionKey;
    path: string[];
    score: number;
}

// @public
export type InfluxDBDataFeedSource = {
    dataSourceType: "InfluxDB";
    dataSourceParameter: InfluxDBParameter;
};

// @public (undocumented)
export interface InfluxDBParameter {
    connectionString: string;
    database: string;
    password: string;
    query: string;
    userName: string;
}

// @public (undocumented)
export interface IngestionStatus {
    readonly message?: string;
    readonly status?: IngestionStatusType;
    readonly timestamp?: Date;
}

// @public
export type IngestionStatusType = "NotStarted" | "Scheduled" | "Running" | "Succeeded" | "Failed" | "NoData" | "Error" | "Paused";

// @public
export type ListAlertsForAlertConfigurationPageResponse = {
    alerts?: Alert[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListAlertsOptions = {
    skip?: number;
} & OperationOptions;

// @public
export type ListAnomaliesForAlertConfigurationOptions = {
    skip?: number;
} & OperationOptions;

// @public
export type ListAnomaliesForAlertPageResponse = {
    anomalies?: Anomaly[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListAnomaliesForDetectionConfigurationOptions = {
    skip?: number;
    dimensionFilter?: DimensionKey[];
    severityFilter?: SeverityFilterCondition;
} & OperationOptions;

// @public
export type ListAnomaliesForDetectionConfigurationPageResponse = {
    anomalies?: Anomaly[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListAnomalyAlertConfigurationsPageResponse = {
    alertConfigurations?: AnomalyAlertConfiguration[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListAnomalyDetectionConfigurationsPageResponse = {
    detectionConfigurations?: AnomalyDetectionConfiguration[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListDataFeedIngestionStatusOptions = {
    skip?: number;
} & OperationOptions;

// @public
export type ListDataFeedIngestionStatusPageResponse = {
    statusList?: IngestionStatus[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListDataFeedsOptions = {
    skip?: number;
    filter?: {
        dataFeedName?: string;
        dataSourceType?: DataSourceType;
        granularity?: DataFeedGranularity;
        status?: EntityStatus;
        creator?: string;
    };
} & OperationOptions;

// @public
export type ListDataFeedsPageResponse = {
    dataFeeds?: DataFeed[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListDimensionValuesForDetectionConfigurationOptions = {
    skip?: number;
    dimensionFilter?: DimensionKey;
} & OperationOptions;

// @public
export type ListDimensionValuesForDetectionConfigurationPageResponse = {
    dimensionValues?: string[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListFeedbacksOptions = {
    skip?: number;
    filter?: {
        dimensionFilter?: DimensionKey;
        feedbackType?: FeedbackType;
        startTime?: Date;
        endTime?: Date;
        timeMode?: FeedbackQueryTimeMode;
    };
} & OperationOptions;

// @public
export type ListHooksOptions = {
    skip?: number;
    hookName?: string;
} & OperationOptions;

// @public
export type ListHooksPageResponse = {
    hooks?: HookUnion[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListIncidentsByDetectionConfigurationPageResponse = {
    incidents?: Incident[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListIncidentsForAlertOptions = {
    skip?: number;
} & OperationOptions;

// @public
export type ListIncidentsForAlertPageResponse = {
    incidents?: Incident[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListIncidentsForDetectionConfigurationOptions = {
    dimensionFilter?: DimensionKey[];
} & OperationOptions;

// @public
export type ListMetricDimensionValuesOptions = {
    skip?: number;
    dimensionValueFilter?: string;
} & OperationOptions;

// @public
export type ListMetricDimensionValuesPageResponse = {
    dimensionValues?: string[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListMetricEnrichmentStatusOptions = {
    skip?: number;
} & OperationOptions;

// @public
export type ListMetricEnrichmentStatusPageResponse = {
    statusList?: EnrichmentStatus[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListMetricFeedbackPageResponse = {
    feedbacks?: MetricFeedbackUnion[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export type ListMetricSeriesDefinitionsOptions = {
    skip?: number;
    dimensionFilter?: Record<string, string[]>;
} & OperationOptions;

// @public
export type ListMetricSeriesPageResponse = {
    definitions?: MetricSeriesDefinition[];
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: any;
    };
};

// @public
export interface Metric {
    description?: string;
    displayName?: string;
    readonly id?: string;
    name: string;
}

// @public (undocumented)
export interface MetricAlertConditions {
    metricBoundaryCondition?: MetricBoundaryCondition;
    severityCondition?: SeverityCondition;
}

// @public (undocumented)
export interface MetricAlertConfiguration {
    alertConditions?: MetricAlertConditions;
    alertScope: MetricAnomalyAlertScope;
    detectionConfigurationId: string;
    negationOperation?: boolean;
    snoozeCondition?: AlertSnoozeCondition;
}

// @public
export type MetricAnomalyAlertConfigurationsOperator = "AND" | "OR" | "XOR";

// @public
export type MetricAnomalyAlertScope = {
    scopeType: "All";
} | {
    scopeType: "Dimension";
    dimensionAnomalyScope: DimensionKey;
} | {
    scopeType: "TopN";
    topNAnomalyScope: TopNGroupScope;
};

// @public
export type MetricAnomalyFeedback = {
    feedbackType: "Anomaly";
    startTime: Date;
    endTime: Date;
    value: "AutoDetect" | "Anomaly" | "NotAnomaly";
    anomalyDetectionConfigurationId?: string;
    anomalyDetectionConfigurationSnapshot?: AnomalyDetectionConfiguration;
} & MetricFeedbackCommon;

// @public
export type MetricBoundaryCondition = {
    direction: "Down";
    lower: number;
    metricId?: string;
    triggerForMissing?: boolean;
} | {
    direction: "Up";
    upper: number;
    metricId?: string;
    triggerForMissing?: boolean;
} | {
    lower: number;
    upper: number;
    direction: "Both";
    metricId?: string;
    triggerForMissing?: boolean;
};

// @public
export type MetricChangePointFeedback = {
    feedbackType: "ChangePoint";
    startTime: Date;
    value: "AutoDetect" | "ChangePoint" | "NotChangePoint";
} & MetricFeedbackCommon;

// @public
export type MetricCommentFeedback = {
    feedbackType: "Comment";
    startTime?: Date;
    endTime?: Date;
    comment: string;
} & MetricFeedbackCommon;

// @public
export type MetricDetectionCondition = DetectionConditionsCommon;

// @public
export interface MetricEnrichedSeriesData {
    expectedValueList?: number[];
    isAnomalyList?: boolean[];
    lowerBoundaryList?: number[];
    periodList?: number[];
    series: DimensionKey;
    timestampList?: Date[];
    upperBoundaryList?: number[];
    valueList?: number[];
}

// @public
export interface MetricFeedbackCommon {
    readonly createdTime?: Date;
    dimensionFilter: DimensionKey;
    readonly id?: string;
    metricId: string;
    readonly userPrincipal?: string;
}

// @public
export type MetricFeedbackUnion = MetricAnomalyFeedback | MetricChangePointFeedback | MetricCommentFeedback | MetricPeriodFeedback;

// @public
export type MetricPeriodFeedback = {
    feedbackType: "Period";
    periodType: "AutoDetect" | "AssignValue";
    periodValue: number;
} & MetricFeedbackCommon;

// @public
export class MetricsAdvisorAdministrationClient {
    constructor(endpointUrl: string, credential: MetricsAdvisorKeyCredential, options?: MetricsAdvisorAdministrationClientOptions);
    createAnomalyAlertConfiguration(config: Omit<AnomalyAlertConfiguration, "id">, options?: OperationOptions): Promise<GetAnomalyAlertConfigurationResponse>;
    createDataFeed(feed: Omit<DataFeed, "id" | "metricIds" | "isAdmin" | "status" | "creator" | "createdTime">, operationOptions?: OperationOptions): Promise<GetDataFeedResponse>;
    createHook(hookInfo: EmailHook | WebhookHook, options?: OperationOptions): Promise<GetHookResponse>;
    createMetricAnomalyDetectionConfiguration(config: Omit<AnomalyDetectionConfiguration, "id">, options?: OperationOptions): Promise<GetAnomalyDetectionConfigurationResponse>;
    deleteAnomalyAlertConfiguration(id: string, options?: OperationOptions): Promise<RestResponse>;
    deleteDataFeed(id: string, options?: OperationOptions): Promise<RestResponse>;
    deleteHook(id: string, options?: OperationOptions): Promise<RestResponse>;
    deleteMetricAnomalyDetectionConfiguration(id: string, options?: OperationOptions): Promise<RestResponse>;
    readonly endpointUrl: string;
    getAnomalyAlertConfiguration(id: string, options?: OperationOptions): Promise<GetAnomalyAlertConfigurationResponse>;
    getDataFeed(id: string, options?: OperationOptions): Promise<GetDataFeedResponse>;
    getDataFeedIngestionProgress(dataFeedId: string, options?: {}): Promise<GeneratedClientGetIngestionProgressResponse>;
    getHook(id: string, options?: OperationOptions): Promise<GetHookResponse>;
    getMetricAnomalyDetectionConfiguration(id: string, options?: OperationOptions): Promise<GetAnomalyDetectionConfigurationResponse>;
    listAnomalyAlertConfigurations(detectionConfigId: string, options?: OperationOptions): PagedAsyncIterableIterator<AnomalyAlertConfiguration, ListAnomalyAlertConfigurationsPageResponse, undefined>;
    listDataFeedIngestionStatus(dataFeedId: string, startTime: Date, endTime: Date, options?: ListDataFeedIngestionStatusOptions): PagedAsyncIterableIterator<IngestionStatus, ListDataFeedIngestionStatusPageResponse>;
    listDataFeeds(options?: ListDataFeedsOptions): PagedAsyncIterableIterator<DataFeed, ListDataFeedsPageResponse>;
    listHooks(options?: ListHooksOptions): PagedAsyncIterableIterator<HookUnion, ListHooksPageResponse>;
    listMetricAnomalyDetectionConfigurations(metricId: string, options?: OperationOptions): PagedAsyncIterableIterator<AnomalyDetectionConfiguration, ListAnomalyDetectionConfigurationsPageResponse, undefined>;
    refreshDataFeedIngestion(dataFeedId: string, startTime: Date, endTime: Date, options?: OperationOptions): Promise<RestResponse>;
    updateAnomalyAlertConfiguration(id: string, patch: Partial<Omit<AnomalyAlertConfiguration, "id">>, options?: OperationOptions): Promise<GetAnomalyAlertConfigurationResponse>;
    updateDataFeed(dataFeedId: string, patch: DataFeedPatch, options?: OperationOptions): Promise<GetDataFeedResponse>;
    updateHook(id: string, patch: EmailHookPatch | WebhookHookPatch, options?: OperationOptions): Promise<GetHookResponse>;
    updateMetricAnomalyDetectionConfiguration(id: string, patch: Partial<Omit<AnomalyDetectionConfiguration, "id" | "metricId">>, options?: OperationOptions): Promise<GetAnomalyDetectionConfigurationResponse>;
}

// @public
export interface MetricsAdvisorAdministrationClientOptions extends PipelineOptions {
}

// @public
export class MetricsAdvisorClient {
    constructor(endpointUrl: string, credential: MetricsAdvisorKeyCredential, options?: MetricsAdvisorClientOptions);
    createMetricFeedback(feedback: MetricFeedbackUnion, options?: OperationOptions): Promise<GetFeedbackResponse>;
    readonly endpointUrl: string;
    getIncidentRootCauses(detectionConfigId: string, incidentId: string, options?: OperationOptions): Promise<GetIncidentRootCauseResponse>;
    getMetricEnrichedSeriesData(detectionConfigId: string, startTime: Date, endTime: Date, seriesToFilter: DimensionKey[], options?: GetMetricEnrichedSeriesDataOptions): Promise<GetMetricEnrichedSeriesDataResponse>;
    getMetricFeedback(id: string, options?: OperationOptions): Promise<GetFeedbackResponse>;
    getMetricSeriesData(metricId: string, startTime: Date, endTime: Date, seriesToFilter: Record<string, string>[], options?: GetMetricSeriesDataOptions): Promise<GetMetricSeriesDataResponse>;
    listAlertsForAlertConfiguration(alertConfigId: string, startTime: Date, endTime: Date, timeMode: TimeMode, options?: ListAlertsOptions): PagedAsyncIterableIterator<Alert, ListAlertsForAlertConfigurationPageResponse>;
    listAnomaliesForAlert(alertConfigId: string, alertId: string, options?: ListAnomaliesForAlertConfigurationOptions): PagedAsyncIterableIterator<Anomaly, ListAnomaliesForAlertPageResponse>;
    listAnomaliesForDetectionConfiguration(detectionConfigId: string, startTime: Date, endTime: Date, options?: ListAnomaliesForDetectionConfigurationOptions): PagedAsyncIterableIterator<Anomaly, ListAnomaliesForDetectionConfigurationPageResponse>;
    listDimensionValuesForDetectionConfiguration(detectionConfigId: string, startTime: Date, endTime: Date, dimensionName: string, options?: ListDimensionValuesForDetectionConfigurationOptions): PagedAsyncIterableIterator<string, ListDimensionValuesForDetectionConfigurationPageResponse>;
    listIncidentsForAlert(alertConfigId: string, alertId: string, options?: ListIncidentsForAlertOptions): PagedAsyncIterableIterator<Incident, ListIncidentsForAlertPageResponse>;
    listIncidentsForDetectionConfiguration(detectionConfigId: string, startTime: Date, endTime: Date, options?: ListIncidentsForDetectionConfigurationOptions): PagedAsyncIterableIterator<Incident, ListIncidentsByDetectionConfigurationPageResponse>;
    listMetricDimensionValues(metricId: string, dimensionName: string, options?: ListMetricDimensionValuesOptions): PagedAsyncIterableIterator<string, ListMetricDimensionValuesPageResponse>;
    listMetricEnrichmentStatus(metricId: string, startTime: Date, endTime: Date, options?: ListMetricEnrichmentStatusOptions): PagedAsyncIterableIterator<EnrichmentStatus, ListMetricEnrichmentStatusPageResponse>;
    listMetricFeedbacks(metricId: string, options?: ListFeedbacksOptions): PagedAsyncIterableIterator<MetricFeedbackUnion, ListMetricFeedbackPageResponse>;
    listMetricSeriesDefinitions(metricId: string, activeSince: Date, options?: ListMetricSeriesDefinitionsOptions): PagedAsyncIterableIterator<MetricSeriesDefinition, ListMetricSeriesPageResponse>;
    }

// @public
export interface MetricsAdvisorClientOptions extends PipelineOptions {
}

// @public
export class MetricsAdvisorKeyCredential {
    constructor(subscriptionKey: string, apiKey: string);
    // (undocumented)
    readonly apiKey: string;
    // (undocumented)
    readonly subscriptionKey: string;
}

// @public
export interface MetricSeriesData {
    definition: MetricSeriesDefinition;
    timestampList?: Date[];
    valueList?: number[];
}

// @public
export interface MetricSeriesDefinition {
    dimension: Record<string, string>;
    metricId: string;
}

// @public
export type MetricSeriesGroupDetectionCondition = DetectionConditionsCommon & {
    group: DimensionKey;
};

// @public
export type MetricSingleSeriesDetectionCondition = DetectionConditionsCommon & {
    series: DimensionKey;
};

// @public
export type MongoDBDataFeedSource = {
    dataSourceType: "MongoDB";
    dataSourceParameter: MongoDBParameter;
};

// @public (undocumented)
export interface MongoDBParameter {
    command: string;
    connectionString: string;
    database: string;
}

// @public
export type MySqlDataFeedSource = {
    dataSourceType: "MySql";
    dataSourceParameter: SqlSourceParameter;
};

// @public
export type PostgreSqlDataFeedSource = {
    dataSourceType: "PostgreSql";
    dataSourceParameter: SqlSourceParameter;
};

// @public
export type Severity = "Low" | "Medium" | "High";

// @public (undocumented)
export interface SeverityCondition {
    maxAlertSeverity: Severity;
    minAlertSeverity: Severity;
}

// @public (undocumented)
export interface SeverityFilterCondition {
    max: Severity;
    min: Severity;
}

// @public (undocumented)
export interface SmartDetectionCondition {
    anomalyDetectorDirection: AnomalyDetectorDirection;
    sensitivity: number;
    // (undocumented)
    suppressCondition: SuppressCondition;
}

// @public
export type SnoozeScope = "Metric" | "Series";

// @public
export type SQLServerDataFeedSource = {
    dataSourceType: "SqlServer";
    dataSourceParameter: SqlSourceParameter;
};

// @public (undocumented)
export interface SqlSourceParameter {
    connectionString: string;
    query: string;
}

// @public (undocumented)
export interface SuppressCondition {
    minNumber: number;
    minRatio: number;
}

// @public
export type TimeMode = "AnomalyTime" | "CreatedTime" | "ModifiedTime";

// @public (undocumented)
export interface TopNGroupScope {
    minTopCount: number;
    period: number;
    top: number;
}

// @public
export type WebhookHook = {
    hookType: "Webhook";
    hookParameter: WebhookHookParameter;
} & HookCommon;

// @public (undocumented)
export interface WebhookHookParameter {
    certificateKey?: string;
    certificatePassword?: string;
    endpoint: string;
    headers?: {
        [propertyName: string]: string;
    };
    password?: string;
    username?: string;
}

// @public
export type WebhookHookPatch = {
    hookType: "Webhook";
    hookParameter?: WebhookHookParameter;
} & HookPatchCommon;


// (No @packageDocumentation comment for this package)

```
