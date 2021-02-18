import { Aggregator } from "../../beans/aggregators/aggregator";
import { TemplatingUtils } from "../../utils/templating_utils";
import { SamplingConverter } from "./sampling_converter";
export declare class SamplingParameterConverter {
    private samplingConverter;
    private templatingUtils;
    constructor(templatingUtils: TemplatingUtils, samplingConverter: SamplingConverter);
    convertSamplingParameters(aggregator: Aggregator): Aggregator;
    private findParameterIndex;
}
