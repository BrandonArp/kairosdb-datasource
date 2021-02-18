import { AggregatorParameter } from "../../beans/aggregators/parameters/aggregator_parameter";
import { UnitValue } from "../../beans/aggregators/utils";
import { AutoValueSwitch } from "../../directives/auto_value_switch";
import { TemplatingUtils } from "../../utils/templating_utils";
export declare class ParameterObjectBuilder {
    private templatingUtils;
    private autoValueEnabled;
    private autoValueDependentParameters;
    private autoIntervalValue;
    private autoIntervalUnit;
    constructor(templatingUtils: TemplatingUtils, interval: string, autoValueSwitch: AutoValueSwitch, snapToIntervals?: UnitValue[]);
    build(parameter: AggregatorParameter): any;
    private buildAlignmentParameter;
    private buildSamplingParameter;
    private buildDefault;
    private isOverriddenByAutoValue;
}
